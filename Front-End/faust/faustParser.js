/**
 * This utility will parse Faust code then extract relevant information on
 * the pedal elements necessary to run that Faust code.
 * 
 * This informations can be:
 *  - Relative disposition and alignement of pedal elements.
 *  - Ids of the pedal elements.
 *  - Ranges and step of the pedal element.
 *  - Initial value of the pedal element.
 *  - etc ...
 */
class FaustParser {

    constructor() {
        // Regular expression to mach against horizontal sliders.
       /* this.regex = new RegExp('[h|v]slider[(][^)]*[)]', 'g');
        this.defaultPedalColor = '#FFFFFF';
        this.defaultPedalRadius = '10';
        this.defaultPedalOpacity = '1';*/
    }

    /**
     * Extracts the pedal elements from a "Faust" code.
     */
    extractElements(faustCode) {
        let ret = [];

        let faustElms = faustCode.match(this.regex);
        faustElms.forEach(elm => {
            ret.push(this.extractPedalElement(elm));
        });

        return ret;
    }

    extractPedalElement(faustElement) {
        // It could be either "hslider" (horizontal slider) or "vslider" (vertical slider).
        let sliderRegex = new RegExp('.?slider.*', 'g');
        let matching = faustElement.match(sliderRegex);
        if(matching) {
            return this.extractSlider(matching[0]);
        }
    }

    /**
     * Extracts a slider from a Faust element provided in a string form.
     * @param {*} faustSlider 
     */
    extractSlider(faustSlider) {
        //let orientation;
        //faustSlider.startsWith('h') ? orientation = 'horizontal' : faustSlider.startsWith('v') ? orientation = 'vertical' : '';

        let width, height;
        let type;
        type = /\[style:knob\]/g.exec(faustSlider) ? 'knob' : 'slider';
        //console.log(type);

        if(faustSlider.startsWith('h')) {
           width = 150;
           height = 40;
        } else if(faustSlider.startsWith('v')) {
            height = 150;
            width = 40;
        }
                
        let faustSliderParams = this.extractFunctionArguments(faustSlider);
        //console.log("faustSliderParams =  ", faustSliderParams)
        let ret = {
            id: faustSliderParams[0],
            x: 10,
            y: 10,
            width: type === 'slider' ? width : 50,
            height: type === 'slider' ? height : 50,
            model: type === 'slider' ? "slider1.png" : "knob2.png",
            value: faustSliderParams[1],
            label: faustSliderParams[0],
            label_fontfamily: "Verdana",
            label_fontsize: "14",
            label_color: "#000000",
            type: type,
            min: faustSliderParams[2],
            max: faustSliderParams[3]
        }

        return ret;
    }

    extractFunctionArguments(functionStr) {
        return /\(([^)]+)\)/g.exec(functionStr)[1].replace(/\"/g, '').replace(/\[.*\]/g, '').split(',');
    }

    addElement(elem) {
        let type, width, height;
        let fontSize = 14;

        if(this.isAKnob(elem)) {
            type = 'knob';
            width = 50;
            height = 50;
        } else if(elem.type === "vslider") {
            type = 'slider';
            height = 150;
            width = 40;
        } else if(elem.type === 'hslider') {
            type = 'slider';
            width = 150;
            height = 40;
        } else if((elem.type == 'checkbox') ||  (elem.type == 'button')){
            type = 'switch';
            width = 80;
            height = 50;
        } else if(elem.type == 'label') {
            type = 'label';
            width = 80;
            height = 30;
            fontSize = 28;
        }

        let newLabel = elem.label.replace(/[&!%$`<>=:?@.+*#_/,;() ]+/g, '-');
        if(newLabel.endsWith("-")) newLabel = newLabel.substring(0, newLabel.length - 1);
        //console.log("elem.label = " + elem.label + " newLabel = " + newLabel);

        let ret = {
            //id: elem.label.replace(/\s+/g, '_'),
            id:newLabel,
            x: 10,
            y: 10,
            width: width,
            height: height,
            model: type === 'slider' ? "slider1.png" : "knob2.png",
            value: elem.init,
            label: elem.label,
            label_fontfamily: "Verdana",
            label_fontsize: fontSize,
            label_color: "#000000",
            type: type,
            // ATTENTION (MICHEL BUFFA) : all elems may not have min, max, step etc.
            min: elem.min,
            max: elem.max,
            step: elem.step,
            address: elem.address
        }
        return ret;
    }

    /**
     * Checks if the UI element retrived from Faust editor is a knob
     */
    isAKnob(elem) {
        if(elem.meta) {
            for(let param of elem.meta) {
                if(param.style === 'knob') {
                    return true;
                }
            }
        }

        return false;
    }

    singleElementsFromGroupElements(groupElements, singleElements) {
        if(!singleElements) {
            singleElements = [];
        }
        for(let elem of groupElements.items) {
            if(elem.type !== 'hgroup' && elem.type !== 'vgroup') {
                singleElements.push(this.addElement(elem));
            } else {
                singleElements = this.singleElementsFromGroupElements(elem, singleElements)
            }
        }
        return singleElements;
    }

    pedalConfigFromUI(faustUI, currentWapName) {
        let elements = this.singleElementsFromGroupElements(faustUI[0]);

        //console.log("pedalConfigFromUI WapName = " + currentWapName);
        // add the pedal label
        elements.push(this.addElement({type:'label', label:currentWapName}));

        return elements;
    }

}