<script>
    /*Faça um Programa que verifique se uma letra digitada é "F" ou "M".
    Conforme a letra escrever: F - Feminino, M - Masculino, Sexo Inválido.*/
    var sexo=prompt("Qual seu sexo M ou F? ");
   
    if(sexo == "M"){
       document.write("<h2>Masculino</h2>");
    }else if (sexo == "F"){
       document.write("<h2>Feminino</h2>");
    }else{
       document.write("<h2>Informação Inválida!!</h2>");
    }
</script>
 
