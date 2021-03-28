var flag = false, mensagem = '', count = 0;

// Função responsável por capturar o click do botão VERIFICAR
$(document).on('click', '.btn-confirmar', function () {
    var palavra = document.getElementById("palavra").value;

    // Verifica se a palavra digitada no campo é igual a vazio
    if (palavra == "") {
        // Se sim, faz a leitura do arquivo
        loadFileAsText()
    } else {
        // Se não, faz o processamento desta palavra e reseta o campo de entrada
        document.getElementById("palavra").value = "";
        verifica(palavra, "campo")
    }
})

// Função responsável por ler os arquivos .txt
function loadFileAsText() {
    var fileToLoad = document.getElementById("arquivo").files[0];  //a intenção é não precisar de botões pra escolher arquivo e nem para
    var fileReader = new FileReader();                                //executar o script, tudo deve acontecer quando cricar para abrir a aplicação
    fileReader.onload = function (fileLoadedEvent) {
        var textFromFileLoaded = fileLoadedEvent.target.result;
        var texto = textFromFileLoaded;
        listar(texto);
    };

    fileReader.readAsText(fileToLoad, "UTF-8");
}

// Função responsável pela leitura individual de cada linha
function listar(texto) {
    var itens = texto.split("\n"); // define que linhas devem ser consultadas

    for (var i = 0; i < itens.length; i++) {
        var valores = itens[i].split("\t");// espaços TAB definem colunas que serão consultadas

        // Verifica apenas palavras diferentes de vazio, uma vez que a linguagem não permite
        if (valores[6 & 1] != "") {
            // Ao ler cada palavra, a mesma é enviada para função VERIFICA que irá processá-la no autômato
            verifica(valores[6 & 1], "arquivo");
        }

    }
}

// Função responsável pelo loop (4h + 0t)
function loop(palavra, indice) {

    // Verifica se a palavra em um determinado indice (i) é = 0
    if (palavra.substring(indice, indice + 1) === "0") {
        // Se sim, atualizamos a variável de controle dizendo que conseguimos ler/aceitar mais um caractere
        count++;

        // Verifica se a palavra no próximo indíce (i+1) é = t
        if (palavra.substring(indice + 1, indice + 2) === "t") {

            // Se sim, o par de caracteres foi aceito e ambos processados 
            count++;
            return true;
        } else {

            // Se não, a palavra é rejeitada por ter lido qualquer caractere diferente de t após ter lido o 0
            mensagem = '<b style="color:black;">' + palavra.substring(0, indice + 1) + '</b><b style="color:red;">' + palavra.substring(indice + 1, indice + 2) + '</b><b style="color:black;">' + palavra.substring(indice + 2, palavra.length) + '</b>';
            return false;
        }

        // Verifica se a palavra em um determinado indice (i) é = 4
    } else if (palavra.substring(indice, indice + 1) === "4") {
        // Se sim, atualizamos a variável de controle dizendo que conseguimos ler/aceitar mais um caractere
        count++;

        // Verifica se a palavra no próximo indíce (i+1) é = h
        if (palavra.substring(indice + 1, indice + 2) === "h") {

            // Se sim, o par de caracteres foi aceito e ambos processados 
            count++;
            return true;
        } else {

            // Se não, a palavra é rejeitada por ter lido qualquer caractere diferente de h após ter lido o 4
            mensagem = '<b style="color:black;">' + palavra.substring(0, indice + 1) + '</b><b style="color:red;">' + palavra.substring(indice + 1, indice + 2) + '</b><b style="color:black;">' + palavra.substring(indice + 2, palavra.length) + '</b>';
            return false;
        }

    } else {
        // Caso o caractere no indíce (i) não seja = a 0 ou 4, a palavra é rejeitada por isso
        mensagem = '<b style="color:black;">' + palavra.substring(0, indice) + '</b><b style="color:red;">' + palavra.substring(indice, indice + 1) + '</b><b style="color:black;">' + palavra.substring(indice + 1, palavra.length) + '</b>';
        return false;
    }
}

function verifica(palavra, origem) {

    // Variável de controle para verificar aceitação/rejeição de cada palavra
    flag = false;

    // Variável responsável por exibir em que momento a palavra foi rejeitada
    mensagem = '';

    // Variável para controlar se toda a palavra foi percorrida
    count = 0;

    var tamanho_palavra = palavra.length;

    // Verificação para retirar 1 caractere, referente a quebra de linha, do tamanho da palavra para todas as palavras que são vindas do arquivo.
    if (origem == "arquivo") {
        tamanho_palavra -= 1;
    }

    // Verifica se a palavra começa com 5
    if (palavra.substring(0, 1) == "5") {
        var i = 1;

        // Se sim, então passamos para o próximo caractere
        count++;

        // A função do while garante que o loop de (4h ou 0t) irá ocorrer pelo menos 1 vez
        do {
            // Função responsável por controlar o loop
            flag = loop(palavra, i);

            // Verificação se o conjunto de 2 caracteres foi aceito ou rejeitado. 
            if (!flag) {
                // Se foi rejeitado, ou seja, chegou combinação diferente de 4h ou 0t, então encerramos o laço e rejeitamos a palavra pela flag = false
                i = tamanho_palavra;
            } else {
                // Se foi aceito, o laço continua até atingir o tamanho da palavra ou encontrar pares de caracteres diferentes dos definidos na linguagem
                i += 2;
            }

        } while (i < tamanho_palavra - 2);

        // Verificação para ver se a palavra foi aceita até aqui, ou seja: começa com 5 e repete 1 ou n vezes de 4h ou 0t
        if (flag) {
            // Verifica se está no último caractere da palavra
            if (count + 1 == tamanho_palavra) {
                // E se este é igual a 7
                if (palavra.substring(tamanho_palavra - 1, tamanho_palavra) == "7") {
                    count++;
                    // Se sim, terminamos de processar a palavra e ela foi aceita
                    flag = true;
                } else {
                    // Se não, a palavra é rejeitada por não terminar com 7
                    mensagem = '<b style="color:black;">' + palavra.substring(0, tamanho_palavra - 1) + '</b><b style="color:red;">' + palavra.substring(tamanho_palavra - 1, tamanho_palavra) + '</b>';
                    flag = false;
                }
            } else {
               
                // A palavra é rejeitada por ter caracteres após o fragmento que foi aceito. Ex.: 54h77 - fragmento aceito: 54h7
                if(palavra.substring(count, count + 1) == "7" && palavra.substring(count, count + 1) != ""){
                    mensagem = '<b style="color:black;">' + palavra.substring(0, tamanho_palavra - 2) + '</b><b style="color:red;">' + palavra.substring(tamanho_palavra - 2, tamanho_palavra - 1) + '</b><b style="color:black;">' + palavra.substring(tamanho_palavra - 1, tamanho_palavra) + '</b>';
                }else{
                    if (palavra.substring(count, count + 1) != "") {
                        // A palavra é rejeitada por não terminar no estado final
                        mensagem = '<b style="color:black;">' + palavra.substring(0, tamanho_palavra) + '</b><b style="color:red;">?</b>';

                    } else {
                        // A palavra é rejeitada por encontrar algum caracter entre as repetições de (4h + 0t) e o 7
                        mensagem = '<b style="color:black;">' + palavra.substring(0, tamanho_palavra - 2) + '</b><b style="color:red;">' + palavra.substring(tamanho_palavra - 2, tamanho_palavra - 1) + '</b><b style="color:black;">' + palavra.substring(tamanho_palavra - 1, tamanho_palavra) + '</b>';
                    }
                }

                
                flag = false;
            }
        }

    } else {
        // Se a palavra não começar com 5 ela é rejeitada no primeiro caractere
        mensagem = '<b style="color:red;">' + palavra.substring(0, 1) + '</b><b style="color:black;">' + palavra.substring(1, palavra.length) + '</b>';
        flag = false;
    }

    // Verifica se a palavra foi aceita/rejeitada e insere na tabela
    if (flag) {
        insereTable(palavra, "ACEITA");
    } else {
        insereTable(palavra, "REJEITADA");
    }
}

function insereTable(palavra, status) {

    var tr = '<tr><td>' + palavra + '</td>';

    // Caso a palavra tenha sido rejeitada, inserimos uma coluna (mensagem) para mostrar em que momento ela foi rejeitada 
    if (status == 'REJEITADA') {
        tr += '<td style="color: red;">' + status + '</td>';
        tr += '<td style="color: red;">' + mensagem + '</td>';
    } else {
        // Caso contrário, insere apenas a palavra e o seu status de aceitação
        tr += '<td style="color: green;">' + status + '</td><td> - </td>';
    }

    tr += '</tr>';

    $('.table-palavras > tbody').append(tr);

}
