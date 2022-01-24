import { Editor } from '../../editor/editor.js';
import { Label } from '../ui/Label.js';

export class LabelHandler {

    constructor() {
        this.all = false; 
    }

    processAll = (event, UITarget, component) => {
        const value = event.target.checked;
        this.all = value;
    }

    handleFontSize = (event, UITarget, component) => {
        if(this.all == true) this.handleAllFontSize(event, UITarget, component);
        else {
            const value = event.target.value;
            component.value = value;
            
            if(UITarget.target) {            
                UITarget.target.style.fontSize = value + 'px';
                UITarget.target.fontSize = value + 'px';
                if(UITarget.object.htmlContainer) {
                    UITarget.object.htmlContainer.style.width = "";
                    UITarget.object.htmlContainer.style.height = "";
                }
            }
        }
    }

    handleWidth = (event, UITarget, component) => {
        if(this.all == true) this.handleAllWidth(event, UITarget, component);
        else {
            const value = event.target.value * 10;
            component.value = value;
            if(UITarget.target) {            
                UITarget.target.style.width = value + 'px';
                UITarget.target.width = value + 'px';
            }
        }
    }

    handleFont = (event, UITarget) => {
        if(this.all == true) this.handleAllFont(event, UITarget);
        else {
            const font = event.target.value;    

            //if the font is not loaded
            /*if(!this.loadedGoogleFonts.includes(font)) {
                WebFont.load({ google: { families: [font] } });   
            }*/        
            UITarget.target.style.fontFamily = font;    
            UITarget.target.setAttribute("font", font);   
        } 
    }

    handleColor = (event, UITarget) => {
        if(this.all == true) this.handleAllColor(event, UITarget);
        else {
            if(UITarget.target) {
                UITarget.target.style.color = event.target.value;                 
            }
        }
    }

    handleBorderColor = (event, UITarget) => {
        if(this.all == true) this.handleAllBorderColor(event, UITarget);
        else {
            let value = event.target.value;
            if(UITarget.target) {
                //-webkit-text-stroke: 1px black;
                //UITarget.target.style.cssText += '-webkit-text-stroke: 1px ' + event.target.value + ';';
                UITarget.target.style.webkitTextStrokeColor = value;
                //UITarget.target.style.border = "1px solid " + event.target.value;                 
            }
        }
    }

    handleBorderWidth = (event, UITarget, component) => {
        if(this.all == true) this.handleAllBorderWidth(event, UITarget, component);
        else {
            const value = event.target.value;
            
            if(UITarget.target) {            
                UITarget.target.style.webkitTextStrokeWidth =  value + 'px';
                component.value = value;
            }
        }
    }

    handleChangeName(event, UITarget) {
        const value = event.target.value;

        UITarget.object.htmlLabel.innerText = value;
    }

    setAbsolutePosition(event, UITarget) {
        let wapDiv = document.querySelector('.my-pedal');
        // Test BMT Label absolute 
        var component = UITarget.target;
        var coord = component.getBoundingClientRect(); 
        component.style.position = "absolute";
        component.style.width = coord.width + "px";
        component.classList.add('drag');  
    }

    // Bof  
    duplicate(event, UITarget) {
        let wapDiv = document.querySelector('.my-pedal');
        let labelText = UITarget.object.name;
        let htmlLabel = document.createElement("label");
        htmlLabel.setAttribute("for", labelText);
        htmlLabel.textContent = "labelText";  
        htmlLabel.contentEditable = true;
        htmlLabel.style.textAlign = 'center';
        htmlLabel.style.position = 'absolute';
        htmlLabel.style.display = 'block';
        htmlLabel.style["touch-action"] = 'none';
        htmlLabel.classList.add("target-style-label");
        htmlLabel.classList.add("drag");
        let cpy = new Label();
        cpy.htmlLabel = htmlLabel;
        Editor.getInstance().registerTargetEvent(cpy);
        wapDiv.appendChild(htmlLabel); 
    }
    
    // Hide a label
    hideLabel(event, UITarget, component) {
        //const isChecked = component.checked;   
        const isChecked = true;   
        // Exept if its the main component
        //if(!UITarget.target.classList.contains("my-pedal")) {
            if(!isChecked) {
                UITarget.target.style.display = '';
            }
            else {
                UITarget.target.style.display = 'none';
            }
        //}
    }

    handleTextChangesLabel(event, UITarget, component) {
        component.value = UITarget.textContent;
    }


    // ----- Precess all Labels -----
    handleAllFontSize(event, UITarget, component) {
        const value = event.target.value;
        component.value = value;
        
        // Select all Labels
        let pedal = document.querySelector("#pedal-container");
        let labelsSelectors = pedal.querySelectorAll("label");

        labelsSelectors.forEach(element => {
            element.style.fontSize = value + 'px';
            element.fontSize = value + 'px';
        });
    }

    handleAllWidth(event, UITarget, component) {
        const font = event.target.value;    

        // Select all Labels
        let pedal = document.querySelector("#pedal-container");
        let labelsSelectors = pedal.querySelectorAll("label");

        //if the font is not loaded
        /*if(!this.loadedGoogleFonts.includes(font)) {
            WebFont.load({ google: { families: [font] } });   
        }     */
        
        labelsSelectors.forEach(element => {
            const value = event.target.value * 10;
            component.value = value;       
            element.style.width = value + 'px';
            element.width = value + 'px';
        });   
    }

    handleAllFont = (event, UITarget) => {
        const font = event.target.value;    

        // Select all Labels
        let pedal = document.querySelector("#pedal-container");
        let labelsSelectors = pedal.querySelectorAll("label");

        //if the font is not loaded
        //if(!this.loadedGoogleFonts.includes(font)) {
        //    WebFont.load({ google: { families: [font] } });   
        //}     
        
        labelsSelectors.forEach(element => {
            element.style.fontFamily = font;
            element.setAttribute("font", font);
        });      
    }

    handleAllColor(event, UITarget) {

        // Select all Labels
        let pedal = document.querySelector("#pedal-container");
        let labelsSelectors = pedal.querySelectorAll("label");    
        
        labelsSelectors.forEach(element => {
            element.style.color = event.target.value; 
        });  
    }

    handleAllBorderColor = (event, UITarget) => {
        const value = event.target.value;

        // Select all Labels
        let pedal = document.querySelector("#pedal-container");
        let labelsSelectors = pedal.querySelectorAll("label");    
        
        labelsSelectors.forEach(element => {
            element.style.webkitTextStrokeColor = value;
        });  
    }

    handleAllBorderWidth = (event, UITarget, component) => {
        const value = event.target.value;
        component.value = value;

        // Select all Labels
        let pedal = document.querySelector("#pedal-container");
        let labelsSelectors = pedal.querySelectorAll("label");    
        
        labelsSelectors.forEach(element => {
            element.style.webkitTextStrokeWidth =  value + 'px';
        });  
    }

    updatePanel(target, t) {
        target = target.htmlLabel;
        // Selectors
        let labelFontSizeRangeSelector = t.querySelector("#label-label-size-range");
        let labelFontSizeNumberSelector = t.querySelector("#label-label-size-number");
        let labelColorSelector = t.querySelector("#label-label-color");
        let labelValueSelector = t.querySelector("#label-label");
        let labelBorderColorSelector = t.querySelector("#border-border-color");
        let labelBorderWidthRangeSelector = t.querySelector("#border-border-width-range");
        let labelBorderWidthNumberSelector = t.querySelector("#border-border-width-number");
        // Updators 
        // Font size
        let fontSize = target.style["font-size"].replace('px','');
        let fontSizeDefault = "16";
        fontSize ? (labelFontSizeRangeSelector.value = fontSize, labelFontSizeNumberSelector.value = fontSize) : (labelFontSizeRangeSelector.value = fontSizeDefault, labelFontSizeNumberSelector.value = fontSizeDefault);
        // Color
        labelColorSelector.value = tinycolor(target.style["color"]).toHexString();
        // Label value
        labelValueSelector.value = target.innerHTML;
        // Border
        let border = target.style["-webkit-text-stroke"].split("px ");
        let borderSizeDefault = "0";
        border[1] == undefined ? labelBorderColorSelector.value = tinycolor("rgb(0, 0, 0)").toHexString() : labelBorderColorSelector.value = tinycolor(border[1]).toHexString();
        border[0] ? (labelBorderWidthRangeSelector.value = border[0], labelBorderWidthNumberSelector.value = border[0]) : (labelBorderWidthRangeSelector.value = borderSizeDefault, labelBorderWidthNumberSelector.value = borderSizeDefault);
    }
}