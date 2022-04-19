import { CommonModule } from '@angular/common';
import { DemoComponent } from './demo.component';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

@NgModule({
    imports: [CommonModule],
    exports: [DemoComponent],
    declarations: [DemoComponent]
})
export class DemoModule { 

    constructor(injector: Injector) {
        const demoElm = createCustomElement(DemoComponent, {injector});
        customElements.define('my-demo', demoElm);
    }

}