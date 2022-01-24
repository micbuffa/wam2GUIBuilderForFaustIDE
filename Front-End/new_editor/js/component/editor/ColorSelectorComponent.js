import { AbstractComponent } from './AbstractComponent.js';

export class ColorSelectorComponent extends AbstractComponent {

    constructor(name, listener, targetType, UITarget, fn_defaultValues) {
        super(name, targetType, fn_defaultValues);

        this.htmlComponent = document.createElement('input');
        this.htmlComponent.setAttribute("type", "color");   
        this.htmlComponent.id = name;
        this.htmlComponent.addEventListener("input", event => listener(event, UITarget));
    }
    
}