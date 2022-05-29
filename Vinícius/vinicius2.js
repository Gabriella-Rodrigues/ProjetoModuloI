function escolha (){
    
    while (true)
    {var decisao= prompt ("Deseja ir no banheiro da rodoviária? Digite 1 para 'Sim' e 2 para 'Não'.")
    if (decisao == 1) {
        alert ("Você é surpreendido por um assassino no banheiro da rodoviária e acaba morto.");
        return window.location.href="../gameover.html";
        }
    else if (decisao == 2) {
        return window.location.href="vinicius3.html";
        break
    }
        alert ("Digite uma opção válida.")
    }
}
escolha()