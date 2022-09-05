import { NegociacaoController } from './controllers/negociacao-controller.js';
import { htmlTratamento } from './models/html-tratamento.js';

const controller = new NegociacaoController();
const form = htmlTratamento.verificaNullHtmlElement(document.querySelector('.form'));
form.addEventListener('submit', event => {
    event.preventDefault();
    controller.adiciona();
});  