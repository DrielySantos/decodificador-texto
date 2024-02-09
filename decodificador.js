let interruptor = document.getElementById('interruptor')
let root = document.documentElement

interruptor.addEventListener('click', () => {
    root.classList.toggle('tema-claro');
})
document.getElementById('copiar').style.visibility = "hidden";

function criptografarTexto(){ 
    let mensagem              = document.getElementById('campo_entrada').value.toLowerCase().replace(/[^a-z\xA0-\xA7\xC2-\xC5\xF0-\xF9]/g, " ");
    
    let mensagemCriptografada = mensagem.replace(/e/g, "enter")
                                        .replace(/i/g, "imes")
                                        .replace(/a/g, "ai")
                                        .replace(/o/g, "ober")
                                        .replace(/u/g, "ufat");
    document.getElementById('mensagem').innerHTML = mensagemCriptografada;
    document.getElementById('campo_entrada').value = '';
    styleDescricaoEBtnCopiar();
}

function descriptografarTexto(){
    let mensagem              = document.getElementById('campo_entrada').value.toLowerCase();
    let mensagemDescriptografada                   = mensagem.replace(/enter/g, "e")
                                                            .replace(/imes/g, "i")
                                                            .replace(/ai/g, "a")
                                                            .replace(/ober/g, "o")
                                                            .replace(/ufat/g, "u");
    document.getElementById('mensagem').innerHTML = mensagemDescriptografada;
    document.getElementById('campo_entrada').value = '';
    styleDescricaoEBtnCopiar();
}

function copyText(){
    let copyText = document.getElementById('mensagem');
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    document.getElementById('mensagem').innerHTML = '';
}

function styleDescricaoEBtnCopiar(){
    document.getElementById('descricao').style.display = 'none';
    document.getElementById('copiar').style.visibility = "visible";
}



