import { AbstractComponent } from './AbstractComponent.js';
import { switchDefaultValues } from './config/DefaultValues.js';

export class Switch extends AbstractComponent {    
    constructor(labelText, address) {
        super(labelText, "webaudio-switch", address);      
        this.type = 'switch';
        this.webAudioType = 'switch';
    }   
    
    setAttributes(component) {        
        const attributes = {
            "src": switchDefaultValues.SRC,
            "sprites": switchDefaultValues.SPRITES,
            "width": switchDefaultValues.WIDTH,
            "height": switchDefaultValues.HEIGHT,            
        };
        super.setAttributes(attributes);
    }
}