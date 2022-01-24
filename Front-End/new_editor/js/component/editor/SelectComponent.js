import { AbstractComponent } from './AbstractComponent.js';

export class SelectComponent extends AbstractComponent {

    constructor(name, listener, targetType, UITarget, fn_defaultValues) {
        super(name, targetType, fn_defaultValues);

        this.htmlComponent = document.createElement('select');         
        this.htmlComponent.id = name;
        this.htmlComponent.addEventListener("change", event => listener(event, UITarget));        
    }

}