export  class htmlTratamento{

    public static verificaNullInput(input: HTMLInputElement | null) : HTMLInputElement{
        if(input){
            return input; 
        }
        throw Error('Seletor HTML Input inválido');
    }

    public static verificaNullHtmlElement(input: HTMLElement | null) : HTMLElement{
        if(input){
            return input; 
        }
        throw Error('Seletor HTML inválido');
    }
}