import { AbstractLayout } from "./AbstractLayout.js";

export class VLayout extends AbstractLayout{

    constructor(parent, name, components) {
        console.log("constructor VLayout")
        console.log(parent)
        console.log(name)
        console.log(components)
        super(parent, name, AbstractLayout.DIRECTION.VERTICAL, components);
    }
}