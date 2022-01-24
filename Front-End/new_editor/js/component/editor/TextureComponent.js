import { AbstractComponent } from './AbstractComponent.js';
import { ImageSelectorComponent } from './ImageSelectorComponent.js';

export class TextureComponent extends AbstractComponent {

    constructor(name, listener, targetType, UITarget, fn_defaultValues) {
        super(name, targetType, fn_defaultValues);

        this.htmlComponent = document.createElement('div');
        this.htmlComponent.innerHTML = `
        <div>
            Border color <input id="` + name + `-border-color" type="color">
            Border width <input id="` + name + `-border-width-range" type="range"> | 
            <input id="` + name + `-border-width-number" type="number" min="0" max="20"> px
        </div>`;

        let borderColor = this.htmlComponent.querySelector("#" + name + "-border-color");
        borderColor.addEventListener("input", event => listener.color(event, UITarget));

        let borderWidthRange = this.htmlComponent.querySelector("#" + name + "-border-width-range");
        borderWidthRange.addEventListener("input", event => listener.width(event, UITarget));

        let borderWidthNumber = this.htmlComponent.querySelector("#" + name + "-border-width-number");
        borderWidthNumber.addEventListener("input", event => listener.width(event, UITarget));   
    }
}