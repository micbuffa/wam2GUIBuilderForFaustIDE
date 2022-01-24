import { AbstractComponent } from './AbstractComponent.js';
import { knobVSliderDefaultValues } from './config/DefaultValues.js';

export class VSlider extends AbstractComponent {    
    constructor(labelText, address) {
        super(labelText, "webaudio-knob", address);      
        this.type = 'knob'; 
        this.webAudioType = 'knob';
        this.htmlComponent.style.display = 'block';
        this.setKnobBody();  
        //this.setKnobEditor();
    }   
    
    updateSize(width = null, height = null) {
        if(width == null) this.htmlComponent.width = knobVSliderDefaultValues.WIDHT;
        else this.htmlComponent.width = width;
        if(width == null) this.htmlComponent.height = knobVSliderDefaultValues.HEIGHT;
        else this.htmlComponent.height = height;
    }

    updateViewPanel() {
        // Get elements to update
        /*this.selectorWidth = document.getElementById("knob-width-slider-range");
        this.selectorHeight = document.getElementById("knob-height-slider-range");
        //this.keepRatio = document.getElementById("keep ratio");
        
        this.selectorWidth.value = this.attributes.width;
        this.selectorHeight.value = this.attributes.height;
        //this.selectorHeight.checked = this.attributes.keepRatio;*/
    }

    setKnobEditor() {   
        this.editor = document.createElement("knob-editor");
        this.editor.attachElement(this);
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
            "src": knobVSliderDefaultValues.SRC,
            "sprites": knobVSliderDefaultValues.SPRITES,
            "min": component.min,
            "max": component.max,
            "step": component.step,            
            "width": knobVSliderDefaultValues.WIDHT,
            "height": knobVSliderDefaultValues.HEIGHT,                           
            //s"keepRatio": knobDefaultValues.KEEPRATIO,                           
        };
        super.setAttributes(this.attributes);
    }

    getAttributes() {
        return this.attributes;
    }
}