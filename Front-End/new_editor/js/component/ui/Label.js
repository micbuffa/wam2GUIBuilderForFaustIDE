import { AbstractComponent } from './AbstractComponent.js';

export class Label extends AbstractComponent {    
    constructor(labelText, address) {
        super(labelText, "label", address); 
    } 
}