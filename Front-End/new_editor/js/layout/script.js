import { Layout } from './layoutShihong.js';
import { Editor } from '../editor/editor.js';
import { HLayout } from '../component/layout/HLayout.js';
import { VLayout } from '../component/layout/VLayout.js';
import { setEvents as setInteractEvents } from '../editor/interactHandler.js';

// quadecho
window.onload = generateLayout;

/*function registerEvents(components) {
  components.forEach(c => {
    if(c instanceof VLayout || c instanceof HLayout) {  
      Editor.getInstance().registerTargetEvent(c);          
      registerEvents(c.components);      
    }else {
      Editor.getInstance().registerTargetEvent(c);
    }
  });
}*/
function registerEvents(components) {
  components.forEach(c => {
    if(c instanceof VLayout || c instanceof HLayout) {  
      Editor.getInstance().registerTargetEvent(c);          
      registerEvents(c.components);
    }else {
      Editor.getInstance().registerTargetEvent(c);
    }
    /*console.log("[DEBUG] - registerEvents");
    console.log(components);*/
  });
}

//TODO: refactor with a func(component)
function setLayoutFromPosition(components) {
  components.forEach(comp => {
    const layout = {
      top: comp.htmlComponent.offsetTop,
      left: comp.htmlComponent.offsetLeft,
      height: comp.htmlComponent.offsetHeight,
      width: comp.htmlComponent.offsetWidth,
    };
    comp.layout = layout;

    comp.components.forEach(child => {  
      if(child.htmlContainer) {
        const layout = {
          top: child.htmlContainer.offsetTop,
          left: child.htmlContainer.offsetLeft,
          height: child.htmlContainer.offsetHeight,
          width: child.htmlContainer.offsetWidth,
        };
        child.layout = layout;
      }else {
        const layout = {
          top: child.htmlComponent.offsetTop,
          left: child.htmlComponent.offsetLeft,
          height: child.htmlComponent.offsetHeight,
          width: child.htmlComponent.offsetWidth,
        };
        child.layout = layout;
      }      
    });
  });
}


function toFixed(element, parent) {

  if(element.htmlComponent) {
    
    if(element.type === 'layout') {
      

      //element.htmlComponent.style.removeProperty('padding');
      //element.htmlComponent.style.removeProperty('margin');
      //element.htmlComponent.style.removeProperty('vertical-align');

     /* const rect = element.htmlComponent.getBoundingClientRect();

      const navBar = document.querySelector('.navbar');
      const navBarHeight = navBar.getBoundingClientRect().height;

    

      var marginL = element.htmlComponent.style.marginLeft;
      marginL = marginL.slice(0, marginL.length - 2);
      
      console.log("DEBUG:", marginL);

      element.htmlComponent.style.top = (rect.top - navBarHeight) + 'px';
      element.htmlComponent.style.left = (rect.left - marginL) + 'px';
      element.htmlComponent.style.width = (rect.right - rect.left) + 'px';
      element.htmlComponent.style.height = (rect.bottom - rect.top) + 'px';

      /*element.htmlComponent.style.left = rect.left + 'px';
      element.htmlComponent.style.top = rect.top + 'px';
      element.htmlComponent.style.width = (rect.right - rect.left) + 'px';
      element.htmlComponent.style.height = (rect.bottom - rect.top) + 'px';*/

      var parentRect = {};
      if(parent) {
        parentRect = parent.getBoundingClientRect();
      }else {
        parent = {
          top: 0,
          left: 0,
        };
      }

      const currentRect = element.htmlComponent.getBoundingClientRect();
      

      
      setTimeout(() => {
        //element.htmlComponent.style.position = 'absolute';
      }, 1000);

    }//TODO: else if element.htmlContainer then ...

  }
  
  if(element.components) {
    element.components.forEach(e => {
      return toFixed(e);
    })
  }
}

function setSize(element) {

  if(element.type === 'layout') {
    element.adjustSize(); 
  }

  if(element.components) {
    element.components.forEach(e => {
      return setSize(e);
    })
  }
}

function generateLayout() {
  document.querySelector(".main-menu").hidden = true;
  const interval = setInterval(() => {    
    if(window.pedalContainer) {          
      const wapdiv = document.getElementById('pedal-container');
      const JSON = window.faustUI[0];
      const res = Layout.calcLayout(wapdiv, JSON);
      registerEvents(res.layouts);
      setLayoutFromPosition(res.layouts);          
    
      setInteractEvents();

      res.layouts.forEach(layout => {
        setSize(layout);
      });
      clearInterval(interval);
    }
  }, 500);
}