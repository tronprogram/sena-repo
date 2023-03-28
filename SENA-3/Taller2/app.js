function Calcularresultado(){
    let Radio = parseInt(document.getElementById('inputradio1').value)
    let Volumen=(4/3)*Math.PI*Radio**3
    let Resultado = Volumen
    document.getElementById('Resultado1').textContent = Resultado
}