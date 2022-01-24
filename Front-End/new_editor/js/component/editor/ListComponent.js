import { AbstractComponent } from './AbstractComponent.js';

export class ListComponent extends AbstractComponent {

    constructor(name, listener, targetType, UITarget, fn_defaultValues) {
        super(name, targetType, fn_defaultValues);

        this.htmlComponent = document.createElement('div');
        this.htmlComponent.id = name;
        this.htmlComponent.classList.add('dropdown');       

        this.htmlSubComponent = document.createElement('button');         
        this.htmlSubComponent.classList.add('dropbtn');        

        this.textPreview = document.createElement('p');
        this.textPreview.textContent = name;

        this.listener = listener;
        this.UITarget = UITarget;

        this.htmlSubComponent.appendChild(this.textPreview);     
        this.htmlComponent.appendChild(this.htmlSubComponent);     
        
        this.fontNames = [];
    }

    resetTextPreview() {
        if(this.fontNames.length <= 0) return;
        
        let index = 0;
        for (var i = 0; i < this.htmlSubComponent.childNodes.length; i++) {
            this.htmlSubComponent.childNodes[index].childNodes.forEach(child => {
                child.textContent = this.fontNames[index];
                index++;
            })
        }
    }

    changeTextPreview(text) {
        this.resetTextPreview();

        for (var i = 0; i < this.htmlSubComponent.childNodes.length; i++) { 
            let index = 0;           
            this.htmlSubComponent.childNodes[i].childNodes.forEach(child => {
                this.fontNames[index] = child.textContent;
                child.textContent = text + ' (' + this.fontNames[index] + ')';                
                index++;
            })
        }
    }

    setChildEvent(child) {
        child.addEventListener("click", event => this.listener(event, this.UITarget));
    }

}