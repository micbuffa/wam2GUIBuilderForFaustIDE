import { AbstractComponent } from './AbstractComponent.js';
import { imageSelectorDefaultValues } from '../ui/config/DefaultValues.js';

export class ImageSelectorComponent extends AbstractComponent {

    constructor(name, listener, targetType, UITarget, fn_defaultValues) {
        super(name, targetType, fn_defaultValues);

        this.htmlComponent = document.createElement('div');           
        this.htmlComponent.id = name;
        this.htmlComponent.style.maxWidth = '250px';
        this.htmlComponent.style.maxHeight = '100px';
        this.htmlComponent.style.overflow = 'scroll';

        this.listener = listener;
        this.UITarget = UITarget;
    }
    
    addImage(src) {
        const image = document.createElement('img');
        image.src = src;        
        image.addEventListener("click", event => this.listener(event, this.UITarget));
        image.style.display = 'inline-grid';
        image.width = imageSelectorDefaultValues.WIDTH;
        image.height = imageSelectorDefaultValues.HEIGHT;
        image.style.border = 'dashed';
        image.style.margin = '5px'; 

        this.htmlComponent.appendChild(image);
    }
    
}