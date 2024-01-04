export default function maioridade(campo) {
    const dataNasc = new Date(campo.value);
    if (!validaIdade(dataNasc)) {
        campo.setCustomValidity('O usuário não é maior de idade');
    }
}

function validaIdade(data) {
    const dataAtual = new Date();
    const dataMais18 = new Date(data.getUTCFullYear() +18, datagetUTCMonth(), data.getUTCDate());

    return dataAtual>= dataMais18;
}