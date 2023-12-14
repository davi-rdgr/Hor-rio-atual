function atualizarHorario() {

    let phoras = document.querySelector('.phoras');
    let sao = document.querySelector('.saohoras');
    let saodata = document.querySelector('.saoData')
    let bodyElement = document.body;

    let agora = new Date();
    let dia = agora.getDay()
    let mes = agora.getMonth()
    let ano = agora.getFullYear()
    let hora = agora.getHours();
    let minutes = agora.getMinutes();
    let seg = agora.getSeconds();

    if (seg.toString().length == 1) {
        seg = `0${seg}`
    }
    if (minutes.toString().length == 1) {
        minutes = `0${minutes}`
    }
    if (hora.toString().length == 1) {
        hora = `0${hora}`
    }
    phoras.innerText = `${hora}h${minutes}:${seg}`;

    if (dia.toString().length == 1) {
        dia = `0${dia}`
    }
    saodata.innerText = `${dia}/${mes}/${ano}`

    if (hora < 6) {
        sao.innerText = 'Está de madrugada !';
        sao.style.color = '#947e00'
        bodyElement.style.color = '#caac04'
        bodyElement.style.backgroundImage = 'url("images/imagemMadrugada.jpg")'

    } else if (hora < 12) {
        sao.innerText = 'Está de manhã !';
        sao.style.color = '#8d8c8c'
        bodyElement.style.color = '#c2c2c2'
        bodyElement.style.backgroundImage = 'url("images/imagemManha.jpg")'

    } else if (hora <= 18) {
        sao.innerText = 'Está de tarde !';
        sao.style.color = '#DE702E'
        bodyElement.style.color = '#ff8438'
        bodyElement.style.backgroundImage = 'url("images/imagemTarde.jpg")'

    } else {
        sao.innerText = 'Está de noite !';
        sao.style.color = '#485040'
        bodyElement.style.color = '#8ea86e'
        bodyElement.style.backgroundImage = 'url("images/imagemNoite.jpg")'
    }
}
setInterval(atualizarHorario, 1000);
atualizarHorario();