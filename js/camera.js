const btnIniciarCamera = document.querySelector('[ data-video-botao ]');
const campoCamera = document.querySelector('[data-camera]');
const video = document.querySelector('[data-video]');
const btnTiraFoto = document.querySelector('[data-tirar-foto]');
const canvas= document.querySelector('[data-video-canvas]');
const msg= document.querySelector('[data-mensagem]');
let imagemURL = '';
const btnEnviarFoto = document.querySelector('[data-enviar]');

btnIniciarCamera.addEventListener('click', async function() {
    const iniciarVideo = await navigator.mediaDevices.getUserMedia({video:true, audio:false});

    btnIniciarCamera.style.display = 'none';
    campoCamera.style.display = 'block';

    video.srcObject = iniciarVideo;
})

btnTiraFoto.addEventListener('click', function () {
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);

    imagemURL = canvas.toDataURL('image/jpeg');
    campoCamera.style.display = 'none';
    msg.style.display = 'block';
})

btnEnviarFoto.addEventListener('click', () =>{
    const receberDados = localStorage.getItem('cadastro');
    const converteRetorno = JSON.parse(receberDados);

    converteRetorno.imagem = imagemURL;

    localStorage.setItem('cadastro', JSON.stringify(converteRetorno))
    window.location.href = '../pages/abrir-conta-form-3.html'
})