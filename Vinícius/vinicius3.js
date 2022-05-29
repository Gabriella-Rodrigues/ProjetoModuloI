function escolha (){
    
    while (true)
    {var decisao= prompt ("Deseja comprar um presente? Digite 1 para 'Sim' e 2 para 'Não'.")
    if (decisao == 1) {
        alert ("Assim que você se dirige até a lojinha de presentes, um grupo armado entra e faz um arrastão te deixando sem nada.");
        return window.location.href="../gameover.html";
        }
    else if (decisao == 2) {
        alert ("Você embarca no ônibus e percebe da janela uma movimentação estranha na loja de presentes. No dia seguinte, já na casa de seus familiares, descobre a notícia de um arrastão na lojinha naquele mesmo horário.");
        return window.location.href="../vencedor.html";
        break
    }
        alert ("Digite uma opção válida.")
    }
}
escolha()