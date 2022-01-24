import { AbstractComponent } from './AbstractComponent.js';

export class EmptyComponent extends AbstractComponent {

    constructor(name, listener, targetType, fn_defaultValues) {
        super(name, targetType, fn_defaultValues);            
    }

    setComponent(comp) {
        this.htmlComponent = comp;      
        this.htmlComponent.id = name;
        this.htmlComponent.addEventListener("change", event => listener(event));    
    }

}