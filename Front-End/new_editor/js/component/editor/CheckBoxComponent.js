import { AbstractComponent } from './AbstractComponent.js';

export class CheckBoxComponent extends AbstractComponent {

    constructor(name, listener, targetType, UITarget, fn_defaultValues) {
        super(name, targetType, fn_defaultValues);

        this.htmlComponent = document.createElement('input');
        this.htmlComponent.setAttribute("type", "checkbox");   
        this.htmlComponent.id = name;
        this.htmlComponent.addEventListener("click", event => listener(event, UITarget));
    }    
}