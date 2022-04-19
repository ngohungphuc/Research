const tmpl = document.createElement('template');
tmpl.innerHTML = `
    <style>
    .checkbox {
        border: 2px black solid;
        display: inline;
        padding:10px;
        cursor: pointer;
    }

    .checkbox-checked {
        background-color: LightSteelBlue
    }
    </style>

    <div class="checkbox"></div>
`;

export class CustomCheckboxElement extends HTMLElement {
  _clicked: EventListener | undefined;

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    if (this.shadowRoot) {
      this.shadowRoot.appendChild(tmpl.content.cloneNode(true));
    }
    this.label = 'Yes or No?';
  }

  static get observedAttributes() {
    return ['label', 'checked'];
  }

  _checked = false;

  get checked() {
    return this._checked;
  }

  set checked(value: boolean) {
    if (!this.shadowRoot) {
      return;
    }
    this._checked = value;
    const checkbox = this.shadowRoot.querySelector('.checkbox');
    if (!checkbox) {
      return;
    }

    if (value) {
      checkbox.classList.add('checkbox-checked');
    } else {
      checkbox.classList.remove('checkbox-checked');
    }
  }

  _label = '';

  get label() {
    return this._label;
  }

  set label(value: string) {
    if (!this.shadowRoot) {
      return;
    }

    this._label = value;

    const checkbox = this.shadowRoot.querySelector('.checkbox');
    if (!checkbox) {
      return;
    }
    checkbox.textContent = value;
  }

  connectedCallback() {
    if (!this.shadowRoot) {
      return;
    }
    const checkbox = this.shadowRoot.querySelector('.checkbox');
    if (!checkbox) {
      return;
    }

    this._clicked = () => {
      this.checked = !this.checked;

      // TODO: Dispatch a changed event with detail: this.checked here.
      this.dispatchEvent(new CustomEvent('changed', { detail: this.checked }));
    };

    checkbox.addEventListener('click', this._clicked);
  }

  disconnectedCallback() {
    if (!this.shadowRoot) {
      return;
    }
    const checkbox = this.shadowRoot.querySelector('.checkbox');
    if (!checkbox || !this._clicked) {
      return;
    }
    checkbox.removeEventListener('click', this._clicked);
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (name === 'label') {
      this.label = newValue;
    } else if (name === 'checked') {
      this.checked = !!newValue;
    }
  }
}
