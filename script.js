// Exibir no terminl
console.log("Olá Mundo");
// Exibir no navegador
document.write("Olá Navegador! 4");
// Exibir alerta
alert("Alerta de Confirmação");
/*
Comentario
de 
Bloco
tudo que fica entre /*     /*
*/

// capturar o nome do Aluno
var nome = window.prompt("Informe o nome:");

// Guardar a primeira nota1
var nota1 = window.prompt("Digite a nota 1:");

// Converter a nota1 de texto para decimal
nota1 = parseFloat(nota1);

// Guardar a segunda nota2
var nota2 = window.prompt("Digite a nota 2");

// Converter a nota2 de texto para decimal
nota2 = parseFloat(nota2)

// Calculo a média das duas notas
var media = (nota1 + nota2)/2;

//Gero a mensagem de exibição do nome e da média do aluno
var mensagem = nome + ", você obteve a média: " + media;
window.alert(mensagem);

