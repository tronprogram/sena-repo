function calcular(){
    let radio = document.getElementById("radio").value;
    let altura = document.getElementById("altura").value;
    let area = 2*Math.PI*radio**2 + 2*Math.PI*radio*altura;
    let volumen = Math.PI*(radio**2)*altura;
    let resultadoTextArea = document.getElementById("resultado");
    resultadoTextArea.value = "Área: " + area + "\n" + "Volumen: " + volumen;
}