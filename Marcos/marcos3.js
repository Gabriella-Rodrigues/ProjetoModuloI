function escolha (){
    
    while (true)
    {var decisao= prompt ("Trancar a porta? Digite 1 para 'Sim' e 2 para 'Não'.")
    if (decisao == 1) {
        alert ("Ao escolher trancar a porta você consegue matar a vítima e foge pela janela.");
        return window.location.href="../vencedor.html";
    }
    else if (decisao == 2) {
        alert ("A polícia chega e flagra a tentativa de assassinato. Você foi preso!");
        return window.location.href="../gameover.html";
        break
    }
        alert ("Digite uma opção válida.")
    }
}
escolha()