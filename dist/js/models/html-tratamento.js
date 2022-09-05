export class htmlTratamento {
    static verificaNullInput(input) {
        if (input) {
            return input;
        }
        throw Error('Seletor HTML Input inválido');
    }
    static verificaNullHtmlElement(input) {
        if (input) {
            return input;
        }
        throw Error('Seletor HTML inválido');
    }
}
