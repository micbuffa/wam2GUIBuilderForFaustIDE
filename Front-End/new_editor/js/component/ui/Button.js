import { AbstractComponent } from './AbstractComponent.js';

export class Button extends AbstractComponent {    
    constructor(labelText, address) {
        super(labelText, "BUTTON", address);      
        this.type = 'button';         
    }    
}