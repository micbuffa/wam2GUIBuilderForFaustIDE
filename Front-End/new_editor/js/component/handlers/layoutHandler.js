import { Editor } from '../../editor/editor.js';
import { Layout } from '../../layout/layoutShihong.js';
import { VLayout } from '../layout/VLayout.js';
import { Label } from '../ui/Label.js';

export class LayoutHandler {

    handleLayoutWidth(event, UITarget, component) {
        const value = event.target.value;      
        component.value = value;  
        if(UITarget.target) {
            UITarget.target.style.width = value + 'px';                 
        }
    }

    handleLayoutHeight(event, UITarget, component) {
        const value = event.target.value;
        component.value = value;
        if(UITarget.target) {
            UITarget.target.style.height = value + 'px';                 
        }
    }

    duplicate(event, UITarget, component) {
        let wapDiv = document.querySelector('.my-pedal');
        console.log("Duplication")
        
        let htmlDiv = document.createElement("div");
        htmlDiv.id = "todo";
        htmlDiv.classList.add("resize-drag");
        htmlDiv.classList.add("target-style-container");
        console.log(UITarget.target.style)
        htmlDiv.style = UITarget.target.style.cssText;
        let newLayout = new VLayout(document.querySelector(".my-pedal"), "toto");
        //newLayout.htmlComponent = htmlDiv;
        //wapDiv.appendChild(htmlDiv);
        newLayout.type = "layout";
        console.log("newLayout")
        console.log(newLayout)
        Editor.getInstance().registerTargetEvent(newLayout);

        /*let newLayout = document.createElement("div");
        newLayout.setAttribute("style", UITarget.target.getAttribute("style"));
        newLayout.classList = UITarget.target.classList;
        newLayout.id = UITarget.target.id
        document.querySelector(".my-pedal").appendChild(newLayout);
        console.log("-----")
        console.log(newLayout)

        let cpy = JSON.parse(JSON.stringify(UITarget));
        cpy.target = newLayout;
        cpy.object.htmlComponent = newLayout;
        Editor.getInstance().registerTargetEvent(cpy);
        console.log(cpy)
        console.log("-----")*/


        /*


        let wapDiv = document.querySelector('.my-pedal');
        let labelText = UITarget.object.name;
        let htmlLabel = document.createElement("label");
        htmlLabel.setAttribute("for", labelText);
        htmlLabel.textContent = "labelText";  
        htmlLabel.contentEditable = true;
        htmlLabel.style.textAlign = 'center';
        htmlLabel.style.position = 'absolute';
        htmlLabel.style.display = 'block';
        htmlLabel.style["touch-action"] = 'none';
        htmlLabel.classList.add("target-style-label");
        htmlLabel.classList.add("drag");
        let cpy = new Label();
        cpy.htmlLabel = htmlLabel;
        Editor.getInstance().registerTargetEvent(cpy);
        wapDiv.appendChild(htmlLabel); */
    }

    removeShadow(event, UITarget, component) {
        if(component.checked) {
            UITarget.target.style.boxShadow = "";
        }
    }

    handleLayoutSrc(event, UITarget) {
        let src = event.target.src;   

        //We must slice the string, because the image we click on is a preview, and the directory is different
        //ex:   preview:    ./img/knobs2/file.png
        //      sprite:     ./img/knobs/file.png
        const fileName = src.slice(src.lastIndexOf('/') + 1);
        // Save the src in object
        UITarget.object.htmlComponent.background = src;
        if(event.target.value) {
            let urlSrc = event.target.value;
            UITarget.object.htmlComponent.background = urlSrc;
            UITarget.target.style.backgroundImage = `url("${urlSrc}")`; 
            UITarget.object.backgroundSrc = `url("${urlSrc}")`;
            UITarget.target.style.backgroundSize = "100% 100%";       
        }
        else if(UITarget.target) {            
            UITarget.target.style.backgroundImage = `url("./img/background/${fileName}`; 
            UITarget.object.backgroundSrc = `url("./img/background/${fileName}`;
            UITarget.target.style.backgroundSize = "100% 100%";           
        }

    }

    handleLayoutBorderColor(event, UITarget) {
        const value = event.target.value;        

        UITarget.target.style.borderColor = value;
    }

    handleLayoutBorderWidth(event, UITarget, component) {
        const value = event.target.value;    
        component.value = value;    

        UITarget.target.style.borderWidth = value + "px";
    }

    handleLayoutBorderRadius(event, UITarget) {
        const isChecked = event.target.checked;        

        if(isChecked) {
            UITarget.target.style.borderRadius = '10px';
        } else {
            UITarget.target.style.borderRadius = '0px';
        }
    }

    handleLayoutBorderRadiusValue(event, UITarget) {
        const value = event.target.value;           

        UITarget.target.style.borderRadius = value + 'px';
     
    }

    handleLayoutBackgroundColor(event, UITarget) {
        if(UITarget.target) {
            UITarget.target.style.backgroundColor = event.target.value;                 
        }
    }

    handleLayoutBackgroundColorTo(event, UITarget) {
        let object = UITarget.object.htmlComponent;
        // Save data for update view
        UITarget.target.colorTo = event.target.value;
        // If the end color exist
        if(object.endColor) {
            // We get the colors, bg and opacity
            let startColor = tinycolor(event.target.value).toRgb();           
            object.startColor = event.target.value;   
            let endColor = tinycolor(object.endColor).toRgb();
            let opacity = 1;
            let backgroundImage = "";
            if(object.background) backgroundImage = object.background;
            if(object.opacity) opacity = object.opacity;
            // Set gradient
            UITarget.target.style.background = 'linear-gradient(to top, rgba(' + startColor.r + ', ' +
            startColor.g + ', ' + startColor.b + ', ' + opacity + '), ' + 
            'rgba(' + endColor.r + ', ' + endColor.g + ', ' + endColor.b + ', ' + opacity + ')), '+
            'url('+backgroundImage+') 0% 0% / 100% 100%';
        }
        // If no starting color (only endind color choose)
        else {
            // I define a normal background
            UITarget.target.style.backgroundColor = event.target.value;    
            // And save on the object two attributes             
            UITarget.target.backgroundColor = event.target.value;                 
            object.startColor = event.target.value;                 
        }
    }

    handleLayoutBackgroundColorFrom(event, UITarget) {
        let object = UITarget.object.htmlComponent;
        // Save data for update view
        UITarget.colorFrom = event.target.value;
        // If the end color exist
        if(object.startColor) {
            // We get the colors, bg and opacity
            let startColor = tinycolor(object.startColor).toRgb();
            let endColor = tinycolor(event.target.value).toRgb();            
            object.endColor = event.target.value;   
            let opacity = 1;
            let backgroundImage = "";
            if(object.background) backgroundImage = object.background;
            if(object.opacity) opacity = object.opacity;
            // Set gradient
            UITarget.target.style.background = 'linear-gradient(to top, rgba(' + startColor.r + ', ' +
            startColor.g + ', ' + startColor.b + ', ' + opacity + '), ' + 
            'rgba(' + endColor.r + ', ' + endColor.g + ', ' + endColor.b + ', ' + opacity + ')), '+
            'url('+backgroundImage+') 0% 0% / 100% 100%';
        }
        // If no starting color (only endind color choose)
        else {
            // I define a normal background
            UITarget.target.style.backgroundColor = event.target.value;    
            // And save on the object two attributes             
            UITarget.target.backgroundColor = event.target.value;                 
            object.endColor = event.target.value;                 
        }
    }

    setLayoutBackgroundOpacity(event, UITarget) {
        let object = UITarget.object.htmlComponent;
        const value = event.target.value;
        // Transform 0-100 into 1-0
        object.opacity = 1 - (value / 100);
        // If we have colors
        if(object.startColor && object.endColor){
            // Same process -> TODO: function
            let startColor = tinycolor(object.startColor).toRgb();
            let endColor = tinycolor(object.endColor).toRgb();
            let backgroundImage = "";
            if(object.background) backgroundImage = object.background;
            UITarget.target.style.background = 'linear-gradient(to top, rgba(' + startColor.r + ', ' +
            startColor.g + ', ' + startColor.b + ', ' + object.opacity + '), ' + 
            'rgba(' + endColor.r + ', ' + endColor.g + ', ' + endColor.b + ', ' + object.opacity + ')), '+
            'url('+backgroundImage+') 0% 0% / 100% 100%';
        }
    }

    setLayoutTextureOpacity(event, UITarget, component = null) {
        let object = UITarget.object.htmlComponent;
        const value = event.target.value;
        // Component is the linekd field in the customization panel
        if(component)component.value = value;
        // Transform 0-100 into 1-0
        object.textureOpacity = 1 - (value / 100);
        // If we have colors
        UITarget.target.style.opacity = 1 - (value / 100);
    }

    // Hide a layout
    hideLayout(event, UITarget, component) {
        const isChecked = component.checked;   
        // Exept if its the main component
        if(!UITarget.target.classList.contains("my-pedal")) {
            if(!isChecked) {
                UITarget.target.style.display = '';
            }
            else {
                UITarget.target.style.display = 'none';
            }
        }
    }

    // Hide all layouts
    hideAllLayout(event, UITarget, component) {
        const isChecked = event.target.checked;   
        console.log(isChecked)
        let pedal = document.querySelector(".my-pedal");
        let components = pedal.querySelectorAll("div.resize-drag");
        console.log(components);
        if(!isChecked) {
            components.forEach(element => {
                element.style.display = '';
            });
        }
        else {
            components.forEach(element => {
                element.style.display = 'none';
            });
        }
    }

    // Hide a layout
    rotateGradient(event, UITarget) {
        let object = UITarget.object.htmlComponent;
        const isChecked = event.target.checked;   
        if(object.startColor && object.endColor) {
            let direction;
            let endColor = tinycolor(object.endColor).toRgb();
            let startColor = tinycolor(object.startColor).toRgb();
            let opacity;
            if(object.opacity) opacity = object.opacity;
            else opacity = 1;
            let backgroundImage = object.backgroundImage;
            if(!isChecked) {
                direction = 'to top';
            }
            else {
                direction = 'to right';
            }
            UITarget.target.style.background = 'linear-gradient(' + direction + ', rgba(' + startColor.r + ', ' +
            startColor.g + ', ' + startColor.b + ', ' + opacity + '), ' + 
            'rgba(' + endColor.r + ', ' + endColor.g + ', ' + endColor.b + ', ' + opacity + ')), '+
            'url('+backgroundImage+') 0% 0% / 100% 100%';
        }
    }

    updatePanel(target, t) {
        // Selectors
        let layoutWidthRangeSelector = t.querySelector("#size-layout-width-range");
        let layoutWidthNumberSelector = t.querySelector("#size-layout-width-number");
        let layoutHeightRangeSelector = t.querySelector("#size-layout-height-range");
        let layoutHeightNumberSelector = t.querySelector("#size-layout-height-number");
        let layoutBorderColorSelector = t.querySelector("#border-border-color");
        let layoutBorderWidthRangeSelector = t.querySelector("#border-border-width-range");
        let layoutBorderWidthNumberSelector = t.querySelector("#border-border-width-number");
        let layoutGradientColorFromSelector = t.querySelector("#gradient-gradient-color-to");
        let layoutGradientColorToSelector = t.querySelector("#gradient-gradient-color-from");
        let layoutSrcAllSelector = t.querySelectorAll("img");
        // Updators
        // Width
        let layoutWidth = target.style["width"].replace('px','');
        let defaultLayoutWidth = "0";
        layoutWidth ? (layoutWidthRangeSelector.value = layoutWidth, layoutWidthNumberSelector.value = layoutWidth) : (layoutWidthRangeSelector.value = defaultLayoutWidth, layoutWidthNumberSelector.value = defaultLayoutWidth);
        // Height
        let layoutHeight = target.style["height"].replace('px','');
        let defaultLayoutHeight = "0";
        layoutHeight ? (layoutHeightRangeSelector.value = layoutHeight, layoutHeightNumberSelector.value = layoutHeight) : (layoutHeightRangeSelector.value = defaultLayoutHeight, layoutHeightNumberSelector.value = defaultLayoutHeight);
        // Border
        let borderColor = target.style.borderColor;
        let borderWidth = target.style.borderWidth.replace('px','');
        let borderWidthDefault = "1";
        borderColor == undefined ? layoutBorderColorSelector.value = tinycolor("rgb(0, 0, 0)").toHexString() : layoutBorderColorSelector.value = tinycolor(borderColor).toHexString();
        borderWidth ? (layoutBorderWidthRangeSelector.value = borderWidth, layoutBorderWidthNumberSelector.value = borderWidth) : (layoutBorderWidthRangeSelector.value = borderWidthDefault, layoutBorderWidthNumberSelector.value = borderWidthDefault);
        // Gradient
        let layoutBackground = target.style.backgroundImage;
        let url = layoutBackground.search("url");
        if(url >= 0) {
            let layoutBackgroundUrl = layoutBackground.split("url(\"")[1];
            layoutBackgroundUrl = layoutBackgroundUrl.replace("\")", "");
            // Knob src
            updateHandleSrc(layoutBackgroundUrl, layoutSrcAllSelector);
        }
        let rgba = layoutBackground.search("rgba");
        if(rgba >= 0) {
            let layoutBackgroundRgba = layoutBackground.split("rgba(");
            let layoutBackgroundRgbaFrom = layoutBackgroundRgba[1].split("), ")[0];
            let layoutBackgroundRgbaTo = layoutBackgroundRgba[2].split(")), ")[0];
            layoutGradientColorFromSelector.value = tinycolor("rgb(" + layoutBackgroundRgbaFrom + ")").toHexString();
            layoutGradientColorToSelector.value = tinycolor("rgb(" + layoutBackgroundRgbaTo + ")").toHexString();
        }
        let rgb = layoutBackground.search("rgb");
        if(rgb >= 0 && rgba < 0) {
            let layoutBackgroundRgb = layoutBackground.split("rgb(");
            let layoutBackgroundRgbFrom = layoutBackgroundRgb[1].split("), ")[0];
            let layoutBackgroundRgbTo = layoutBackgroundRgb[2].split(")), ")[0];
            layoutGradientColorFromSelector.value = tinycolor("rgb(" + layoutBackgroundRgbFrom + ")").toHexString();
            layoutGradientColorToSelector.value = tinycolor("rgb(" + layoutBackgroundRgbTo + ")").toHexString();
        }
        if(rgb < 0 && rgba < 0) {
            layoutGradientColorFromSelector.value = tinycolor("rgb(73, 73, 73)").toHexString();
            layoutGradientColorToSelector.value = tinycolor("rgb(73, 73, 73)").toHexString();
        }
    }
}

function updateHandleSrc(src, knobSrcAllSelector) {
    knobSrcAllSelector.forEach(knob => { knob.style.borderColor = "white"; });
    let knobSrc = src.split("/");
    getElementsBySrc(knobSrc[knobSrc.length - 1]).style.borderColor = "red";
}

// Inspired from https://stackoverflow.com/questions/3836381/js-document-getelementbysrc/3836403
function getElementsBySrc(srcValue) {
    var nodes = [];
    var e = document.getElementsByTagName('img');
  
    for (var i = 0; i < e.length; i++) {
      if (e[i].hasAttribute('src') && e[i].getAttribute('src').includes(srcValue)) {
        nodes.push(e[i]);
      }
    }
    return nodes[0];
}