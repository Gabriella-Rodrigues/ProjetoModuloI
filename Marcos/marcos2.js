function escolha (){
    
    while (true)
    {var decisao= prompt ("Seguir um dos participantes da briga? Digite 1 para 'Sim' e 2 para 'Não'.")
    if (decisao == 1) {
        return window.location.href="marcos3.html";
    }
    else if (decisao == 2) {
        alert ("Foi levado até a delegacia como testemunha.");
        return window.location.href="../gameover.html";
        break
    }
        alert ("Digite uma opção válida.")
    }
}
escolha()