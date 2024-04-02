const campodedigitacao = document.querySelector('#inputtext');
const resultado = document.querySelector('#textoresultado');
const btnCopiar = document.querySelector('#btncopiar');

window.addEventListener("load", function() {     
   btnCopiar.style.display = 'none';   
});

function btncriptografar() { 
    ocultaImagem();
    const textoCriptografado = criptografar(campodedigitacao.value);
    resultado.value = textoCriptografado.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    document.getElementById('msgnaoencontrada').style.display = 'none';
    document.getElementById('msgdigiteotexto').style.display = 'none';
    document.getElementById('textoresultado').style.display = 'block';
    mostrarCopiar();
   
}

function ocultaImagem() {  
    document.getElementById('imagemlupa').style.display = 'none';

}

function mostrarCopiar() {
    btnCopiar.style.display = 'block';
}

function criptografar (stringEncriptada) {
    stringEncriptada = stringEncriptada.toLowerCase();       
    let matrizCodigo = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']]    

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
 return stringEncriptada;
}

function btndescriptografar() {
    ocultaImagem();
    const textoDescriptografado = descriptografar(campodedigitacao.value);
    resultado.value = textoDescriptografado.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    document.getElementById('msgnaoencontrada').style.display = 'none';
    document.getElementById('msgdigiteotexto').style.display = 'none';
    document.getElementById('textoresultado').style.display = 'block';
    mostrarCopiar();
}

function descriptografar(stringDescriptada) {
    stringDescriptada = stringDescriptada.toLowerCase();       
    let matrizCodigo = [['enter', 'e'], ['imes', 'i'], ['ai', 'a'], ['ober', 'o'], ['ufat', 'u']]

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDescriptada.includes(matrizCodigo[i][0])) {
            stringDescriptada = stringDescriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
 return stringDescriptada;
}

function copiar() {
    const texto = document.getElementById('textoresultado');
    texto.select();
    navigator.clipboard.writeText(texto.value);
                   
}