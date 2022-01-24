import { AbstractComponent } from './AbstractComponent.js';

export class InputComponent extends AbstractComponent {

    constructor(name, listener, targetType, UITarget, fn_defaultValues) {
        super(name, targetType, fn_defaultValues);

        this.htmlComponent = document.createElement('input');
        this.htmlComponent.setAttribute("type", "text");   
        this.htmlComponent.id = name;
        this.htmlComponent.addEventListener("input", event => listener(event, UITarget));        
    }

}