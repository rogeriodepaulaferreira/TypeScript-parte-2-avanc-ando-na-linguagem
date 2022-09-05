export class View {
    constructor(selector) {
        this.element = document.querySelector(selector);
    }
    update(model, tipo) {
        this.type = tipo;
        const template = this.template(model);
        this.element.innerHTML = template;
    }
}
