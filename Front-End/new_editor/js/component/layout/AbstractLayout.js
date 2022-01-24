import { abstractLayoutDefaultValues } from '../ui/config/DefaultValues.js';

export class AbstractLayout {

    static DIRECTION = {
        HORIZONTAL: "hgroup",
        VERTICAL: "vgroup"
    };

    parent = null;
    direction = null;
    htmlComponent = null;
    htmlLabel = null;
    components = [];
    layout = {};
    type = 'layout';
    name = '';

    constructor(parent, name, direction, components) {
        this.parent = parent;           
        this.name = window.pedalName;
        this.id = window.pedalName;
        
        this.htmlComponent = document.createElement('div');
        this.htmlComponent.id = this.id;          
        this.htmlComponent.style.border = abstractLayoutDefaultValues.BORDER;
        this.htmlComponent.style.textAlign = abstractLayoutDefaultValues.TEXT_ALIGN;                
        this.htmlComponent.style.display = abstractLayoutDefaultValues.DISPLAY;   
        this.htmlComponent.style.verticalAlign = abstractLayoutDefaultValues.VERTICAL_ALIGN;
        this.htmlComponent.style.padding = abstractLayoutDefaultValues.PADDING;
        this.htmlComponent.style.margin = abstractLayoutDefaultValues.MARGIN;      
        this.htmlComponent.style.boxSizing = abstractLayoutDefaultValues.BOX_SIZING;
        this.htmlComponent.style.backgroundSize = abstractLayoutDefaultValues.BACKGROUND_SIZE;    
        if(parent != undefined) {
            this.htmlComponent.style.boxShadow = abstractLayoutDefaultValues.BOX_SHADOW;
        }
        
        /*this.htmlComponent.style.background = 'linear-gradient(' + abstractLayoutDefaultValues.GRADIENT_DIRECTION + 
        ', rgba(73, 73, 73, 1), ' + 
        'rgba(73, 73, 73, 1)), '+
        'url()';*/

        this.htmlComponent.style.borderRadius = abstractLayoutDefaultValues.BORDER_RADIUS;         

        this.htmlLabel = document.createElement('label')
        this.htmlLabel.setAttribute("for", name);
        this.htmlLabel.textContent = name;
        this.htmlLabel.style.display = 'block';
        
        if(this.parent != null) {
            this.parent.appendChild(this.htmlComponent);
            this.htmlComponent.style.backgroundColor = abstractLayoutDefaultValues.BACKGROUND_COLOR;
        }else {
            this.htmlComponent.style.backgroundColor = abstractLayoutDefaultValues.BACKGROUND_COLOR_CHILD;
        }

        this.htmlComponent.appendChild(this.htmlLabel);

        this.components = components;
        this.direction = direction;        

        if(Object.values(AbstractLayout.DIRECTION).find(e => e == direction) == undefined) {
            throw `Invalid direction in AbstractLayout.js\nExpected ${Object.values(AbstractLayout.DIRECTION)} but got: ${direction}`;
        }

        this.htmlComponent.classList.add('resize-drag');
        //this.htmlLabel.classList.add('resize-drag');
        
        this.htmlComponent.style.touchAction = 'none';
        this.htmlLabel.style.touchAction = 'none';        

        this.addComponents();
    }

    adjustSize() {
        let maxWidth = 0;
        this.components.forEach(c => {
            if(this.direction == AbstractLayout.DIRECTION.VERTICAL) {
                if(c.htmlComponent) {
                    const compWidth = c.htmlComponent.offsetWidth;                    
                    if(compWidth > maxWidth) {
                        maxWidth = compWidth;
                    }
                }
            }
        });
        
        if(maxWidth > 0)
            this.htmlComponent.style.width = maxWidth + 'px';
    }
    
    addLayout(layout) {
        this.htmlComponent.appendChild(layout.htmlComponent);
    }

    getContainer() {
        return this.htmlComponent;
    }
    
    addComponents() {
        console.log("this.components")
        console.log(this.components)
        if(this.components) {
            this.components.forEach(c => {
                //if(this.direction == AbstractLayout.DIRECTION.HORIZONTAL) {
                    c.getContainer().style.display = 'inline-block';
                //}
                this.htmlComponent.appendChild(c.getContainer());
            });
        }
    }
}