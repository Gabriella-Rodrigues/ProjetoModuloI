function escolha (){
    
    while (true)
    {var decisao= prompt ("Interferir na briga que está acontecendo? Digite 1 para 'Sim' e 2 para 'Não'.")
    if (decisao == 1) {
        alert ("Acaba sendo agredido enquanto tenta separar a briga. No momento que tentou revidar a polícia chega e acaba o levando preso.");
        return window.location.href="../gameover.html";

    }
    else if (decisao == 2) {
        return window.location.href="marcos2.html";
        break
    }
        alert ("Digite uma opção válida.")
    }
}
escolha()