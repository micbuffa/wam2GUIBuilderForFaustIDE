import { HLayout } from '../component/layout/HLayout.js';
import { VLayout } from '../component/layout/VLayout.js';
import { AbstractComponent } from '../component/ui/AbstractComponent.js';
import { AbstractLayout } from '../component/layout/AbstractLayout.js';
import { VSlider } from '../component/ui/VSlider.js';
import { HSlider } from '../component/ui/HSlider.js'
import { Knob } from '../component/ui/Knob.js';
import { Switch } from '../component/ui/Switch.js';
import { Button } from '../component/ui/Button.js';
import { Nentry } from '../component/ui/Nentry.js';
import { Hbargraph } from '../component/ui/Hbargraph.js';
import { Vbargraph } from '../component/ui/Vbargraph.js';

export class Layout {

  static createComponents(componentsData) {
    const components = [];
    let instance = null;
    componentsData.forEach(c => {
      
      if(c.type.includes('group')) {        
        
        if(c.type === 'hgroup') {
          instance = new HLayout(null, c.label, Layout.createComponents(c.items));
        }else {
          instance = new VLayout(null, c.label, Layout.createComponents(c.items));
        }

      }else {        
        switch(c.type) {
          case 'knob':
            instance = new Knob(c.label, c.address);
          break;

          case 'switch':
            instance = new Switch(c.label, c.address);
          break;

          case 'checkbox':
            instance = new Switch(c.label, c.address);
          break;

          case 'vslider':             
            let filteredVSlider = c.meta && c.meta.find(e => {
              const { style } = e;                        
              if(!!style) return style;
            });

            if(filteredVSlider && filteredVSlider.style === 'knob') {
              instance = new Knob(c.label, c.address);
            }else {
              instance = new VSlider(c.label, c.address);
            } 
          break;

          case 'hslider':             
            let filteredHSlider = c.meta && c.meta.find(e => {
              const { style } = e;                        
              if(!!style) return style;
            });

            if(filteredHSlider && filteredHSlider.style === 'knob') {
              instance = new Knob(c.label, c.address);
            }else {
              instance = new HSlider(c.label, c.address);
            } 
          break;

          case 'button':
            instance = new Button(c.label, c.address);
          break;

          case 'nentry':
            instance = new Nentry(c.label, c.address);
          break;

          case 'hbargraph':
            instance = new Hbargraph(c.label, c.address);
          break;

          case 'vbargraph':
            instance = new Vbargraph(c.label, c.address);
          break;

          default:
            throw(`Type not found: ${c.type} "${c.label}"`);            
          break;
        };           
        instance.setAttributes(c);
      }


        components.push(instance);
    });
    return components;
  }
 
  static calcLayout(root, ui) {
    const layouts = [];           
      
      if(ui.type == 'hgroup') {        
        const hLayout = new HLayout(root, ui.label, Layout.createComponents(ui.items));
        hLayout.htmlComponent.classList.add('my-pedal');
        window.pedal = hLayout;
        layouts.push(hLayout);
      }else if(ui.type == 'vgroup') {
        const vLayout = new VLayout(root, ui.label, Layout.createComponents(ui.items));
        vLayout.htmlComponent.classList.add('my-pedal');
        window.pedal = vLayout;
        layouts.push(vLayout);
      }
    return { ui, layouts };

  }
}