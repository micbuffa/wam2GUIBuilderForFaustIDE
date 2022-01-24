import { CheckBoxComponent } from '../component/editor/CheckBoxComponent.js';
import { SliderComponent } from '../component/editor/SliderComponent.js';
import { AbstractComponent } from '../component/editor/AbstractComponent.js';
import { SelectComponent } from '../component/editor/SelectComponent.js';
import { EmptyComponent } from '../component/editor/EmptyComponent.js';
import { ListComponent } from '../component/editor/ListComponent.js';
import { ImageSelectorComponent } from '../component/editor/ImageSelectorComponent.js';
import { HSlider } from '../component/ui/HSlider.js';
import { Knob } from '../component/ui/Knob.js';
import { ColorSelectorComponent } from '../component/editor/ColorSelectorComponent.js';
import { InputComponent } from '../component/editor/InputComponent.js';
import { GradientSelectorComponent } from '../component/editor/GradientSelectorComponent.js';
import { BlankComponent } from '../component/editor/BlankComponent.js';
import { BorderComponent } from '../component/editor/BorderComponent.js';
import { SettingsComponent } from '../component/editor/SettingsComponent.js';
import { SizeComponent } from '../component/editor/SizeComponent.js';
import { LabelComponent } from '../component/editor/LabelComponent.js';

/* Handlers */
import { KnobHandler } from '../component/handlers/knobHandler.js';
import { SliderHandler } from '../component/handlers/sliderHandler.js';
import { LayoutHandler } from '../component/handlers/layoutHandler.js';
import { BargraphHandler } from '../component/handlers/bargraphHandler.js';
import { SwitchHandler } from '../component/handlers/switchHandler.js';
import { LabelHandler } from '../component/handlers/labelHandler.js';
import { AbstractHandler } from '../component/handlers/AbstractHandler.js';

export class Editor {
    UITarget = {
        target: '',
        type: '',
        components: [],
        object: {},
    };
    targetList = [];    
    UIEditorComponents = [];   
    UIEditorTables = [];

    root = null;
    table = null;

    //20 best en preview
    //load on select
    //sliders src
    //knob src
    googleFonts = [
        "Butcherman",
        "Geostar Fill",
        "Fruktur",
        "Galada",
        "Gloria Hallelujah",
        "Press Start 2P",
        "Monoton",
        "Homemade Apple",
        "Hanalei",
        "Covered By Your Grace",
        "Six Caps",
        "Fredericka the Great",
        "Cabin Sketch",
        "Raleway Dots",
        "UnifrakturMaguntia",
        "Frijole",
        "Freckle Face",
        "Vast Shadow",
        "Shadows Into Light",
        "Trade Winds",
        "Piedra",
        "Henny Penny",
        "Fontdiner Swanky",
        "IM Fell French Canon SC",
        "Hanalei Fill",
        "Eater",
        "Sancreek",
        "Akronim",
        "Monofett",
        "Diplomata",
        "Nosifer",
        "Ewert",
        "Snowburst One",
        "Francois One",
        "Finger Paint",
        "Megrim",
        "Skranji",
        "Mountains of Christmas",
        "Faster One",
        "Bungee Shade",
        "Creepster",
        "Codystar",
        "Vampiro One",
        "Over the Rainbow",
        "Shojumaru",
    ];
    loadedGoogleFonts = [];

    static instance = null;
    static getInstance() {
        if(this.instance == null)
            this.instance = new Editor();
        return this.instance;
    }
    
    constructor() {
        this.root = document.getElementById('new-editor');
        this.root.style.backgroundColor = "red";
        this.root.style.position = "absolute";
        this.root.style.right = "0";
        this.root.style.top = "0";

        this.knobHandler = new KnobHandler();
        this.sliderHandler = new SliderHandler();
        this.layoutHandler = new LayoutHandler();
        this.bargraphHandler = new BargraphHandler();
        this.switchHandler = new SwitchHandler();
        this.labelHandler = new LabelHandler();
        
        this.initKnobEditor();
        this.initLabelEditor();     
        this.initSwitchEditor();
        this.initSlidersEditor();
        this.initLayoutEditor();
        this.initBargraphEditor();


        //this.initContainerEditor();
        this.init();
    }

    loadGoogleFonts() {
        const fontsNumber = 50;//this.googleFonts.length;
        var start = 0;
        var end = 10;//step
        const interval = setInterval((e) => {
            
            if(start >= fontsNumber) {
                clearInterval(interval);
            }else {
                WebFont.load({ google: { families: this.googleFonts.slice(start, end) } });
                this.loadedGoogleFonts.push(...this.googleFonts.slice(start, end));                
                start = end + 1;
                end += 10;
            }
        }, 500);                        
    }

    initGoogleFontSelector(component) {
        const comboBox = component.htmlSubComponent;       
        const content = document.createElement('div');
        content.classList.add('dropdown-content');
        
        this.googleFonts.forEach(fontName => {
            const font = document.createElement('a');
            component.setChildEvent(font);
            font.text = fontName;
            font.style.fontFamily = fontName;
            font.value = fontName;
     
            content.appendChild(font)
            //option.style.width = '150px';                       
        });
        comboBox.appendChild(content);
    }

    loadKnobsImages(editorComponent) {

        fetch('http://localhost:3000/previews/knobs').then(function(response) {
           return response.json();
        }).then(data => {
            const baseURL = data.filesUrl;
            const files = data.files;

            files.forEach(f => {
                if(!(f === '.DS_Store')) { 
                    editorComponent.addImage(baseURL + f);
                }
            })
        });
    }

    //Sliders body
    loadSlidersImages(editorComponent) {         
        fetch('http://localhost:3000/previews/sliders/body').then(function(response) {
            return response.json();
         }).then(data => {
             const baseURL = data.filesUrl;
             const files = data.files;
 
             files.forEach(f => {
                 editorComponent.addImage(baseURL + f);
             })
         });  
    }

    //Sliders knobs
    loadSlidersKnobImages(editorComponent) {
        fetch('http://localhost:3000/previews/sliders/knobs').then(function(response) {
           return response.json();
        }).then(data => {
            const baseURL = data.filesUrl;
            const files = data.files;

            files.forEach(f => {
                editorComponent.addImage(baseURL + f);
            })
        }); 
    }

    loadSwitchesImages(editorComponent) {         
        fetch('http://localhost:3000/previews/switches').then(function(response) {
            return response.json();
         }).then(data => {
             const baseURL = data.filesUrl;
             const files = data.files;

             files.forEach(f => {
                if(!(f === '.DS_Store')) { 
                    editorComponent.addImage(baseURL + f);
                }
            })
         });  
    }

    loadLayoutImages(editorComponent) {
        fetch('http://localhost:3000/previews/backgrounds').then(function(response) {
            return response.json();
         }).then(data => {
             const baseURL = data.filesUrl;
             const files = data.files;

             files.forEach(f => {
                if(!(f === '.DS_Store')) { 
                    editorComponent.addImage(baseURL + f);
                }
            })
            // BMT
            // Set position absolute by construct
            var allDrags = AbstractHandler.getAllDrag();
            AbstractHandler.setObjectsToAbsolute(allDrags);
            const pedalContainer = document.querySelector(".my-pedal");
            var labels = pedalContainer.querySelectorAll("label");
            labels.forEach((label) => {
                var component = label;
                var coord = component.getBoundingClientRect(); 
                component.style.position = "absolute";
                component.style.zIndex = "1";
                component.style.width = coord.width + "px";
                component.classList.add('drag');  
                pedalContainer.appendChild(component); 
                //component.style.left = (coord.left - 200 - 12) + "px";
                component.style.left = (coord.left - 200 - 14) + "px";
                component.style.top = (coord.top - 58) + "px";
                component.contentEditable = true;
                component.addEventListener("input", event => this.labelHandler.handleTextChangesLabel(event, component, document.querySelector("#label-label")))
            });
         });  
    }

    initKnobEditor() {
        this.UIEditorComponents.push(new CheckBoxComponent("all", this.knobHandler.processAll, ["knob"], this.UITarget));
        // Knob size
        let sizeListner = {
            width: this.knobHandler.handleKnobLabelWidth.bind(this),
            height: this.knobHandler.handleKnobLabelHeight.bind(this)
        };
        this.UIEditorComponents.push(new SizeComponent("size", sizeListner, ["knob"], this.UITarget, null));
        // Knob src
        const knobImgSelector = new ImageSelectorComponent("src url", this.knobHandler.handleKnobSrc, ['knob'], this.UITarget);
        this.loadKnobsImages(knobImgSelector);
        this.UIEditorComponents.push(knobImgSelector);
        // Knob z-index
        this.UIEditorComponents.push(new SliderComponent("z-index", this.knobHandler.handleKnobZPosition, ['knob'], this.UITarget, null, ""));
    }

    initSlidersEditor() { //refactor same comps
        // Slider size
        let sizeListner = {
            width: this.sliderHandler.handleSliderWidth.bind(this),
            height: this.sliderHandler.handleSliderHeight.bind(this)
        };
        this.UIEditorComponents.push(new SizeComponent("size", sizeListner, ["vslider"], this.UITarget, null));
        this.UIEditorComponents.push(new SliderComponent("vslider width", this.sliderHandler.handleSliderWidth, ["vslider", "hslider"], this.UITarget));        
        this.UIEditorComponents.push(new SliderComponent("vslider height", this.sliderHandler.handleSliderHeight, ["vslider", "hslider"], this.UITarget));


        this.UIEditorComponents.push(new CheckBoxComponent("set all sliders to knobs", this.sliderHandler.onClickCheckBoxTransformAll, ["hslider", "vslider"], this.UITarget));
        this.UIEditorComponents.push(new CheckBoxComponent("set slider to knob", this.sliderHandler.onClickCheckBoxTransform, ["hslider", "vslider"], this.UITarget));

        this.UIEditorComponents.push(new SliderComponent("all slider width", this.sliderHandler.handleAllSliderWidth, ["hslider", "vslider"], this.UITarget, (target, component) => {    
            var max = 0;       
            this.targetList.forEach(c => {
                if(c.type.includes('slider')){      
                    const widthStr = c.sliderBody.style.width;
                    const width = widthStr.slice(0, widthStr.length - 2);

                    if(width > max)
                        max = width;    
                }
            }); 
            

            component.htmlComponent.max = parseInt(max) << 2;
            component.htmlComponent.value = parseInt(max);   
        }));

        this.UIEditorComponents.push(new SliderComponent("all slider height", this.sliderHandler.handleAllSliderHeight, ["hslider", "vslider"], this.UITarget, (target, component) => {           
            var max = 0;       
            this.targetList.forEach(c => {
                if(c.type.includes('slider')){      
                    const widthStr = c.sliderBody.style.height;
                    const height = widthStr.slice(0, widthStr.length - 2);

                    if(height > max)
                        max = height;    
                }
            });
            component.htmlComponent.max = parseInt(max) << 2;
            component.htmlComponent.value = parseInt(max);         
        }));
    }

    initLayoutEditor() {
        this.UIEditorComponents.push(new CheckBoxComponent("hide all", this.layoutHandler.hideAllLayout.bind(this), ["layout"], this.UITarget));
        this.UIEditorComponents.push(new CheckBoxComponent("duplicate", this.layoutHandler.duplicate.bind(this), ["layout"], this.UITarget));
        // Layout settings
        let settingsListner = {
            //duplicate: this.layoutHandler.duplicate.bind(this),
            hide: this.layoutHandler.hideLayout.bind(this),
            shadow: this.layoutHandler.removeShadow.bind(this),
        };
        this.UIEditorComponents.push(new SettingsComponent("settings", settingsListner, ["layout"], this.UITarget));
        // Layout size
        let sizeListner = {
            width: this.layoutHandler.handleLayoutWidth.bind(this),
            height: this.layoutHandler.handleLayoutHeight.bind(this)
        };
        this.UIEditorComponents.push(new SizeComponent("size", sizeListner, ["layout"], this.UITarget, null));
        // Layout gradient
        let gradientListner = {
            from: this.layoutHandler.handleLayoutBackgroundColorFrom.bind(this),
            to: this.layoutHandler.handleLayoutBackgroundColorTo.bind(this),
            opacity: this.layoutHandler.setLayoutBackgroundOpacity.bind(this),
            textureOpacity: this.layoutHandler.setLayoutTextureOpacity.bind(this),
            rotate: this.layoutHandler.rotateGradient.bind(this)
        };
        this.UIEditorComponents.push(new GradientSelectorComponent("gradient", gradientListner, ["layout"], this.UITarget));
        // Layout border
        let borderListner = {
            color: this.layoutHandler.handleLayoutBorderColor.bind(this),
            width: this.layoutHandler.handleLayoutBorderWidth.bind(this)
        }; 
        this.UIEditorComponents.push(new BorderComponent("border", borderListner, ["layout"], this.UITarget));
        // Layout texture by url
        this.UIEditorComponents.push(new InputComponent("src by url", this.layoutHandler.handleLayoutSrc.bind(this), ["layout"], this.UITarget, (target, component) => {             
            component.htmlComponent.value = target.htmlLabel.innerText;
        }));
        const layoutImgSelector = new ImageSelectorComponent("layout src", this.layoutHandler.handleLayoutSrc.bind(this), ["layout"], this.UITarget);
        this.loadLayoutImages(layoutImgSelector);
        this.UIEditorComponents.push(layoutImgSelector);
    }

    initBargraphEditor() {
        this.UIEditorComponents.push(new SliderComponent("width", this.bargraphHandler.handleHbargraphWidth.bind(this), ["hbargraph"], this.UITarget, (target, component) => {                
            component.htmlComponent.max = target.WIDTH << 2;    
            component.htmlComponent.value = target.WIDTH;
        }));
        this.UIEditorComponents.push(new SliderComponent("height", this.bargraphHandler.handleHbargraphHeight.bind(this), ["hbargraph"], this.UITarget, (target, component) => {            
            component.htmlComponent.max = target.HEIGHT << 2;    
            component.htmlComponent.value = target.HEIGHT;          
        }));
    }

    initSwitchEditor() {
        this.UIEditorComponents.push(new CheckBoxComponent("all", this.switchHandler.processAll, ["switch"], this.UITarget));
        // Layout size
        let sizeListner = {
            width: this.switchHandler.handleWidth.bind(this),
            height: this.switchHandler.handleHeight.bind(this)
        };
        this.UIEditorComponents.push(new SizeComponent("size", sizeListner, ["switch"], this.UITarget, null));

        const switchImgSelector = new ImageSelectorComponent("switch src", this.switchHandler.handleSrc, ["switch"], this.UITarget);
        this.loadSwitchesImages(switchImgSelector);
        this.UIEditorComponents.push(switchImgSelector);
    }

    initLabelEditor() {    
        this.UIEditorComponents.push(new CheckBoxComponent("all", this.labelHandler.processAll, ["label"], this.UITarget));
        // Label settings
        let labelSettingsListner = {
            duplicate: this.labelHandler.duplicate.bind(this),
            hide: this.labelHandler.hideLabel.bind(this),
            detach: this.labelHandler.setAbsolutePosition.bind(this)
        };
        this.UIEditorComponents.push(new SettingsComponent("settings", labelSettingsListner, ["label"], this.UITarget));  
       // Label 
       let labelListner = {
            name: this.labelHandler.handleChangeName.bind(this),
            size: this.labelHandler.handleFontSize.bind(this),
            color: this.labelHandler.handleColor.bind(this),
            width: this.labelHandler.handleWidth.bind(this)
        };
        this.UIEditorComponents.push(new LabelComponent("label", labelListner, ["label"], this.UITarget));
        // Label border
        let borderLabelListner = {
            color: this.labelHandler.handleBorderColor.bind(this),
            width: this.labelHandler.handleBorderWidth.bind(this)
        };
        this.UIEditorComponents.push(new BorderComponent("border", borderLabelListner, ["label"], this.UITarget));
        // Label font 
        this.UIEditorComponents.push(new ListComponent("label font", this.labelHandler.handleFont.bind(this), ["label"], this.UITarget, (target, component) => {                          
            if(target) {
                component.textPreview.textContent = target.htmlLabel.textContent;
                component.textPreview.style.fontFamily = target.htmlLabel.style.fontFamily;
            }                        
        }));
        this.loadGoogleFonts();
        this.initGoogleFontSelector(this.UIEditorComponents[this.UIEditorComponents.length - 1]);
    }

  

    //Todo set min&max
    //Set editor component value == target value

    show(isEnabled) {
        if(isEnabled) {
            this.root.style.display = 'block';
        }else {
            this.root.style.display = 'none';
        }
    }

    appendToTable(component) {        
        let str = '';
        component.targetTypes.forEach(f => str += '-' + f);

        const table = document.getElementById('table-' + str);

        if(table) {
            table.cellSpacing = '10px';

            const tableRow = table.insertRow();
            const cellName = tableRow.insertCell();
            const cellComponent = tableRow.insertCell();

            cellName.appendChild(document.createTextNode(component.name));
            cellName.style.border = '1px solid black';       
            cellName.style.padding = '5px';      
            
            cellComponent.appendChild(component.getHtmlComponent());
            cellComponent.style.border = '1px solid black'; 
        }
    }

    createTable(type){
        const isTableAlreadyCreated = !!document.getElementById('table-' + type);
        if(isTableAlreadyCreated) return;

        const table = document.createElement('table');
        table.style.border = '1px solid black';
        table.style.fontSize = '1.2em';
        table.style.display = 'block'
        table.id = 'table-' + type;
        table.classList.add('table-dark');

        this.UIEditorTables.push(table);
        this.root.appendChild(table);
    }

    init() {
        this.UIEditorComponents.forEach(comp => {
            let str = '';
            comp.targetTypes.forEach(f => str += '-' + f);            
            this.createTable(str);
            this.appendToTable(comp);
        });
    }

    updateEditor(target) {
        if(target.htmlComponent.classList.contains("my-pedal")) { 
            // Main panel   
        }
        this.UIEditorComponents.forEach(comp => {
            for(let i = 0; i < comp.targetTypes.length; i++) {                
                comp.setVisibility(comp.targetTypes[i] == this.UITarget.type);  
                      
                if(target) {
                    comp.setDefaultValues(target);
                }       
                
                if(comp.targetTypes[i] == this.UITarget.type) break;
            };                                                 
        });


        this.UIEditorTables.forEach(t => {           
            t.style.display = t.id.includes(this.UITarget.type) ? 'block' : 'none';
        }); 
    }

    changeEditorType(type) {
        this.UIEditorComponents.forEach(comp => {
            for(let i = 0; i < comp.targetTypes.length; i++) {                
                comp.setVisibility(comp.targetTypes[i] == type);                      
            };                                                 
        });


        this.UIEditorTables.forEach(t => {           
            t.style.display = t.id.includes(type) ? 'block' : 'none';
        }); 
    }

    setStyleTarget(target, isLabel = false) {
        const targetStyle = document.getElementsByClassName('target-style');
                   
        targetStyle.length > 0 && Array.from(targetStyle).forEach(e => {
            e.classList.toggle('target-style'); 
            // BMT Stop dashed border after select
            //e.style.border = '1px dashed rgb(0, 0, 0)'; 
            e.style.border = 'none'; 
        }); 
        
        const targetStyleLabel = document.getElementsByClassName('target-style-label');    
        targetStyleLabel.length > 0 && Array.from(targetStyleLabel).forEach(e => {
            e.style.border = 'none';
            e.classList.toggle('target-style-label'); 
        }); 

        const targetStyleContainer = document.getElementsByClassName('target-style-container');    
        targetStyleContainer.length > 0 && Array.from(targetStyleContainer).forEach(e => {
            //e.style.border = '1px solid black';
            e.style.borderStyle = 'solid';
            e.classList.toggle('target-style-container'); 
        }); 

        if(isLabel) {
            target.htmlLabel.style.border = '1px red solid';
            target.htmlLabel.classList.toggle('target-style-label');
        }else if(target.htmlContainer != undefined) {
            target.htmlContainer.style.border = '1px solid rgb(255, 0, 0)'; 
            target.htmlContainer.classList.toggle('target-style');
        }else {
            target.htmlComponent.style.borderStyle = 'dashed';
            //target.htmlComponent.style.border = '1px solid rgb(255, 0, 0)'; 
            target.htmlComponent.classList.toggle('target-style-container');
        }
        
    }

    registerTargetEvent(target) {
        if(target.type == 'vslider' || target.type == 'hslider') {
            const childs = target.htmlComponent.childNodes;
            childs.forEach(child => {
                /*child.classList && child.classList.forEach(c => {*/
                    //if(c.includes('body')) {                        
                        target.htmlComponent.addEventListener("click", e => {                 
                            e.stopPropagation();
                            this.UITarget.target = target.htmlComponent;
                            this.UITarget.type = target.type;      
                            this.UITarget.object = target;                 
                            this.updateEditor(target);
                            this.update(this.UITarget.target);
                        });                        
                    //}
                //}); 
            });
        } else if(target.type == 'hbargraph'){
            target.htmlComponent.addEventListener("click", e => {                                     
                e.stopPropagation();
                this.UITarget.target = target;
                this.UITarget.type = target.type; 
                this.UITarget.object = target;             
                this.updateEditor(target);
            });  
        } else {     
            target.htmlComponent && target.htmlComponent.addEventListener("click", e => { 
                e.stopPropagation();
                this.UITarget.target = target.htmlComponent;
                this.UITarget.type = target.type;
                this.UITarget.components = target.components; 
                this.UITarget.object = target;     
                this.setStyleTarget(target);
                
                if(target.type === 'layout') {

                    target.htmlComponent.addEventListener("click", e => {
                        console.log("this")
                        console.log(target)
                    })

                    const gradientTargets = document.getElementsByClassName('gradiant-target');
                   
                    gradientTargets.length > 0 && Array.from(gradientTargets).forEach(e => {
                        e.classList.toggle('gradiant-target');                   
                    });
                    target.htmlComponent.classList.toggle('gradiant-target');
                }
                
                this.updateEditor(target); 
                // BMT Test to update view onclick
                this.update(this.UITarget.target);
            });
        }
        
        // On click label
        target.htmlLabel && target.htmlLabel.addEventListener("click", e => {
            e.stopPropagation();
            this.setStyleTarget(target, true);
            this.UITarget.target = target.htmlLabel;      
            this.UITarget.type = AbstractComponent.TYPES.LABEL;
            this.UITarget.object = target;
            this.updateEditor(target);   
            this.update(target);
        });
        
        if(!!target.htmlContainer) {            
            target.htmlContainer.addEventListener("click", e => { 
                e.stopPropagation();
                this.UITarget.target = target.htmlContainer;  
                this.UITarget.type = AbstractComponent.TYPES.CONTAINER;
                this.UITarget.object = target;
                this.updateEditor(target);
            });
        }
    }

    update(target) {
        let handler = null;
        if(this.UITarget.type == "knob") handler = this.knobHandler;
        if(this.UITarget.type == "layout") handler = this.layoutHandler;
        if(this.UITarget.type == "label") handler = this.labelHandler;
        if(this.UITarget.type == "switch") handler = this.switchHandler;
        if(this.UITarget.type == "hslider") handler = this.sliderHandler;
        if(this.UITarget.type == "vslider") handler = this.sliderHandler;
        this.UIEditorTables.forEach(t => {           
            if(t.id.includes(this.UITarget.type)) {
                handler.updatePanel(target, t);
            }
        }); 
    }
}