# GUI Builder documentation

## Goal of this project

The main goal of the GUI Builder is to earn time diring the plugin creation process, particulary on the design part. View code generated from FAUST automaticaly dispose the important components on the screen like knobs, slider and labels. The realy intersting part concern the customisation of these components to have a completly choosen design, maybe like the real design of the plugin for example.

## I/ User documentation

Here you will find how to use the GUI Builder correctly.

### 0) Run the builder

If you want to run localy the GUI Builder, please refer to the installation guide [installation guide](https://github.com/Dorian-Chapoulie/fausteditor/tree/master).
Then when all installation steps are completed and your FAUST code is ready and past in the code section, please click the run button, wait a moment and click the sub-division GUI Builder.

### 1) Components

You can select every components and drag them to another position, in or out the main layout. Every position will be saved to the final render.
For some kind of components you can resize quickly by clicking the angle and drag to the wanted size. 
Please notice that every components are related to the main layout position but independant from each other then, if you move the main layout, all components will move in the same direction.

### 2) Customization panel

By clicking a component you will see something append in the right panel.
Here you can find all the customisation possibilites for the selected component (size, color, texture...). 
If you wan to apply a modification to every same components in the plugin, you can check on the "All" checkbox. That will connect every same component to the current modification, don't forget to uncheck after used to avoid miss-configuration.
Please notice that some kind of components like layout, cant be configured in the same time.

### 3) Exportation

You can export your plugin by clicking "PUBLISH / PREVIEW PLUGIN", you can choose to export as WAP or WAM2 standards. Then you will see a preview of your component.
If the component doesn't show up, you can reload by clicking "Refresh content" or open it on a new tab with the "Open in new tab" button.
You can find your exported project in the corresponding back-end you choose to export (WAM2 or WAP) > functional-pedals > published > YourPluginName.

## II/ Developer documentation

### 1) Architecture

This new GUI Builder is composed by a css folder, who contain some global css and a js folder in which we can find 3 sub-folders:

- **layout**: Here you can find the scripts who transform FAUST components into web components. The script.js also describe the initial position and display of the plugin.
- **editor**: This is the folder who contain the main editor.js file with his behaviour and a file for components interaction behaviours (drag, resize).
- **component**: Here is stored all the differents components used in the GUI Builder even for the editor panel than for the plugin. This folde id divided into four subfolders, editor for the editor components, handlers, for the behavor, layout and ui for the plugin components.

### 2) Add a new custom propertie

Communication between plugin component and editor is maintain by handlers, define for every kind of component. If you want to add a new customisation possibilities to your builder, you need first to create or reuse a editor component (component/editor) and associate this component to the correct handler with correct method on the handler like the following example:

We want to add a new slider for manage the rotation of a layout.

> #### editor/editor.js
> ``` javascript
> initLayoutEditor() {
> ...
>   this.UIEditorComponents.push(
>        new SliderComponent(   // Your editor component
>            "rotation",        // Name
>            // Your listener, can be an array of listners
>            this.layoutHandler.setLayoutRotation.bind(this), 
>            ["layout"],        // TargetType
>            this.UITarget,     // UITarget
>            null,              // Fn_defaultValues
>            "%"));             // Measure, default is "px"
> }
> ```
> #### handlers/layoutHandler.js
> ``` javascript
> export class LayoutHandler {
> ...
>   // Params: event on editor, selected target, linked component
>   handleLayoutHeight(event, UITarget, component) {
>        const value = event.target.value;
>        component.value = value;  
>        // Your custom behaviour
>   }
> }
> ```

# TODO

- Preview plugin on publish 

# Sources
