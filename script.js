function calcule(){

var pctg = document.getElementById("porcentagem").value/100;
var nPre = document.getElementById("nPresenca").value;
var nTot = document.getElementById("nTotal").value;
var nFal = document.getElementById("nFaltas").value;
var pDia = document.getElementById("periodosDia").value;

console.log(pDia);

var x = (nPre - pctg*nTot - pctg*pDia*nFal)/(pctg*pDia - pDia)

x = Math.ceil(x)

document.getElementById("result").innerHTML = "Você precisa vir: " + x

}