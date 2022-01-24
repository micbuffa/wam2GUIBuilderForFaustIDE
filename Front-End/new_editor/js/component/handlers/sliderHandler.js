import { Editor } from '../../editor/editor.js';
import { Knob } from '../../component/ui/Knob.js';

export class SliderHandler {

    handleSliderWidth(event, UITarget, component) {
        const value = event.target.value;
        component.value = value;
        if(UITarget.target) {
            UITarget.object.sliderBody.style.width = value + 'px';            
        }
    }

    handleSliderHeight(event, UITarget, component) {
        const value = event.target.value;
        component.value = value;

        if(UITarget.target) {
            UITarget.object.sliderBody.style.height = value + 'px';            
            UITarget.object.sliderKnob.style.top = ((value / 2) - (UITarget.object.sliderKnob.style.height / 2))  + 'px';
        }    
    }

    onClickCheckBoxTransformAll(event, UITarget) {
        const isChecked = event.target.checked;

        Editor.getInstance().targetList.forEach(c => {
            if(c.type.includes('group')) {
                c.components.forEach(cc => {
                    console.log(cc);
                });
            }else if(c.type.includes('slider')){
                try {
                    c.changeType('webaudio-knob');
                    Editor.getInstance().registerTargetEvent(c);
                }catch(e) {
                    console.log(c.type)
                }                                          
            }
        });
    }

    onClickCheckBoxTransform(event, UITarget) {
        const isChecked = event.target.checked;
 
    
        const parent = UITarget.object.htmlContainer.parentElement;
        parent.removeChild(UITarget.object.htmlContainer);
        const direction = UITarget.object.htmlContainer.style.display;
        const name = UITarget.object.name;
        delete UITarget.object;
        
        const newComponent = new Knob(name);        

        newComponent.htmlContainer.style.display = direction;
        parent.appendChild(newComponent.htmlContainer)
        Editor.getInstance().registerTargetEvent(newComponent);      
        Editor.getInstance().changeEditorType(newComponent.type);
        Editor.getInstance().updateTarget(newComponent);
        
        event.target.checked = !isChecked;    
    }

    handleAllSliderWidth(event, UITarget) {
        const value = event.target.value;

        Editor.getInstance().targetList.forEach(c => {
            if(c.type.includes('slider')){
                try {                    
                    //c.htmlComponent.width = value;   
                    c.sliderBody.style.width = value + 'px';
                                                             
                    //Editor.getInstance().registerTargetEvent(c);
                }catch(e) {
                    console.log("Error:", c.type)
                }                                          
            }
        });
    }

    
    handleAllSliderHeight(event, UITarget) {
        const value = event.target.value;

        Editor.getInstance().targetList.forEach(c => {
            if(c.type.includes('slider')){
                try {
 
                    c.sliderBody.style.height = value + 'px';
                    const knobHeightStr = c.sliderKnob.style.height;
                    const knobHeight = knobHeightStr.slice(0, knobHeightStr.length - 2);
                    c.sliderKnob.style.top = ((value / 2) - (knobHeight / 2)) + 'px';

                    const bodyHeightStr = c.sliderBody.style.height;
                    const bodyHeigth = bodyHeightStr.slice(0, bodyHeightStr.length - 2);
                    if(knobHeight > bodyHeigth) {                        
                        c.sliderKnob.style.height = (bodyHeigth / 2) + 'px';
                    }
                                       
                    //Editor.getInstance().registerTargetEvent(c);
                }catch(e) {
                    console.log("Error:", c.type)
                }                                          
            }
        });
    }

    handleSliderSrc(event, UITarget) {
        const src = event.target.src;

        const fileName = src.slice(src.lastIndexOf('/') + 1);

        if(UITarget.target) {
            //UITarget.target.src = './img/sliders/' + fileName;
            UITarget.target.src = src;
        }

    }

    handleSliderKnobSrc(event, UITarget) {
        const src = event.target.src;

        const fileName = src.slice(src.lastIndexOf('/') + 1);

        if(UITarget.target) {
            //UITarget.target.knobsrc = './img/sliders/' + fileName;
            UITarget.target.knobsrc = src;
        }

    }

    // BMT: Function setAbsolutePosition(event, UITarget)
    //Take the knob, get the top and left offset and set styles to absolute, top and left values
    setAbsolutePosition(event, UITarget) {
        var pos = [UITarget.object.htmlContainer.offsetLeft, UITarget.object.htmlContainer.offsetTop];
        UITarget.object.htmlContainer.style.position = 'absolute';
        UITarget.object.htmlContainer.style.left = pos[0] + 'px';
        UITarget.object.htmlContainer.style.top = pos[1] + 'px';
        const src = UITarget.object.htmlComponent.src;   
        // TODO: Corriger l'err 
        // Cannot redefine property: src
        document.getElementById("pedal-container").appendChild(UITarget.object.htmlContainer);
        UITarget.object.htmlComponent.src = src;

    }

    updatePanel(target, t) {
        t.querySelector("#vslider-width-slider-range").value = target.style["width"].replace('px','');
        t.querySelector("#vslider-width-slider-number").value = target.style["width"].replace('px','');

        t.querySelector("#vslider-height-slider-range").value = target.style["height"].replace('px','');
        t.querySelector("#vslider-height-slider-number").value = target.style["height"].replace('px','');
    }
}