import { AbstractComponent } from './AbstractComponent.js';

export class BorderComponent extends AbstractComponent {

    constructor(name, listener, targetType, UITarget, fn_defaultValues) {
        super(name, targetType, fn_defaultValues);

        this.htmlComponent = document.createElement('div');
        this.htmlComponent.innerHTML = `
        <div>
            Border color <input id="` + name + `-border-color" type="color">
            Border width <input id="` + name + `-border-width-range" type="range"> | 
            <input id="` + name + `-border-width-number" type="number" min="0" max="20"> px
        </div>`;

        this.borderColor = this.htmlComponent.querySelector("#" + name + "-border-color");
        this.borderColor.addEventListener("input", event => listener.color(event, UITarget));

        this.borderWidthRange = this.htmlComponent.querySelector("#" + name + "-border-width-range");
        this.borderWidthRange.addEventListener("input", event => listener.width(event, UITarget, this.borderWidthNumber));

        this.borderWidthNumber = this.htmlComponent.querySelector("#" + name + "-border-width-number");
        this.borderWidthNumber.addEventListener("input", event => listener.width(event, UITarget, this.borderWidthRange));   
    }
}