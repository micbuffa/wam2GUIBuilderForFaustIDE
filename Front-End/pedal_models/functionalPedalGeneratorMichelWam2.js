//const { Editor } = require("../new_editor/js/editor/editor");
//import Editor from "../new_editor/js/editor/editor.js";

/**
 * Generates the code of the functional pedal from the editable pedal.
 */
class FunctionalPedalGeneratorMichelWam2 {
  /*constructor(editablePedal) {
    console.log("[CONSTRUCTOR] - FunctionalPedalGeneratorMichelWam2")
    console.log("[CONSTRUCTOR] - editablePedal")
    console.log(editablePedal)
    this.editablePedal = editablePedal;
  }*/

  constructor(editablePedal, elements) {
    this.editablePedal = editablePedal;

    this.editablePedal.knobs = elements.filter(e => e.type == 'knob');
    this.editablePedal.switches = elements.filter(e => e.type == 'switch');
    this.editablePedal.sliders = elements.filter(e => e.type.includes('slider'));
  }

  // Generate index.js (main plugin file)
  generateIndexJSFile(pedalName) {
    let content = `  
      import WebAudioModule from './utils/sdk/src/WebAudioModule.js';
      import CompositeAudioNode from './utils/sdk-parammgr/src/CompositeAudioNode.js';
      import ParamMgrFactory from './utils/sdk-parammgr/src/ParamMgrFactory.js';
      import fetchModule from './fetchModule.js';
      import { createElement } from './Gui/index.js';
  
      class ${this.editablePedal.name}Node extends CompositeAudioNode {
          _wamNode;

          setup(output, paramMgr) {
              this.connect(output, 0, 0);
              paramMgr.addEventListener('wam-midi', (e) => output.midiMessage(e.detail.data.bytes));
              this._wamNode = paramMgr;
              this._output = output;
          }
  
          destroy() {
              super.destroy();
              if (this._output) this._output.destroy();
          }
  
          getParamValue(name) {
              return this._wamNode.getParamValue(name);
          }
  
          setParamValue(name, value) {
              return this._wamNode.setParamValue(name, value);
          }
    }
  
    const getBasetUrl = (relativeURL) => {
          const baseURL = relativeURL.href.substring(0, relativeURL.href.lastIndexOf('/'));
          return baseURL;
    };
  
    // Definition of a new plugin
    export default class ${this.editablePedal.name}Plugin extends WebAudioModule {
  	_PluginFactory;

	_baseURL = getBasetUrl(new URL('.', import.meta.url));
	_descriptorUrl = this._baseURL + "/descriptor.json";

	async _loadDescriptor() {
		const url = this._descriptorUrl;
		if (!url) throw new TypeError('Descriptor not found');
		const response = await fetch(url);
		const descriptor = await response.json();
		Object.assign(this.descriptor, descriptor);
	}

	async initialize(state) {
		await this._loadDescriptor();
		const imported = await fetchModule('./Node.js');
		this._PluginFactory = imported[Object.keys(imported)[0]];
		return super.initialize(state);
	}

  // The plugin redefines the async method createAudionode()
  // that must return an <Audionode>
  // It also listen to plugin state change event to update the audionode internal state
  async createAudioNode(initialState) {
    const factory = new this._PluginFactory(this.audioContext, this._baseURL);
    const faustNode = await factory.load();
    const paramMgrNode = await ParamMgrFactory.create(this, { internalParamsConfig: Object.fromEntries(faustNode.parameters) });
    const node = new ${this.editablePedal.name}Node(this.audioContext);
    node.setup(faustNode, paramMgrNode);
  
    if (initialState) 
      node.setState(initialState);

    return node;
  }

  createGui() {
    return createElement(this);
  }
 }`;

    return content;
  }

  // ---------- ALL REMAINING METHODS ARE FOR GENERATING Gui/Gui.js --------
  /**
   * Generates the code of the functional pedal which will be used on the pedal board.
   */
  generateFunctionalPedalCode(pedalName) {
    this.editablePedal.name = pedalName;

    // The complete content of the functional pedal file will be stored in this variable

    // add imports
    let functionalPedalCode = this.generateImports();
    // add utility functions getBaseUrl() etc.
    functionalPedalCode += this.generateUtilityFunctions();

    // add class definition for the WebComponent
    functionalPedalCode += this.generateWebComponentClassContent();

    // add custom element definition
    functionalPedalCode += this.generateCustomElementDefinition();

    console.log("######### GUI CLASS CODE ###########")
    console.log(functionalPedalCode);
    console.log("######### END OF GUI CLASS CODE ###########")

    this.editablePedal.assets = this.getListOfAssetsUsedByThePlugin();
    console.log("### END OF ASSET LIST")
    console.log(this.editablePedal.assets)
    return functionalPedalCode;
  }

  //-------- IMPORTS -------
  generateImports() {
    let imports = `import '../utils/webaudio-controls.js'\n`
    return imports;
  }

  // ---------- UTILITY FUNCTIONS
  generateUtilityFunctions() {
    let content = `
      const getBaseURL = () => {
        const base = new URL('.', import.meta.url);
        return \`\${base}\`;
      };
      `;

    return content;
  }

  //--------- STYLE and TEMPLATE VARIABLES --------

  // TEMP BMT for test ---------------------------------------------
  /**
   * Generate the style of the functional pedal.
   */
  generateFunctionalPedalStyle() {
    console.log("generateFunctionalPedalStyle")
    console.log("generateFunctionalPedalStyle")
    console.log("generateFunctionalPedalStyle")
    let style = `<style>.my-pedal {`; //this.editablePedal.getStyle();

    const attributes = window.getComputedStyle(this.editablePedal.htmlComponent);

    for (let a in attributes) {
      if (attributes.getPropertyValue(a)) {
        console.log(a)
        if (a == 'position') {
          style += a + ':unset;';
          console.log("e-----------")
        }
        else style += a + ':' + attributes.getPropertyValue(a) + ';';
      }
    }

    style += `};</style>`;
    return style;
  }

  getHtml() {
    // MICHEL BUFFA : faire un query Selector pour choper le div de la pédale !!!
    let html = document.getElementById(this.editablePedal.id); //this.editablePedal.htmlComponent.cloneNode(true);
    html.style.position = "relative";
    html.style.top = "0px";
    html.style.left = "0px";

    /*for (let elem of html.querySelectorAll("webaudio-knob")) {
      elem.innerHTML = "";
    }
 
    for (let elem of html.querySelectorAll("webaudio-switch")) {
      elem.innerHTML = "";
    }
 
    for (let elem of html.querySelectorAll("webaudio-slider")) {
      elem.innerHTML = "";
    }
 
    for (let elem of html.querySelectorAll(".knob")) {
      elem.className = elem.className.replace("selected", "");
      for (let knob of this.knobs) {
        if (elem.id == knob.id) {
          let knobElem = elem.childNodes[0];
        }
      }
    }    */
    return html;
  }

  /**
   * Generate the html of the functional pedal.
   */
  generateFunctionalPedalHtml() {
    this.setWebAudioControlsIds();
    let html = this.getHtml();

    return html.outerHTML;
  }
  // End TEMP BMT for test ---------------------------------------------

  /*generateFunctionalPedalStyle() {
    console.log("[DEBUG] - generateFunctionalPedalStyle ")
    console.log(this)
    // BMT OLD
    let style = this.editablePedal.getStyle();
    return style.outerHTML;
  }
  
  generateFunctionalPedalHtml() {
    this.setWebAudioControlsIds();
    let html = this.editablePedal.getHtml();
 
    return html.outerHTML;
  }*/

  // ----- CLASS CONTENT (MAIN) ------

  generateWebComponentClassContent() {
    let classContent = `${this.getConstructorContent()}`;

    // methods
    classContent += `${this.getFixRelativeImagePathsInCSS_Method_Content()}`;
    classContent += `${this.getSetImageBackground_Method_Content()}`;
    classContent += `${this.getAttributeChangedCallback_Method_Content()}`;
    classContent += `${this.getHandleAnimationFrame_Method_Content()}`;
    classContent += `${this.getGetProperties_Method_Content()}`;
    classContent += `${this.getGetObservedAttributes_Method_Content()}`;
    classContent += `${this.getSetKnobs_Method_Content()}`;
    classContent += `${this.getSetSliders_Method_Content()}`;
    classContent += `${this.getSetSwitches_Method_Content()}`;
    classContent += `${this.getSetInactive_Method_Content()}`;

    // The final code of the generated class.
    let code = `${this.generateClass(this.editablePedal.name + "Gui", classContent)}`;
    return code;
  }

  /**
   * Generates a class extending 'HTMLElement'.
   * @param {*} name The name of the class.
   * @param {*} content The content of the class.
   */
  generateClass(name, content) {
    let ret = "";
    ret += "export default class " + name + " extends HTMLElement {";
    ret += content;
    ret += "}";
    return ret;
  }

  // ------------- CLASS CONTENT : CONSTRUCTOR -------------
  getConstructorContent() {
    // The content of the constructor of the class.
    let style = `${this.generateFunctionalPedalStyle()}`;
    let html = `${this.generateFunctionalPedalHtml()}`;
    let constructorContent = `
        super();
            this._plug = plug;
            this._plug.gui = this;
        console.log(this._plug);
          
        this._root = this.attachShadow({ mode: 'open' });
        this._root.innerHTML = \`${style}\n${html}\`;
  
        this.isOn;
            this.state = new Object();
            this.setKnobs();
            this.setSliders();
            this.setSwitches();
            //this.setSwitchListener();
            this.setInactive();
            // Change #pedal to .my-pedal for use the new builder
            this._root.querySelector('.my-pedal').style.transform = 'none';
            //this._root.querySelector("#test").style.fontFamily = window.getComputedStyle(this._root.querySelector("#test")).getPropertyValue('font-family');
  
            // Compute base URI of this main.html file. This is needed in order
            // to fix all relative paths in CSS, as they are relative to
            // the main document, not the plugin's main.html
            this.basePath = getBaseURL();
            console.log("basePath = " + this.basePath)
  
            // Fix relative path in WebAudio Controls elements
            this.fixRelativeImagePathsInCSS();
  
            // optionnal : set image background using a relative URI (relative
            // to this file)
        //this.setImageBackground("/img/BigMuffBackground.png");
          
        // Monitor param changes in order to update the gui
        window.requestAnimationFrame(this.handleAnimationFrame);
      `;

    // Generating the constructor of the pedal.
    let constructor = this.generateMethod("constructor", ["plug"], constructorContent);

    return constructor;
  }
  // ---------- CLASS METHODS --------------
  getFixRelativeImagePathsInCSS_Method_Content() {
    let funcFixRelativeImagePathsInCSSContent = `
      // change webaudiocontrols relative paths for spritesheets to absolute
          let webaudioControls = this._root.querySelectorAll(
              'webaudio-knob, webaudio-slider, webaudio-switch, img'
          );
          webaudioControls.forEach((e) => {
              let currentImagePath = e.getAttribute('src');
              if (currentImagePath !== undefined) {
                  //console.log("Got wc src as " + e.getAttribute("src"));
                  let imagePath = e.getAttribute('src');
                  e.setAttribute('src', this.basePath + '/' + imagePath);
                  //console.log("After fix : wc src as " + e.getAttribute("src"));
              }
          });
  
          let sliders = this._root.querySelectorAll('webaudio-slider');
          sliders.forEach((e) => {
              let currentImagePath = e.getAttribute('knobsrc');
              if (currentImagePath !== undefined) {
                  let imagePath = e.getAttribute('knobsrc');
                  e.setAttribute('knobsrc', this.basePath + '/' + imagePath);
              }
          });

          // BMT Get all fonts
          // Need to get the attr font
          let usedFonts = "";
          let fonts = this._root.querySelectorAll('label[font]');
          fonts.forEach((e) => {
              if(!usedFonts.includes(e.getAttribute("font"))) usedFonts += "family=" + e.getAttribute("font") + "&";
          });
          let link = document.createElement('link');
          link.rel = "stylesheet";
          if(usedFonts.slice(0, -1)) link.href = "https://fonts.googleapis.com/css2?"+usedFonts.slice(0, -1)+"&display=swap";
          document.querySelector('head').appendChild(link);
          
          // BMT Adapt for background-image
          let divs = this._root.querySelectorAll('div');
          divs.forEach((e) => {
              if('background-image' in e.style){
                let currentImagePath = e.style.backgroundImage.slice(4, -1);
                if (currentImagePath !== undefined) {
                    let imagePath = e.style.backgroundImage.slice(5, -2);
                    if(imagePath != "") e.style.backgroundImage = 'url(' + this.basePath + '/' + imagePath + ')';
                }
              }
          });
          `;

    let f = this.generateMethod(
      "fixRelativeImagePathsInCSS",
      [""],
      funcFixRelativeImagePathsInCSSContent
    );

    return f;
  }

  getSetImageBackground_Method_Content() {
    let funcSetImageBackgroundContent = `
      // check if the shadowroot host has a background image
          let mainDiv = this._root.querySelector('#main');
          mainDiv.style.backgroundImage =
              'url(' + this.basePath + '/' + imageRelativeURI + ')';
  
          //console.log("background =" + mainDiv.style.backgroundImage);
          //this._root.style.backgroundImage = "toto.png";
      `;

    let f = this.generateMethod(
      "setImageBackground",
      [],
      funcSetImageBackgroundContent
    );
    return f;
  }

  getAttributeChangedCallback_Method_Content() {
    let funcAttributeChangedCallbackContent = `
            console.log('Custom element attributes changed.');
            this.state = JSON.parse(this.getAttribute('state'));
        let tmp = '/PingPongDelayFaust/bypass';
        
        if (this.state[tmp] == 1) {
          this._root.querySelector('#switch1').value = 0;
          this.isOn = false;
        } else if (this.state[tmp] == 0) {
          this._root.querySelector('#switch1').value = 1;
          this.isOn = true;
        }
  
        this.knobs = this._root.querySelectorAll('.knob');
        console.log(this.state);
  
        for (var i = 0; i < this.knobs.length; i++) {
          this.knobs[i].setValue(this.state[this.knobs[i].id], false);
          console.log(this.knobs[i].value);
        }
      `;
    let f = this.generateMethod(
      "attributeChangedCallback",
      [],
      funcAttributeChangedCallbackContent
    );
    return f;
  }

  getHandleAnimationFrame_Method_Content() {
    let code = 'handleAnimationFrame = () => {';
    // knobs
    for (let knob of this.editablePedal.knobs) {
      code += `
        this._root.getElementById('${knob.address}').value = this._plug.audioNode.getParamValue('${knob.address}');
        `;
      code += "\n";
    }

    // sliders
    for (let slider of this.editablePedal.sliders) {
      code += `
        this._root.getElementById('${slider.address}').value = this._plug.audioNode.getParamValue('${slider.address}');
        `;
      code += "\n";
    }

    // switches
    for (let s of this.editablePedal.switches) {
      code += `
          this._root.getElementById('${s.address}').value = 1 - this._plug.audioNode.getParamValue('${s.address}');
         `;
      code += "\n";
    }

    code += `window.requestAnimationFrame(this.handleAnimationFrame);
         }
      `;

    return code;

  }

  getGetProperties_Method_Content() {
    let funcPropertiesContent = `
        this.boundingRect = {
            dataWidth: {
              type: Number,
              value: ${this.editablePedal.htmlComponent.getAttribute("width")}
            },
            dataHeight: {
              type: Number,
              value: ${this.editablePedal.htmlComponent.getAttribute("height")}
            }
        };
        return this.boundingRect;
      `;
    let funcProperties = this.generateMethod(
      "get properties",
      [],
      funcPropertiesContent
    );
    return funcProperties;
  }

  getGetObservedAttributes_Method_Content() {
    let funcGetObservedAttributes = `
        return ['state'];
      `;

    let functionGetObservedAttributes = this.generateMethod(
      "static get observedAttributes",
      [],
      funcGetObservedAttributes
    );
    return functionGetObservedAttributes;
  }

  getSetKnobs_Method_Content() {
    let content = "";

    for (let knob of this.editablePedal.knobs) {
      content +=
        'this._root.getElementById("' +
        knob.address +
        '").addEventListener("input", (e) =>' +
        'this._plug.audioNode.setParamValue("' +
        knob.address +
        '", e.target.value));';
      content += "\n";
    }
    let f = this.generateMethod("setKnobs", [], content);
    return f;
  }

  getSetSliders_Method_Content() {
    let content = "";

    for (let s of this.editablePedal.sliders) {
      content +=
        'this._root.getElementById("' +
        s.address +
        '").addEventListener("input", (e) =>' +
        'this._plug.audioNode.setParamValue("' +
        s.address +
        '", e.target.value));';
      content += "\n";
    }
    let f = this.generateMethod("setSliders", [], content);
    return f;
  }

  getSetSwitches_Method_Content() {
    let content = "";

    for (let s of this.editablePedal.switches) {
      content +=
        'this._root.getElementById("' +
        s.address +
        '").addEventListener("change", (e) =>' +
        'this._plug.audioNode.setParamValue("' +
        s.address +
        '", 1 - e.target.value));';
      content += "\n";
    }
    let f = this.generateMethod("setSwitches", [], content);
    return f;
  }

  getSetInactive_Method_Content() {
    let funcSetInactiveContent = `
        let switches = this._root.querySelectorAll(".switch webaudio-switch");
  
        switches.forEach(s => {
          console.log("### SWITCH ID = " + s.id);
          this._plug.audioNode.setParamValue(s.id, 0);
        });
      `;
    let funcSetInactive = this.generateMethod(
      "setInactive",
      [],
      funcSetInactiveContent
    );

    return funcSetInactive;
  }

  // -------- CUSTOM ELEMENT DEFINITION --------
  generateCustomElementDefinition() {
    let content = `
      try {
          customElements.define('wap-${this.editablePedal.name.toLowerCase()}', 
                                ${this.editablePedal.name}Gui);
          console.log("Element defined");
      } catch(error){
          console.log(error);
          console.log("Element already defined");      
      }
      `;
    return content;
  }

  // --------------- UTILITY METHODS --------------
  generateMethod(name, params, content) {
    // The return value of the function.
    let ret;

    let formattedParams = "";
    for (let param of params) {
      formattedParams += param;
    }

    ret = `
              ${name}(${formattedParams}) {
                 ${content}
              }
          `;
    return ret;
  }

  setWebAudioControlsIds() {
    // Michel Buffa, faire un queryselector pour choper le div de la pédale, pas avec un index en dur !!!
    //let pedalDiv = this.editablePedal.shadowRoot.querySelector("#pedal-container");
    let pedalDiv = document.querySelector("#pedal-container");

    for (let knob of pedalDiv.querySelectorAll(
      ".knob"
    )) {
      let id = knob.getAttribute("id");
      let waControlId = this.editablePedal.getElementById(id).address;
      knob.childNodes[0].setAttribute("id", waControlId);
    }

    for (let slider of pedalDiv.querySelectorAll(
      ".slider"
    )) {
      let id = slider.getAttribute("id");
      let waControlId = this.editablePedal.getElementById(id).address;
      slider.childNodes[0].setAttribute("id", waControlId);
    }

    for (let sw of pedalDiv.querySelectorAll(
      ".switch"
    )) {
      let id = sw.getAttribute("id");
      let waControlId = this.editablePedal.getElementById(id).address;
      sw.childNodes[0].setAttribute("id", waControlId);
    }
  }
  // -------- END OD CLASS CONTENT GENERATION -------------
  getListOfAssetsUsedByThePlugin() {
    let assets = [];

    //let pedalDiv = this.editablePedal.shadowRoot.querySelector("#pedal");
    let pedalDiv = document.querySelector("#" + this.editablePedal.name);
    //pedalDiv = pedalDiv.htmlComponent;


    // Background image
    // TODO chercher le bg img querySelector imgs
    /*let img = pedalDiv.querySelector("img");
    console.log("[ASSETS] - img")
    console.log(img)*/
    // Test
    let divs = document.querySelectorAll('div');
    divs.forEach(div => {
      if ('background-image' in div.style) {
        if (div.style.backgroundImage.slice(0, 3) == 'url') {
          let asset = div.style.backgroundImage.slice(4, -1).replace(/"/g, "");
          if (assets.includes(asset)) {
            console.log("[DEBUG] - asset " + asset + " already in assets")
          }
          else {
            console.log("[DEBUG] - new asset " + asset);
            assets.push(asset);
          }
        }
      }
    });

    /*if(img) {
      let imgPath = "./img/background/" + img.src.substring(img.src.lastIndexOf("/")+1);
      assets.push(imgPath);
    }*/

    // Comment because its div
    /*console.log("[ASSETS] - knob")
    console.log(pedalDiv.querySelectorAll(".webaudio-knob-body"))
    for (let knob of pedalDiv.querySelectorAll(".webaudio-knob-body")) {
      //assets.push(knob.childNodes[0].getAttribute("src"));
      // TODO Tester si déja ajouté 
      assets.push(knob.style.backgroundImage.slice(4, -1).replace(/"/g, ""));
   }*/

    for (let slider of pedalDiv.querySelectorAll(".slider")) {
      assets.push(slider.childNodes[0].getAttribute("src"));
      assets.push(slider.childNodes[0].getAttribute("knobsrc"));
    }

    for (let sw of pedalDiv.querySelectorAll(".switch")) {
      assets.push(sw.childNodes[0].getAttribute("src"));
    }

    console.log("### ASSETS USED BY THIS PLUGIN ;");
    assets.forEach(a => {
      console.log(a + "\n");
    })

    return assets;
  }
}
