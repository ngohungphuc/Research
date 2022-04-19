import { NgModule } from '@angular/core';
import { CustomCheckboxElement } from './custom-checkbox';
import { CustomCheckboxDirective } from './custom-checkbox.directive';

@NgModule({
    imports: [],
    declarations: [CustomCheckboxDirective],
    exports: [CustomCheckboxDirective],
    providers: [],
})
export class CustomCheckboxModule { 

    constructor() {
        customElements.define('custom-checkbox', CustomCheckboxElement);
    }

}

