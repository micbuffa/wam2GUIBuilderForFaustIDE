
export class SwitchHandler {
    constructor() {
        this.keepRatio = false;
    }

    processAll = (event, UITarget, component) => {
        const value = event.target.checked;
        this.all = value;
    }

    handleWidth = (event, UITarget, component) => {
        if(this.all == true) this.handleAllWidth(event, UITarget, component);
        else {
            /*const value = event.target.value;

            if(UITarget.target) {
                if(this.keepRatio) {
                    UITarget.target.height = value;
                }
                UITarget.target.width = value;        
            }*/
            const value = event.target.value;
            //this.UITarget.target.src = './img/sws/boss_golden.png';
            //this.UITarget.target.sprites = 99; // -1!        
            if(UITarget.target) {
                if(component.keepRatioComponent.checked) {
                    UITarget.target.height = value;
                    UITarget.target.setAttribute("height", value);

                    component.heightComponent.value = value;
                    component.heightComponentNumber.value = value;
                }
                UITarget.target.width = value;
                UITarget.target.setAttribute("width", value);
                UITarget.object.htmlContainer.style.width = "";
                UITarget.object.htmlContainer.style.height = "";

                component.widthComponent.value = value;
                component.widthComponentNumber.value = value;
            }
        }
    }

    handleHeight = (event, UITarget, component) => {
        if(this.all == true) this.handleAllWidth(event, UITarget, component);
        else {
            const value = event.target.value;
            if(UITarget.target) {
                if(component.keepRatioComponent.checked) {
                    UITarget.target.width = value;
                    UITarget.target.setAttribute("width", value);

                    component.widthComponent.value = value;
                    component.widthComponentNumber.value = value;
                }
                UITarget.target.height = value;
                UITarget.target.setAttribute("height", value);
                UITarget.object.htmlContainer.style.width = "";
                UITarget.object.htmlContainer.style.height = "";

                component.heightComponent.value = value;
                component.heightComponentNumber.value = value;
            }
        }
    }

    handleAllWidth = (event, UITarget, component) => {
        const value = event.target.value;    
        // Select all sws
        let pedal = document.querySelector("#pedal-container");
        let swsSelectors = pedal.querySelectorAll("webaudio-switch");

        swsSelectors.forEach(element => {
            let sw = document.getElementById(element.id);
            if(component.keepRatioComponent.checked) {
                // Set data
                sw.setAttribute("height", value);
                // Set view
                element.height = value;

                component.heightComponent.value = value;
                component.heightComponentNumber.value = value;
            }
            // Set data
            sw.setAttribute("width", value);
            // Set view
            element.width = value;
            sw.parentElement.style.width = value+"px";

            component.widthComponent.value = value;
            component.widthComponentNumber.value = value;
        });
    }

    handleAllHeight = (event, UITarget, component) => {
        const value = event.target.value;    
        // Select all sws
        let pedal = document.querySelector("#pedal-container");
        let swsSelectors = pedal.querySelectorAll("webaudio-switch");

        swsSelectors.forEach(element => {
            let sw = document.getElementById(element.id);
            if(component.keepRatioComponent.checked) {
                sw.setAttribute("width", value);
                element.width = value;
                sw.parentElement.style.width = value+"px";

                component.widthComponent.value = value;
                component.widthComponentNumber.value = value;
            }
            sw.setAttribute("height", value);
            element.height = value;

            component.heightComponent.value = value;
            component.heightComponentNumber.value = value;
        });
    }

    handleSrc = (event, UITarget) => {
        if(this.all == true) this.handleAllSrc(event, UITarget);
        else {
            const src = event.target.src;        

            const fileName = src.slice(src.lastIndexOf('/') + 1);

            if(UITarget.target) {            
                UITarget.target.src = "./img/switches/" + fileName;
                UITarget.target.setAttribute('src', "./img/switches/" + fileName);
            }
        }
    }
    
    handleAllSrc(event, UITarget) {
        const src = event.target.src;        
        //We must slice the string, because the image we click on is a preview, and the directory is different
        //ex:   preview:    ./img/sws2/file.png
        //      sprite:     ./img/sws/file.png
        const fileName = src.slice(src.lastIndexOf('/') + 1);

        // Select all Labels
        let pedal = document.querySelector("#pedal-container");
        let swsSelectors = pedal.querySelectorAll("webaudio-switch");
        swsSelectors.forEach(element => {
            element.src = "./img/switches/" + fileName;
            element.setAttribute('src', "./img/switches/" + fileName);

            //UITarget.object.swBody.style.removeProperty('background-size');
            //UITarget.object.swBody.style.removeProperty('transform');      

            let height = element.getAttribute("height");
            let width = element.getAttribute("width");
            //UITarget.object.updateSize(width, height);   
        });
    }

    handleRatio = (event, UITarget) => {
        this.keepRatio = event.target.checked;
    }

    updatePanel(target, t) {
        t.querySelector("#switch-width-slider-range").value = target.style["width"].replace('px','');
        t.querySelector("#switch-width-slider-number").value = target.style["width"].replace('px','');

        t.querySelector("#switch-height-slider-range").value = target.style["height"].replace('px','');
        t.querySelector("#switch-height-slider-number").value = target.style["height"].replace('px','');
    }
}