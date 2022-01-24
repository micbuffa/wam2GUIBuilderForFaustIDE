export class AbstractComponent {

    static TYPES = {
        KNOB: "knob",
        SWITCH: "switch",
        VSLIDER: "vslider",
        HSLIDER: "hslider",
        LABEL: "label",
        CONTAINER: "container",        
        LAYOUT: 'layout',
        HBARGRAPH: 'hbargraph',
    };

    targetTypes = '';
    htmlComponent = null;
    htmlLabel = null;
    name = '';
    fn_setValues = null;

    constructor(name, targetTypes, fn_defaultValues) {
        this.htmlLabel = document.createElement("label");
        this.htmlLabel.setAttribute("for", name);
        this.htmlLabel.textContent = name;
        this.name = name;
        this.fn_setValues = !!fn_defaultValues ? fn_defaultValues : undefined;
        this.targetTypes = targetTypes;
    }

    getHtmlComponent() {
        return this.htmlComponent;
    }

    getHtmlLabel() {
        return this.htmlLabel;
    }

    setVisibility(bool) {
        this.htmlComponent.style.display = bool ? 'block' : 'none';
        this.htmlLabel.style.display = bool ? 'block' : 'none';
    }

    setDefaultValues(component) {        
        if(!!this.fn_setValues)
            this.fn_setValues(component, this);
    }

}