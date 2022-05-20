
function calcular(tipo, valor) { //Aqui, temos  o tipo, que pode ser ação ou valor(não é esse segundo parâmetro aqui), e temos o valor, que é o caracter independente.
    
    //Verificar se o tipo recebido no visor é uma ação ou um valor
    if(tipo === 'acao'){ //parâmetros colocados lá no html

        if(valor === 'c'){ // o 'c' vai ficar sozinho porque não vai concatenar, vai limpar.
            //Limpar o visor
            document.getElementById('resultado').value = '';
        }

        //Testando as operações matemáticas
        if(valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.') {
            document.getElementById('resultado').value += valor; //Recuperando o valor do campo resultado e concatenando.
        }

        //Verificando o botão igual
        if(valor === '=') {
            var valor_campo = eval(document.getElementById('resultado').value); //Aqui é onde a mágica acontece: A função eval() vai utilizar desso DOM para converter strings concatenadas em expressões.

            document.getElementById('resultado').value = valor_campo; //Aqui, estamos concolidando os valores passados antes e o trabalho da função eval.

        }

    }else if(tipo === 'valor') {
        document.getElementById('resultado').value += valor; //Praticamos isso ena aula de DOM sobre recuperar valores.
    }
}

