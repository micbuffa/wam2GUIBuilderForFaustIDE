import { AbstractComponent } from './AbstractComponent.js';

export class GradientSelectorComponent extends AbstractComponent {

    constructor(name, listener, targetType, UITarget, fn_defaultValues) {
        super(name, targetType, fn_defaultValues);

        this.htmlComponent = document.createElement('div');
        this.htmlComponent.innerHTML = `
        <div>
            From <input id="` + name + `-gradient-color-from" type="color">
            To <input id="` + name + `-gradient-color-to" type="color">
        </div>
        <div>
            Opacity <input id="` + name + `-gradient-opacity" type="range">
        </div>
        <div>
            Global opacity <input id="` + name + `-texture-opacity" type="range">
        </div>
        <div>
            Rotate <input id="` + name + `-gradient-rotate" type="checkbox">
        </div>`;

        let colorFrom = this.htmlComponent.querySelector("#" + name + "-gradient-color-from");
        colorFrom.addEventListener("input", event => listener.from(event, UITarget));

        let colorTo = this.htmlComponent.querySelector("#" + name + "-gradient-color-to");
        colorTo.addEventListener("input", event => listener.to(event, UITarget));

        let sliderRange = this.htmlComponent.querySelector("#" + name + "-gradient-opacity");
        sliderRange.addEventListener("input", event => listener.opacity(event, UITarget));   

        let sliderTextureOpacityRange = this.htmlComponent.querySelector("#" + name + "-texture-opacity");
        sliderTextureOpacityRange.addEventListener("input", event => listener.textureOpacity(event, UITarget));   

        let checkRotate = this.htmlComponent.querySelector("#" + name + "-gradient-rotate");
        checkRotate.addEventListener("change", event => listener.rotate(event, UITarget));   
    }
}