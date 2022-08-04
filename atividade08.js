<script>
    /*Faça um programa para a leitura de duas notas parciais de um aluno. 
    O programa deve calcular a média alcançada por aluno e apresentar:
       a) A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
       b) A mensagem "Reprovado", se a média for menor do que sete;
       c) A mensagem "Aprovado com Distinção", se a média for igual a dez.*/
    var n1=parseInt(prompt("Digite sua primeira nota: "));
    var n2=parseInt(prompt("Digite sua segunda nota: "));

    if((n1 + n2) / 2 > 7 && (n1 + n2) / 2 < 10){
        document.write("<h2>Você foi aprovado</h2>");
    }else if((n1 + n2) / 2 < 7){
        document.write("<h2>Você foi reprovado</h2>");
    }else if((n1 + n2) / 2 == 10){
        document.write("<h2>Você foi aprovado com distinção</h2>");
    }
</script>
