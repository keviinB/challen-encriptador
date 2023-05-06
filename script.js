// Encriptar
function encriptar (){
    const removeAccents = (str) => { return str.normalize("NFD").replace(/[\u0300-\u036f]/g, ""); } 
    var textoSinacento = document.querySelector("#input-texto").value;
    var texto = removeAccents(textoSinacento);
    if(texto != ""){
        var textoCifrado = texto
                            .replace(/e/gi, "enter")
                            .replace(/i/gi, "imes")
                            .replace(/a/gi, "ai")
                            .replace(/o/gi, "ober")
                            .replace(/u/gi, "ufat");
        document.querySelector("#input-texto-desencriptar").value = textoCifrado;
        Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Texto encriptado con exito !',
            showConfirmButton: false,
            timer: 1200
        })
        document.querySelector("#input-texto").value="";

    }else{
        Swal.fire(
            'Caja vacia, no hay texto 👀!'
          )
    }
    
}
    
var boton1 = document.querySelector("#btn-encriptar");
boton1.onclick = encriptar;

// Desencriptar
function desencriptar (){ 
    var texto = document.querySelector("#input-texto-desencriptar").value;
    var textoDecifrado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u"); 
    document.querySelector("#input-texto-desencriptar").value = textoDecifrado;
}

var boton2 = document.querySelector("#btn-desencriptar");
boton2.onclick = desencriptar;

// copy text
const button = document.querySelector('.btn-copy');
const texto = document.querySelector("#input-texto-desencriptar");
button.addEventListener('click', function(){
    texto.focus();
    const copiado = document.execCommand('selectAll');
    document.execCommand('copy');
    if(copiado != false){
        Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Texto copiado',
            showConfirmButton: false,
            timer: 1000
          })
    }else{
        Swal.fire(
            'Caja vacia, no hay texto 👀!'
          )
    }
})




