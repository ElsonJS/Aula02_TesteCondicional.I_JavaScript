<script>
    //Faça um Programa que leia três números e mostre o maior deles.
     var n1=prompt("Digite o 1° numero: ");
     var n2=prompt("Digite o 2° numero: ");
     var n3=prompt("Digite o 3° numero: ");
 
     if(n1 > n2 && n1 > n3){
        document.write("<b>O primeiro numero é maior: </b>"+ n1);
     }else if(n2 > n1 && n2 > n3){
        document.write("<b>O segundo numero é maior: </b>"+ n2); 
     }else{
        document.write("<b>O terceiro numero é maior: </b>"+ n3); 
     }
</script>
