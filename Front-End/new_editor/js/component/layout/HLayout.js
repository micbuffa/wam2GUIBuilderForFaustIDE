import { AbstractLayout } from "./AbstractLayout.js";

export class HLayout extends AbstractLayout{

    constructor(parent, name, components) {
        super(parent, name, AbstractLayout.DIRECTION.HORIZONTAL, components);
    }
}