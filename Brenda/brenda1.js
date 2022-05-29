function escolha (){
    
    while (true)
    {var decisao= prompt ("Parar para comer algo? Digite 1 para 'Sim' e 2 para 'Não'.")
    if (decisao == 1) {
        return window.location.href="brenda2.html";
    }
    else if (decisao == 2) {
        alert ("Ao escolher não comer você desmaia na rua e acaba sendo atropelada.");
        return window.location.href="../gameover.html";
        break
    }
        alert ("Digite uma opção válida.")
    }
}
escolha()
