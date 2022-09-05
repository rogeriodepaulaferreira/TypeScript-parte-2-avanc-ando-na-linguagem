export abstract class View<T>{

    protected element: HTMLElement;
    protected type: string;
    
    constructor (selector:string){
        this.element = document.querySelector(selector);
    }

    public update(model:T,tipo:string):void{
        this.type = tipo;
        const template = this.template(model);
        this.element.innerHTML = template;
    }

    protected abstract template(model: T):string;
}