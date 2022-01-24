import { AbstractComponent } from './AbstractComponent.js';

export class Nentry extends AbstractComponent {    
    constructor(labelText) {
        super(labelText, "input");      
        this.type = 'input';         
    }    

    setAttributes(component) {
        const attributes = {
            "min": component.min,
            "max": component.max,
            "step": component.step,  
            "value": component.init, 
            "type": 'number',
        };
        super.setAttributes(attributes);
    }
}