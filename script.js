function calcule(){

let pctg = document.getElementById("porcentagem").value/100;
let nPre = document.getElementById("nPresenca").value;
let nTot = document.getElementById("nTotal").value;
let nFal = document.getElementById("nFaltas").value;
let pDia = document.getElementById("periodosDia").value;

console.log(pDia);

let x = (nPre - pctg*nTot - pctg*pDia*nFal)/(pctg*pDia - pDia);

x = Math.ceil(x);

document.getElementById("result").innerHTML = "Você precisa vir: " + x;

}

function calcule2(){
    let pctg = document.getElementById("porcentagem2").value/100;
    let nPre = document.getElementById("nPresenca2").value;
    let nTot = document.getElementById("nTotal2").value;
    let pDia = document.getElementById("periodosDia2").value;

    console.log(pDia);

    let y = (nPre - pctg*nTot)/(pctg*pDia);
    console.log(y);
    y = Math.floor(y);

    document.getElementById("result2").innerHTML = "Você pode faltar: " + y;

}
