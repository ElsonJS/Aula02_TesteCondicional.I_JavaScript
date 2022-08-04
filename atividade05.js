<script>
     /*Faça um Programa que pergunte em que turno você estuda. 
     Peça para digitar M-matutino ou V-Vespertino ou N- Noturno. 
     Imprima a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!" ou "Valor Inválido!",
     conforme o caso.*/
     var turno=prompt("Qual turno você estuda? M-matutino, V-vespetino ou N-noturno? ");
 
     if(turno == "M"){
        document.write("<h2> Bom dia!! </h2>");
     }else if(turno == "V"){
        document.write("<h2> Boa tarde!! </h2>"); 
     }else if(turno == "N"){
        document.write("<h2> Boa noite!! </h2>"); 
     }else{
        document.write("<h2> Valor Inválido!! </h2>");
     }
</script>
