import { Editor } from '../../editor/editor.js';

export class BargraphHandler {

    /*handleVolume(event, UITarget) {        
        const value = event.target.value;                 
        UITarget.target.audio.volume = value / 100.0;
    }

    handlePlay(event, UITarget) {
        const isChecked = event.target.checked;

        if(isChecked) {
            UITarget.target.audio.play();
        }else {
            UITarget.target.audio.pause();
        }
    }*/

    handleHbargraphWidth(event, UITarget) {
        const value = event.target.value;        
        if(UITarget.target) {
            UITarget.target.changeWidth(value);                  
        }
    }

    handleHbargraphHeight(event, UITarget) {
        const value = event.target.value;        
        if(UITarget.target) {
            UITarget.target.changeHeight(value);                     
        }
    }
    
}