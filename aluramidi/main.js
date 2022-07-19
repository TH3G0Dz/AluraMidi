function tocaSom (idElementoAudio) {
    const elemento = document.querySelector(idElementoAudio).play();
    if (elemento != null && elemento.localName === 'audio') {
        elemento.play();
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(idAudio);
    }
    /* ADIÇÃO OU REMOÇÃO DE CLASSE
    //adiciona classe
    tecla.onKeyDown = function () {
        tecla.classList.add('ativa');         
    }
    tecla.onKeyDown = function ()
    //remove classe
    tecla.onKeyUp = function () {
        tecla.classList.remove('ativa');
    } */
    tecla.onKeyDown = function (evento) {
        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add ('ativa');
        }
    }

}