import { AbstractComponent } from './AbstractComponent.js';

export class LabelComponent extends AbstractComponent {

    constructor(name, listener, targetType, UITarget, fn_defaultValues, measeure = "px") {
        super(name, targetType, fn_defaultValues);

        this.htmlComponent = document.createElement('div');
        this.htmlComponent.innerHTML = `
        <div>
            Font size <input id="` + name + `-label-size-range" type="range"> | 
            <input id="` + name + `-label-size-number" type="number" min="0" max="100"> ` + measeure + `<br>
            Color <input id="` + name + `-label-color" type="color"><br>
        `;
        if(listener.name) this.htmlComponent.innerHTML += `Label <input id="` + name + `-label"><br>`;
        if(listener.width) this.htmlComponent.innerHTML += `Width <input id="` + name + `-label-width-range" type="range"> | <input id="` + name + `-label-width-number" type="number" min="0" max="1000"> ` + measeure + ``;
        this.htmlComponent.innerHTML += `</div>`;

        if(listener.name) {
            this.labelName = this.htmlComponent.querySelector("#" + name + "-label");
            this.labelName.addEventListener("input", event => listener.name(event, UITarget));
        }

        this.labelSizeRange = this.htmlComponent.querySelector("#" + name + "-label-size-range");
        this.labelSizeRange.addEventListener("input", event => listener.size(event, UITarget, this.labelSizeNumber));

        this.labelSizeNumber = this.htmlComponent.querySelector("#" + name + "-label-size-number");
        this.labelSizeNumber.addEventListener("input", event => listener.size(event, UITarget, this.labelSizeRange));   

        this.labelColorNumber = this.htmlComponent.querySelector("#" + name + "-label-color");
        this.labelColorNumber.addEventListener("input", event => listener.color(event, UITarget));  

        if(listener.width) {
            this.labelWidthRange = this.htmlComponent.querySelector("#" + name + "-label-width-range");
            this.labelWidthRange.addEventListener("input", event => listener.width(event, UITarget, this.labelWidthNumber));   

            this.labelWidthNumber = this.htmlComponent.querySelector("#" + name + "-label-width-number");
            this.labelWidthNumber.addEventListener("input", event => listener.width(event, UITarget, this.labelWidthRange));   
        }
    }
}