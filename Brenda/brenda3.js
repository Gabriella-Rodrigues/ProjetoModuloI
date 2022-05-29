function escolha (){
    
    while (true)
    {var decisao= prompt ("Seguir o suspeito? Digite 1 para 'Sim' e 2 para 'Não'.")
    if (decisao == 1) {
        alert ("Ao fazer boas escolhas você evitou um assassinato no banheiro e foi promovida. Parabéns!");
        return window.location.href="../vencedor.html";
    }
    else if (decisao == 2) {
        alert ("Uma pessoa morre no banheiro e você não vê, perdendo assim o seu cargo na polícia.");
        return window.location.href="../gameover.html";
        break
    }
        alert ("Digite uma opção válida.")
    }
}
escolha()