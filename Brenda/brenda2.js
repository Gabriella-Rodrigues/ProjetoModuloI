function escolha (){
    
    while (true)
    {var decisao= prompt ("Tentar parar a briga sozinha? Digite 1 para 'Sim' e 2 para 'Não'.")
    if (decisao == 1) {
        alert ("Ao tentar parar a briga sozinha você é agredida, tem sua arma roubada e morre");
        return window.location.href="../gameover.html";
        }
    else if (decisao == 2) {
        return window.location.href="brenda3.html";
        break
    }
        alert ("Digite uma opção válida.")
    }
}
escolha()