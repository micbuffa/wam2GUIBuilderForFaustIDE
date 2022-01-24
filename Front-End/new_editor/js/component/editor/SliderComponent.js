import { AbstractComponent } from './AbstractComponent.js';

export class SliderComponent extends AbstractComponent {

    constructor(name, listener, targetType, UITarget, fn_defaultValues, measure = "px") {
        super(name, targetType, fn_defaultValues);
        // Replace all spaces by -
        name = name.replaceAll(" ", "-");

        this.htmlComponent = document.createElement('div');
        this.htmlComponent.innerHTML = `
            <input id="` + name + `-slider-range" type="range"> | 
            <input id="` + name + `-slider-number" type="number"> ` + measure + `
        `;
        
        let sliderRange = this.htmlComponent.querySelector("#" + name + "-slider-range");
        sliderRange.setAttribute("min", "0");
        sliderRange.setAttribute("max", "150");
        sliderRange.addEventListener("input", event => listener(event, UITarget, sliderNum));

        let sliderNum = this.htmlComponent.querySelector("#" + name + "-slider-number");
        sliderNum.setAttribute("min", "0");
        sliderNum.setAttribute("max", "150");
        sliderNum.addEventListener("input", event => listener(event, UITarget, sliderRange));
    }

}