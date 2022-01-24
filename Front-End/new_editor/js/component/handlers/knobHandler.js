import { Editor } from '../../editor/editor.js';
import { HSlider } from '../../component/ui/HSlider.js';
import { Knob } from '../../component/ui/Knob.js';
import { AbstractHandler } from './AbstractHandler.js';

export class KnobHandler extends AbstractHandler {

    constructor() {
        super();
        this.keepRatio = false;
        this.keepAllRatio = true;
        this.all = false; 
    }

    processAll = (event, UITarget, component) => {
        const value = event.target.checked;
        this.all = value;
    }

    handleKnobLabelWidth = (event, UITarget, component) => {
        if(this.all == true) this.handleAllKnobWidth(event, UITarget, component);
        else {
            const value = event.target.value;
            //this.UITarget.target.src = './img/knobs/boss_golden.png';
            //this.UITarget.target.sprites = 99; // -1!        
            if(UITarget.target) {
                if(component.keepRatioComponent.checked) {
                    UITarget.object.attributes.height = value;
                    UITarget.target.height = value;
                    UITarget.target.setAttribute("height", value);

                    component.heightComponent.value = value;
                    component.heightComponentNumber.value = value;
                }
                UITarget.object.attributes.width = value;
                UITarget.target.width = value;
                UITarget.target.setAttribute("width", value);
                UITarget.object.htmlContainer.style.width = "";
                UITarget.object.htmlContainer.style.height = "";

                component.widthComponent.value = value;
                component.widthComponentNumber.value = value;
            }
        }
    }

    handleKnobLabelHeight = (event, UITarget, component) => {
        if(this.all == true) this.handleAllKnobHeight(event, UITarget, component);
        else {
            const value = event.target.value;
            if(UITarget.target) {
                if(component.keepRatioComponent.checked) {
                    UITarget.object.attributes.width = value;
                    UITarget.target.width = value;
                    UITarget.target.setAttribute("width", value);
                    
                    component.widthComponent.value = value;
                    component.widthComponentNumber.value = value;
                }
                UITarget.object.attributes.height = value;
                UITarget.target.height = value;
                UITarget.target.setAttribute("height", value);
                UITarget.object.htmlContainer.style.width = "";
                UITarget.object.htmlContainer.style.height = "";

                component.heightComponent.value = value;
                component.heightComponentNumber.value = value;
            }
        }
    }

    handleKnobZPosition = (event, UITarget, component) => {
        if(this.all == true) this.handleAllKnobZposition(event, UITarget, component);
        else {
            const value = event.target.value;
            console.log(UITarget.object)
            UITarget.object.attributes.zIndex = value;
            UITarget.target.zIndex = value;
            UITarget.object.htmlContainer.style.zIndex = value;
            UITarget.target.setAttribute("zIndex", value);
            
            component.value = value;
        }
    }

    handleKnobRatio = (event, UITarget) => {
        if(this.all == true) this.keepAllRatio = event.target.checked;
        else {
            this.keepAllRatio = false;
            this.keepRatio = event.target.checked;
        }
        //UITarget.object.attributes.keepRatio = event.target.checked;
    }

    handleKnobSrc = (event, UITarget) => {
        if(this.all == true) this.handleAllKnobSrc(event, UITarget);
        else {
            const src = event.target.src;        
            //We must slice the string, because the image we click on is a preview, and the directory is different
            //ex:   preview:    ./img/knobs2/file.png
            //      sprite:     ./img/knobs/file.png
            const fileName = src.slice(src.lastIndexOf('/') + 1);

            if(UITarget.target) { 
                UITarget.target.src = "./img/knobs/" + fileName;
                UITarget.target.setAttribute('src', "./img/knobs/" + fileName);

                UITarget.object.knobBody.style.removeProperty('background-size');
                UITarget.object.knobBody.style.removeProperty('transform');      

                let height = UITarget.target.getAttribute("height");
                let width = UITarget.target.getAttribute("width");
                UITarget.object.updateSize(width, height);   
                // Update view
                updateHandleSrc(src, document.querySelector("#table--knob").querySelectorAll("img"));
            }
        }
    }

    handleKnobTypeChange(event, UITarget) {
        const isChecked = event.target.checked;
                 
        const parent = UITarget.object.htmlContainer.parentElement;
        parent.removeChild(UITarget.object.htmlContainer);
        const direction = UITarget.object.htmlContainer.style.display;
        const name = UITarget.object.name;
        delete UITarget.object;
        
        const newComponent = new HSlider(name);
        newComponent.htmlContainer.style.display = direction;
        parent.appendChild(newComponent.htmlContainer)
        Editor.getInstance().registerTargetEvent(newComponent);

        Editor.getInstance().changeEditorType(newComponent.type);
        Editor.getInstance().updateTarget(newComponent);
        
        event.target.checked = !isChecked;        
    }

    // ----- Precess all Knobs -----
    handleAllKnobWidth = (event, UITarget, component) => {
        const value = event.target.value;    
        // Select all knobs
        let pedal = document.querySelector("#pedal-container");
        let knobsSelectors = pedal.querySelectorAll("webaudio-knob");

        knobsSelectors.forEach(element => {
            let knob = document.getElementById(element.id);
            if(component.keepRatioComponent.checked) {
                // Set data
                knob.setAttribute("height", value);
                // Set view
                element.height = value;

                component.heightComponent.value = value;
                component.heightComponentNumber.value = value;
            }
            // Set data
            knob.setAttribute("width", value);
            // Set view
            element.width = value;
            knob.parentElement.style.width = value+"px";

            component.widthComponent.value = value;
            component.widthComponentNumber.value = value;
        });
    }

    handleAllKnobHeight = (event, UITarget, component) => {
        const value = event.target.value;    
        
        // Select all knobs
        let pedal = document.querySelector("#pedal-container");
        let knobsSelectors = pedal.querySelectorAll("webaudio-knob");

        knobsSelectors.forEach(element => {
            let knob = document.getElementById(element.id);
            if(component.keepRatioComponent.checked) {
                knob.setAttribute("width", value);
                element.width = value;
                knob.parentElement.style.width = value+"px";

                component.widthComponent.value = value;
                component.widthComponentNumber.value = value;
            }
            knob.setAttribute("height", value);
            element.height = value;

            component.heightComponent.value = value;
            component.heightComponentNumber.value = value;
        });
    }

    handleAllKnobZposition = (event, UITarget, component) => {
        const value = event.target.value;    
        
        // Select all knobs
        let pedal = document.querySelector("#pedal-container");
        let knobsSelectors = pedal.querySelectorAll("webaudio-knob");

        knobsSelectors.forEach(element => {
            console.log(element)
            element.zIndex = value;
            UITarget.object.htmlContainer.style.zIndex = value;
            UITarget.target.setAttribute("zIndex", value);
            
            component.value = value;
        });
    }

    handleAllKnobRatio = (event, UITarget) => {
        this.keepAllRatio = event.target.checked;
    }

    handleAllKnobSrc(event, UITarget) {
        const src = event.target.src;        
        //We must slice the string, because the image we click on is a preview, and the directory is different
        //ex:   preview:    ./img/knobs2/file.png
        //      sprite:     ./img/knobs/file.png
        const fileName = src.slice(src.lastIndexOf('/') + 1);

        // Select all Labels
        let pedal = document.querySelector("#pedal-container");
        let knobsSelectors = pedal.querySelectorAll("webaudio-knob");

        knobsSelectors.forEach(element => {
            element.src = "./img/knobs/" + fileName;
            element.setAttribute('src', "./img/knobs/" + fileName);

            //UITarget.object.knobBody.style.removeProperty('background-size');
            //UITarget.object.knobBody.style.removeProperty('transform');      

            let height = element.getAttribute("height");
            let width = element.getAttribute("width");
            //UITarget.object.updateSize(width, height);   
        });

        // Update view
        updateHandleSrc(src, document.querySelector("#table--knob").querySelectorAll("img"));
    }

    updatePanel(target, t) {
        // Selectors
        let knobWidthRangeSelector = t.querySelector("#size-knob-width-range");
        let knobWidthNumberSelector = t.querySelector("#size-knob-width-number");
        let knobHeightRangeSelector = t.querySelector("#size-knob-height-range");
        let knobHeightNumberSelector = t.querySelector("#size-knob-height-number");
        let knobZIndexRangeSelector = t.querySelector("#z-index-slider-range");
        let knobZIndexNumberSelector = t.querySelector("#z-index-slider-number");
        let knobSrcAllSelector = t.querySelectorAll("img");
        // Updators
        // Width
        let knobWidth = target.width;
        let defaultKnobWidth = "40";
        knobWidth ? (knobWidthRangeSelector.value = knobWidth, knobWidthNumberSelector.value = knobWidth) : (knobWidthRangeSelector.value = defaultKnobWidth, knobWidthNumberSelector.value = defaultKnobWidth);
        // Height
        let knobHeight = target.height;
        let defaultKnobHeight = "40";
        knobHeight ? (knobHeightRangeSelector.value = knobHeight, knobHeightNumberSelector.value = knobHeight) : (knobHeightRangeSelector.value = defaultKnobHeight, knobHeightNumberSelector.value = defaultKnobHeight);
        // Z-index
        let knobZIndex = target.zIndex;
        let defaultKnobZIndex = "0";
        knobZIndex ? (knobZIndexRangeSelector.value = knobZIndex, knobZIndexNumberSelector.value = knobZIndex) : (knobZIndexRangeSelector.value = defaultKnobZIndex, knobZIndexNumberSelector.value = defaultKnobZIndex);
        // Knob src
        updateHandleSrc(target.src, knobSrcAllSelector);
    }
}

function updateHandleSrc(src, knobSrcAllSelector) {
    knobSrcAllSelector.forEach(knob => { knob.style.borderColor = "white"; });
    let knobSrc = src.split("/");
    getElementsBySrc(knobSrc[knobSrc.length - 1]).style.borderColor = "red";
}

// Inspired from https://stackoverflow.com/questions/3836381/js-document-getelementbysrc/3836403
function getElementsBySrc(srcValue) {
    var nodes = [];
    var e = document.getElementsByTagName('img');
  
    for (var i = 0; i < e.length; i++) {
      if (e[i].hasAttribute('src') && e[i].getAttribute('src').includes(srcValue)) {
        nodes.push(e[i]);
      }
    }
  
    return nodes[0];
}