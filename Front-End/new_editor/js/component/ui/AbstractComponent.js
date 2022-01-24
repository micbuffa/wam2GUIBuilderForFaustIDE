import { abstractComponentDefaultValues } from './config/DefaultValues.js';

export class AbstractComponent {

    htmlContainer = null;
    htmlComponent = null;
    htmlLabel = null;
    type = null;
    layout = {};
    name = '';

    constructor(labelText, elementType, address) {
        this.htmlContainer = document.createElement('div');
        this.name = labelText;
        this.address = address;
        //this.htmlContainer.style.position = 'absolute';
        this.htmlContainer.style.border = abstractComponentDefaultValues.BORDER;
        this.htmlContainer.style.padding = abstractComponentDefaultValues.PADDING;
        this.htmlContainer.style.margin = abstractComponentDefaultValues.MARGIN;
        this.htmlContainer.style.textAlign = abstractComponentDefaultValues.TEXT_ALIGN;
        this.htmlContainer.style.display = abstractComponentDefaultValues.DISPLAY;

        this.htmlComponent = document.createElement(elementType); 
        //this.htmlComponent.id = labelText;
        this.htmlComponent.id = this.address;

        if(elementType == 'BUTTON') {
            this.htmlComponent.innerHTML = labelText;
            this.htmlContainer.appendChild(this.htmlComponent);
        }else {
            this.htmlLabel = document.createElement("label");
            this.htmlLabel.setAttribute("for", labelText);
            this.htmlLabel.textContent = labelText;  
            this.htmlLabel.style.textAlign = 'center'
            this.htmlLabel.style.display = 'block' 
            this.htmlContainer.appendChild(this.htmlComponent); 
            this.htmlContainer.appendChild(this.htmlLabel); 
        }
        
        if(this.htmlComponent != undefined && this.htmlLabel != undefined && this.htmlContainer) {
            this.prepareInteractJs();
        }
        
        
    }

    getDataForSave() {
        const rect = this.htmlContainer.getBoundingClientRect();
        let model = this.htmlComponent.src; //'';
        let width = 0, height = 0;

        if(this.htmlComponent.children != undefined && this.htmlComponent.children.length > 0){
            Array.from(this.htmlComponent.children).forEach(c => {                
                if(c.classList.contains(`webaudio-${this.type}-body`)) {
                    width = c.style.width;
                    height = c.style.height;                                     
                }
            })            
        }

        if(model != undefined) {
            this.htmlContainer.style.removeProperty('border');
            model = model.slice(model.lastIndexOf('/') + 1);              
        }

        if(this.webAudioType === 'slider') {
            this.knobSrc = this.htmlComponent.children[1].children[0].style.backgroundImage;
            this.knobSrc = this.knobSrc.slice(
                this.knobSrc.lastIndexOf('/') + 1,
                this.knobSrc.lastIndexOf('"')
            );
        }
        
        //x & y => minus layout left and top or margin/padding?
        const ret = {
            id: this.address,
            address: this.address,
            x: rect.right,
            y: rect.top,
            width: width,
            height: height,
            model: model,
            childModel: this.knobSrc || undefined,
            value: 20, //????
            label: this.name,
            label_fontfamily: "Verdana",
            label_fontsize: "14",
            label_color: "000000",
            type: this.type,
        };
        return ret;
    }

    //TODO: not resize for knob
    prepareInteractJs() {
        //this.htmlComponent.classList.add('resize-drag');
        //this.htmlLabel.classList.add('resize-drag');
        this.htmlContainer.classList.add('drag');                             

        this.htmlContainer.style.boxSizing = 'border-box';
        
        this.htmlComponent.style.touchAction = 'none';
        this.htmlLabel.style.touchAction = 'none';
        this.htmlContainer.style.touchAction = 'none';

         /*   
        const childs = this.htmlComponent.childNodes;                
            [...childs].forEach(child => {
            child.classList && child.classList.forEach(c => {
                if(c.includes('body')) {                        
                    //child.classList.toggle('resize-drag');                
                }
            }); 
        });*/
        
    }

    changeType(type, htmlType) {
        this.type = type;
        this.htmlContainer.removeChild(this.htmlComponent);
        this.htmlContainer.removeChild(this.htmlLabel);

        this.htmlComponent = document.createElement(htmlType);
        this.htmlContainer.appendChild(this.htmlComponent);
        this.htmlContainer.appendChild(this.htmlLabel);         
        this.prepareInteractJs();      
        //this.htmlComponent.id = labelText;
        return this;
    }

    getContainer() {
        return this.htmlContainer;
    }

    getComponent() {
        return this.htmlComponent;
    }

    setAttributes(attributes) {        
        Object.keys(attributes).forEach(key => {
            this.htmlComponent.setAttribute(key, attributes[key]);
        });
    }

}