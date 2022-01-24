import interact from 'https://cdn.interactjs.io/v1.9.19/interactjs/index.js';

window.dragMoveListener = dragMoveListener;
//EDIT: removed resize feature
export const setEvents = () => {
    
    interact('.drag')
        .draggable({
            listeners: { move: window.dragMoveListener },
            // TODO: Trouver comment ca fonctionne !
            //ignoreFrom: 'webaudio-knob, webaudio-switch, webaudio-slider, .label',
            //ignoreFrom: 'webaudio-knob, .webaudio-knob-body',
            inertia: true,
            modifiers: [
                interact.modifiers.restrictRect({
                    //restriction: 'parent',
                    endOnly: true
                })
            ]
        });


    interact('.resize-drag')
    .resizable({
        // resize from all edges and corners
        edges: { left: true, right: true, bottom: true, top: true },

        listeners: {
            move (event) {
                var target = event.target
                var x = (parseFloat(target.getAttribute('data-x')) || 0)
                var y = (parseFloat(target.getAttribute('data-y')) || 0)

                // update the element's style
                target.style.width = event.rect.width + 'px'
                target.style.height = event.rect.height + 'px'

                // translate when resizing from top or left edges
                x += event.deltaRect.left
                y += event.deltaRect.top

                target.style.webkitTransform = target.style.transform = 'translate(' + x + 'px,' + y + 'px)';

                target.setAttribute('data-x', x)
                target.setAttribute('data-y', y)
                //target.textContent = Math.round(event.rect.width) + '\u00D7' + Math.round(event.rect.height)
            }
        },
        modifiers: [
            // keep the edges inside the parent
            interact.modifiers.restrictEdges({
               // outer: 'parent'
            }),

            // minimum size
            interact.modifiers.restrictSize({
                min: { width: 10, height: 5 }
            })
        ],
        inertia: true
    })
    .draggable({
        listeners: { move: window.dragMoveListener },
        inertia: true,
        //ignoreFrom: 'webaudio-knob, .webaudio-knob-body',
        modifiers: [
            // BMT: Comment because of the magnet effect on the top parent element
            /*interact.modifiers.restrictRect({
                restriction: 'parent',
                endOnly: true
            })*/
        ]
    });
}


function dragMoveListener (event) {
    var target = event.target
    // keep the dragged position in the data-x/data-y attributes
    var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
    var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy
  
    // translate the element
    target.style.webkitTransform = target.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
  
    // update the posiion attributes
    target.setAttribute('data-x', x)
    target.setAttribute('data-y', y)
}

// this function is used later in the resizing and gesture demos
window.dragMoveListener = dragMoveListener