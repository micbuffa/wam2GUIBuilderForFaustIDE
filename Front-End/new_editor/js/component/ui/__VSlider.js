import { AbstractComponent } from './AbstractComponent.js';
import { vSliderDefaultValues } from './config/DefaultValues.js';

export class VSlider extends AbstractComponent {    
    constructor(labelText, address) {
        super(labelText, "webaudio-knob", address);      
        this.type = 'knob'; 
        this.webAudioType = 'knob';
        this.htmlComponent.style.display = 'block';
        this.setKnobBody();  
    }   
    
    updateSize(width = null, height = null) {
        if(width == null) this.htmlComponent.width = vSliderDefaultValues.WIDHT;
        else this.htmlComponent.width = width;
        if(width == null) this.htmlComponent.height = vSliderDefaultValues.HEIGHT;
        else this.htmlComponent.height = height;
    }

    updateViewPanel() {
        // Get elements to update
        this.selectorWidth = document.getElementById("knob width");
        this.selectorHeight = document.getElementById("knob height");
        
        this.selectorWidth.value = this.attributes.width;
        this.selectorHeight.value = this.attributes.height;
    }

    setKnobBody() {        
        const interval = setTimeout(() => {
            const childs = this.htmlComponent.childNodes;
            childs.forEach(c => {
                if(c.classList) {                    
                    c.classList.forEach(className => {
                        if(className === "webaudio-knob-body"){
                            this.knobBody = c;
                            clearInterval(interval)
                        }
                    });
                }
            });
        }, 200);        
    }

    setAttributes(component) {
        this.attributes = {
            "src": vSliderDefaultValues.SRC,
            "sprites": vSliderDefaultValues.SPRITES,
            "min": component.min,
            "max": component.max,
            "step": component.step,            
            "width": vSliderDefaultValues.WIDHT,
            "height": vSliderDefaultValues.HEIGHT,                           
        };
        super.setAttributes(this.attributes);
    }

    getAttributes() {
        return this.attributes;
    }
}