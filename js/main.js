/*La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"*/

function encriptar() {
  var texto = document.getElementById("input-texto").value.toLowerCase();
  //i es para que afecte tanto mayús y minusc --E e.
  //g sirve para toda la linea u oración
  //m es para afectar al parrafo.
  var txtcifrado = texto.replace(/e/igm, "enter");
  var txtcifrado = txtcifrado.replace(/i/igm, "imes");
  var txtcifrado = txtcifrado.replace(/a/igm, "ai");
  var txtcifrado = txtcifrado.replace(/o/igm, "ober");
  var txtcifrado = txtcifrado.replace(/u/igm, "ufat");

  document.getElementById("muñeco").style.display= "none";
  document.getElementById("txtc1").style.display= "none";
  document.getElementById("mostrartxt").innerHTML = txtcifrado;
  document.getElementById("btn-copiar").style.display = "show";
  document.getElementById("btn-copiar").style.display = "inherit";
}

function desencriptar() {
    var texto = document.getElementById("input-texto").value.toLowerCase();
    var txtcifrado = texto.replace(/enter/igm, "e");
    var txtcifrado = txtcifrado.replace(/imes/igm, "i");
    var txtcifrado = txtcifrado.replace(/ai/igm, "a");
    var txtcifrado = txtcifrado.replace(/ober/igm, "o");
    var txtcifrado = txtcifrado.replace(/ufat/igm, "u");
  
    document.getElementById("muñeco").style.display= "none";
    document.getElementById("txtc1").style.display= "none";
    document.getElementById("mostrartxt").innerHTML = txtcifrado;
    document.getElementById("btn-copiar").style.display = "show";
    document.getElementById("btn-copiar").style.display = "inherit";
  }

function copiar(){
    var contenido= document.querySelector("#mostrartxt");
    contenido.execCommand("copy");
    alert("se copio")
}