<!DOCTYPE html>
<html>
 <head>
    <title>JavaScript</title>
      <b>Digite o primeiro numero: </b><input id="primeiro" type="number"><br>
      <b>Digite o Segundo  numero: </b><input id="segundo" type="number"><br>
      <b>Digite o terceiro numero: </b><input id="terceiro" type="number"><br>
      <button onclick="maior()">Maior</button>
      <button onclick="menor()">Menor</button>
 </head>
 <body> 
     <script>
	        //Faça um Programa que leia três números e mostre o maior e o menor deles.
	    
          function maior(){
            var n1 = parseFloat(document.getElementById("primeiro").value);
            var n2 = parseFloat(document.getElementById("segundo").value);
            var n3 = parseFloat(document.getElementById("terceiro").value);

            var maior = n1;

            if(n2 > maior)
             maior = n2;
            if(n3 > maior)
             maior = n3;

             alert("Numero Maior é: "+maior);
          }
       
          function menor(){
            var n1 = parseFloat(document.getElementById("primeiro").value);
            var n2 = parseFloat(document.getElementById("segundo").value);
            var n3 = parseFloat(document.getElementById("terceiro").value);

            var menor = n1;

            if(n2 < menor)
             menor = n2;
            if(n3 < menor)
             menor = n3;

             alert("Numero Menor é: "+menor);
          }
   </script>
 </body>
</html>
