import { AbstractComponent } from './AbstractComponent.js';

export class BlankComponent extends AbstractComponent {

    constructor(name, listener, targetType, UITarget, fn_defaultValues) {
        super(name, targetType, fn_defaultValues);

        this.htmlComponent = document.createElement('div');
        this.htmlComponent.style.backgroundColor = 'gray';
        this.htmlComponent.style.textAlign = 'center';
        this.htmlComponent.innerHTML += '- - - - -';
    }
}