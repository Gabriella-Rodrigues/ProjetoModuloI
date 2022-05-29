function escolha (){
    
    while (true)
    {var decisao= prompt ("Pegar o atalho para a rodoviária? Digite 1 para 'Sim' e 2 para 'Não'.")
    if (decisao == 1) {
        alert ("Ao optar pelo atalho você se depara com um tiroteio, acaba sendo atingido e morre.");
        return window.location.href="../gameover.html";
        }
    else if (decisao == 2) {
        return window.location.href="vinicius2.html";
        break
    }
        alert ("Digite uma opção válida.")
    }
}
escolha()