<script>
    //Faça um Programa que leia três números e mostre o menor deles.
     var n1=prompt("Digite o 1° numero: ");
     var n2=prompt("Digite o 2° numero: ");
     var n3=prompt("Digite o 3° numero: ");
 
     if(n1 < n2 && n1 < n3){
        document.write("<b>O primeiro numero é menor: </b>"+ n1);
     }else if(n2 < n1 && n2 < n3){
        document.write("<b>O segundo numero é menor: </b>"+ n2); 
     }else{
        document.write("<b>O terceiro numero é menor: </b>"+ n3); 
     }
</script>
