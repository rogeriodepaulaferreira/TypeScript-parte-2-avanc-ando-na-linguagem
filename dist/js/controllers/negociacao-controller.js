import { DiasDaSemana } from '../enums/dias-da-semana.js';
import { htmlTratamento } from '../models/html-tratamento.js';
import { Negociacao } from '../models/negociacao.js';
import { Negociacoes } from '../models/negociacoes.js';
import { MensagemView } from '../views/mensagem-views.js';
import { NegociacoesView } from '../views/negociacoes-view.js';
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negociacoesView = new NegociacoesView('#negociacoesView');
        this.mensagemView = new MensagemView('#mensagemView', true);
        this.inputData = htmlTratamento.verificaNullInput(document.querySelector('#data'));
        this.inputQuantidade = htmlTratamento.verificaNullInput(document.querySelector('#quantidade'));
        this.inputValor = htmlTratamento.verificaNullInput(document.querySelector('#valor'));
        this.negociacoesView.update(this.negociacoes, '');
    }
    adiciona() {
        const negociacao = Negociacao.criaDe(this.inputData.value, this.inputQuantidade.value, this.inputValor.value);
        if (!this.diaUtil(negociacao.data)) {
            this.mensagemView.update('Apenas negociações em dias úteis são aceitas !', 'danger');
            return;
        }
        this.negociacoes.adiciona(negociacao);
        this.limparFormulario();
        this.atualizaView();
    }
    limparFormulario() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
    atualizaView() {
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update('Negociação adicionada com sucesso !', 'success');
    }
    diaUtil(data) {
        return (data.getDay() > DiasDaSemana.DOMINGO && data.getDay() < DiasDaSemana.SABADO);
    }
}
