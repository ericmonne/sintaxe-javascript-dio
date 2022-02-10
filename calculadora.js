function calculadora() {
    const operacao = Number(prompt("Escolha uma operação:\n 1- Soma \n 2- Subtração \n 3- Multiplicação \n 4- divisão real \n 5- divisão inteira \n 6- potenciação"));

    if (!operacao || operacao >= 7) {
        alert("ERRO - Operação inválida!");
        calculadora();
    }
    else {

        let n1 = Number(prompt("Insira o primeiro valor:"));
        let n2 = Number(prompt("Insira o segundo valor:"));
        let resultado;

        if (!n1 || !n2) {
            alert("ERRO - parâmetros inválidos!");
            calculadora();
        }
        else {
            function soma() {
                resultado = n1 + n2;
                alert(`${n1} +${n2} = ${resultado}`);
                novaOperacao();
            }
            function subtracao() {
                resultado = n1 - n2;
                alert(`${n1} -${n2} = ${resultado}`);
                novaOperacao();
            }
            function multiplicacao() {
                resultado = n1 * n2;
                alert(`${n1} *${n2} = ${resultado}`);
                novaOperacao();
            }
            function divisaoReal() {
                resultado = n1 / n2;
                alert(`${n1} /${n2} = ${resultado}`);
                novaOperacao();
            }
            function divisaoInteira() {
                resultado = n1 % n2;
                alert(`O resto da divisão entre ${n1} e ${n2} é ${resultado}`);
                novaOperacao();
            }
            function potenciacao() {
                resultado = n1 ** n2;
                alert(`${n1} elevado a ${n2} é igual a ${resultado}`);
                novaOperacao();
            }

            switch (operacao) {
                case 1:
                    soma();
                    break;
                case 2:
                    subtracao();
                    break;
                case 3:
                    multiplicacao();
                    break;
                case 4:
                    divisaoReal();
                    break;
                case 5:
                    divisaoInteira();
                    break;
                case 6:
                    potenciacao();
                    break;
            }

            function novaOperacao() {
                let opcao = Number(prompt("Deseja fazer outra operação?\n 1- Sim \n 2- Não"));

                switch (opcao) {
                    case 1:
                        calculadora();
                        break;
                    case 2:
                        alert("Vai na fé, vou descansar!");
                        break;
                    default:
                        alert("digite uma opção válida");
                        novaOperacao();
                }

            }

        }
    }
}

calculadora();