import { htmlTratamento } from "../models/html-tratamento.js";

export abstract class View<T>{

    protected element: HTMLElement;
    protected type: string;
    private escape = false;
    
    constructor (selector:string,escape?:boolean){
        this.element = htmlTratamento.verificaNullHtmlElement(document.querySelector(selector));
        this.escape = (escape ? escape:false);
    }

    public update(model:T,tipo?:string):void{
        this.type = (tipo == undefined ? '' : tipo);
        let template = this.template(model);
        if(this.escape){
            template = template.replace(/<script>[\s\S]*?<\/script>/,'');
        }
        this.element.innerHTML = template;
    }

    protected abstract template(model: T):string;
}