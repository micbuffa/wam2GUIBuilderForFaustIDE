import { AbstractComponent } from './AbstractComponent.js';

export class SettingsComponent extends AbstractComponent {

    constructor(name, listener, targetType, UITarget, fn_defaultValues) {
        super(name, targetType, fn_defaultValues);

        this.htmlComponent = document.createElement('div');

        if(targetType == "layout"){
            // <button id="` + name + `-duplicate" type="checkbox">Create new</button><br>
            this.htmlComponent.innerHTML = `
            <div>
                Hide component <input id="` + name + `-hide" type="checkbox"><br>
                Remove shadow <input id="` + name + `-shadow" type="checkbox">
            </div>`;

            //this.duplicate = this.htmlComponent.querySelector("#" + name + "-duplicate");
            //this.duplicate.addEventListener("click", event => listener.duplicate(event, UITarget, this.duplicate));

            this.hide = this.htmlComponent.querySelector("#" + name + "-hide");
            this.hide.addEventListener("input", event => listener.hide(event, UITarget, this.hide));

            this.shadow = this.htmlComponent.querySelector("#" + name + "-shadow");
            this.shadow.addEventListener("input", event => listener.shadow(event, UITarget, this.shadow));
        } else if(targetType == "label"){
            // Detach <input id="` + name + `-detach" type="checkbox">
            this.htmlComponent.innerHTML = `
            <div>
                <button id="` + name + `-duplicate" type="checkbox">Create new</button><br>
                <button id="` + name + `-hide" type="checkbox">Remove label</button><br>
            </div>`; 

            this.duplicate = this.htmlComponent.querySelector("#" + name + "-duplicate");
            this.duplicate.addEventListener("click", event => listener.duplicate(event, UITarget, this.duplicate));

            this.hide = this.htmlComponent.querySelector("#" + name + "-hide");
            this.hide.addEventListener("click", event => listener.hide(event, UITarget, this.hide));

            /*this.detach = this.htmlComponent.querySelector("#" + name + "-detach");
            this.detach.addEventListener("input", event => listener.detach(event, UITarget, this.detach));*/
        } else {
            this.htmlComponent.innerHTML = `
            <div>
                targetType not found
            </div>`;
        }
    }
}