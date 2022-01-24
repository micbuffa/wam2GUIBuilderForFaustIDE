import { AbstractComponent } from './AbstractComponent.js';
import { hSliderDefaultValues } from './config/DefaultValues.js';

export class HSlider extends AbstractComponent {    
    constructor(labelText, address) {
        super(labelText, "webaudio-slider", address);      
        this.type = 'hslider';
        this.webAudioType = 'slider';
        this.sliderBody = undefined;
        this.sliderKnob = undefined;
        this.setBody();
    }    

    setBody() {
        const interval = setTimeout(() => {            
            const childs = this.htmlComponent.childNodes;
            childs.forEach(c => {   
                if(c.classList) {                    
                    c.classList.forEach(className => {                        
                        if(className === "webaudio-slider-body"){
                            this.sliderBody = c;
                            this.sliderKnob = c.childNodes[0];
                            clearInterval(interval);
                        }
                    });
                }
            });
        }, 200);   
    }

    setAttributes(component) {        
        const attributes = {
            "src": hSliderDefaultValues.SRC,
            "knobsrc": hSliderDefaultValues.KNOBSRC,
            "value": component.init,
            "tooltip": component.label + " %d",
            "max": component.max,
            "min": component.min,
            "step": component.step,  
            "height": hSliderDefaultValues.HEIGHT,
            "width": hSliderDefaultValues.WIDTH,          
        };
        super.setAttributes(attributes);
    }
}