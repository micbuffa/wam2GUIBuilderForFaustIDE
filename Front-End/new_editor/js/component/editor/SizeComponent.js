import { AbstractComponent } from './AbstractComponent.js';

export class SizeComponent extends AbstractComponent {

    constructor(name, listener, targetType, UITarget, fn_defaultValues, measure = "px") {
        super(name, targetType, fn_defaultValues);

        this.htmlComponent = document.createElement('div');
        this.htmlComponent.innerHTML = `
        <div>
            Width ` + targetType + ` <input id="` + name + `-` + targetType + `-width-range" type="range" min="0" max="2000"> | 
            <input id="` + name + `-` + targetType + `-width-number" type="number" min="0" max="2000"> ` + measure + `
            Height ` + targetType + ` <input id="` + name + `-` + targetType + `-height-range" type="range" min="0" max="2000"> | 
            <input id="` + name + `-` + targetType + `-height-number" type="number" min="0" max="2000"> ` + measure + `<br>
            Keep ratio <input id="` + name + `-` + targetType + `-keep-ratio" type="checkbox" checked>
        </div>`;

        this.widthComponent = this.htmlComponent.querySelector("#" + name + "-" + targetType + "-width-range");
        this.widthComponent.addEventListener("input", event => listener.width(event, UITarget, this));

        this.widthComponentNumber = this.htmlComponent.querySelector("#" + name + "-" + targetType + "-width-number");
        this.widthComponentNumber.addEventListener("input", event => listener.width(event, UITarget, this));


        this.heightComponent = this.htmlComponent.querySelector("#" + name + "-" + targetType + "-height-range");
        this.heightComponent.addEventListener("input", event => listener.height(event, UITarget, this));

        this.heightComponentNumber = this.htmlComponent.querySelector("#" + name + "-" + targetType + "-height-number");
        this.heightComponentNumber.addEventListener("input", event => {
            listener.height(event, UITarget, this)
        });

        this.keepRatioComponent = this.htmlComponent.querySelector("#" + name + "-" + targetType + "-keep-ratio");
    }
}