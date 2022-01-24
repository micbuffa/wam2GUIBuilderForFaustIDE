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
class FaustUIParser {
    constructor() {
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

        //  MICHEL BUFFA : filter label before using them as ids...
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

    extractElements(faustUI, currentWapName) {
        let elements = this.singleElementsFromGroupElements(faustUI[0]);

        //console.log("pedalConfigFromUI WapName = " + currentWapName);
        // add the pedal label
        elements.push(this.addElement({type:'label', label:currentWapName}));

        return elements;
    }

    // previously from faust-editor WebComponent
      // MICHEL BUFFA : this is the part that should be
    // updated in order to display a much better
    // default layout instead of all elems one below
    // the other...
    pedalConfigFromUI(faustUI, currentWapName) {
        //console.log("NEW FAUST UI PARSER !!!!!")
        let elements = this.extractElements(faustUI, currentWapName);
        let width = Math.max(...elements.map(elm => elm.width)) + 20;
        width = width < 130 ? 130 : width;
        let height = 10;
  
        elements.forEach(elem => {
          // MICHEL BUFFA DIRTY FIX: as labels may contain
          // spaces and / and are used as HTML ids, let's filter
          // these chars ansd replace them by underscores...
          elem.label = elem.label.replace(/ /g, "_");
          elem.label = elem.label.replace("/", "_");
  
          elem.x = width / 2 - elem.width / 2;
          elem.y = height;
          height += elem.height + 30;
        });
  
        let detail = {
          width: width,
          height: height,
          elements: elements
        };
  
        return detail;
      }

}