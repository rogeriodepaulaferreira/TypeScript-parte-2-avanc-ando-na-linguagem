import { htmlTratamento } from "../models/html-tratamento.js";
export class View {
    constructor(selector, escape) {
        this.escape = false;
        this.element = htmlTratamento.verificaNullHtmlElement(document.querySelector(selector));
        this.escape = (escape ? escape : false);
    }
    update(model, tipo) {
        this.type = (tipo == undefined ? '' : tipo);
        let template = this.template(model);
        if (this.escape) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this.element.innerHTML = template;
    }
}
