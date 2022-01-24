import { AbstractComponent } from './AbstractComponent.js';
import { vSliderDefaultValues } from './config/DefaultValues.js';

export class VSlider extends AbstractComponent {    
    constructor(labelText, address) {
        super(labelText, "webaudio-slider", address);      
        this.type = 'vslider';
        this.webAudioType = 'slider';
        this.sliderBody = undefined;
        this.sliderKnob = undefined;
        this.setBody();/*
        super(labelText, "webaudio-knob", address);      
        this.type = 'knob'; 
        this.webAudioType = 'knob';
        this.htmlComponent.style.display = 'block';
        this.setKnobBody();*/
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

    setKnobBody() {        
        const interval = setTimeout(() => {
            const childs = this.htmlComponent.childNodes;
            this.htmlComponent.style["background-size"] = '100%';
            childs.forEach(c => {
                if(c.classList) {                    
                    c.classList.forEach(className => {
                        if(className === "webaudio-knob-body"){
                            this.knobBody = c;
                            // BMT: Idk where this line go
                            this.knobBody.style["background-size"] = '100%';
                            clearInterval(interval)
                        }
                    });
                }
            });
        }, 200);
        this.htmlComponent.style["background-size"] = '100%';
        console.log(this.htmlComponent.style["background-size"])
    }

    setAttributes(component) {        
        const attributes = {
            "src": vSliderDefaultValues.SRC,
            "knobsrc": vSliderDefaultValues.KNOBSRC,
            "value": component.init,
            "tooltip": component.label + " %d",
            "max": component.max,
            "min": component.min,
            "step": component.step,   
            "height": vSliderDefaultValues.HEIGHT,
            "width": vSliderDefaultValues.WIDTH,  
        };
        super.setAttributes(attributes);
    }
}