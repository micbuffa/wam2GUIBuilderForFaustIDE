import { Editor } from '../../editor/editor.js';

export class AbstractHandler {

    static offsetPx = 200;
    constructor() {}

    // BMT: Set all the objects to absolute position
    static setObjectsToAbsolute(objects) {
        // General offset is for move the pedal from the left
        var decalage = this.offsetPx;
        var positions = [];
        // All the resizable like Hgroup...
        for (let element of objects[1]) {
            if(element.classList.contains("my-pedal")) {
                var margin = parseInt(element.style.marginTop.slice(0, -2))
                var size = element.getBoundingClientRect();
                element.style.position = "absolute";
                element.style.top = size.top - margin + "px";
                // -12 is the scroller margin
                // TODO: Dyno this -12
                //element.style.left = size.left - 12 - margin + decalage + "px";
                element.style.left = decalage + 12 + "px";
                element.style.width = size.width + "px";
                element.style.height = size.height + "px";
            }
            else {
                positions.push([element.getBoundingClientRect(), element]);
            }
        };
        // All the draggable like Knob...
        for (let element of objects[0]) {
            positions.push([element.getBoundingClientRect(), element]);
        };
        // Foreach, define the new pos in absolute
        positions.forEach(element => {
            let wapDiv = document.querySelector('.my-pedal');
            let marginHeader = document.querySelector('.navbar.navbar-expand.navbar-dark.bg-dark').getBoundingClientRect().height;
            var node = element[1];
            var size = element[0];
            var src = "";
            // Save the src
            if(node.childNodes[0].src) {
                src = node.childNodes[0].src;
            }
            // TODO: Function !
            // Get the size of margin to remove from the absPos
            var margin = parseInt(node.style.marginTop.slice(0, -2)) + parseInt(wapDiv.style.marginTop.slice(0, -2)) + parseInt(wapDiv.style.borderWidth.slice(0, -2));
            node.style.transform = null;
            node.style.position = "absolute";
            node.style.top = size.top - margin - marginHeader + "px";
            // -12 is the scroller margin
            // TODO: Dyno this -12
            // TODO: Dyno the - 200 with decalage from setObjectsToAbsolute
            node.style.left = size.left - 12 - margin - this.offsetPx + "px";
            node.style.width = size.width + "px";
            node.style.height = size.height + "px";
            // Old method
            //document.body.appendChild(node);
            // New one
            wapDiv.appendChild(node);
            //node.parenNode.appendChild(node);
            node.childNodes[0].src = src;
            //console.log(node.childNodes[0].src)
            //node.childNodes[0].src.set(src);
        });
    }
      
    // Get all the component we want to absolute
    static getAllDrag() {
        var drag = document.getElementsByClassName("drag");
        var resize = document.getElementsByClassName("resize-drag");
        return [drag, resize];
      }
}