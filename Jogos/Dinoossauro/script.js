const dino = document.querySelector('.dino');
const fundo = document.querySelector('.fundo');
let pulando = false;
let posicao = 0;

function handleKeyUp(event) {
    if (event.keyCode === 32 || TouchEvent (true) ) {
        if(!pulando){
        pulo();
        }
    }
}

function pulo() {
    pulando = true;
    let upInterval = setInterval(() => {
        if (posicao >= 150) {
            clearInterval(upInterval);
            let downInterval = setInterval(() => {
                if (posicao <= 0) {
                    clearInterval(downInterval);
                    pulando = false;
                } else {
                    posicao -= 20;  
                    dino.style.bottom = posicao + 'px';   
                  }
            }, 20);
            
        } else {
        posicao += 20;    
        dino.style.bottom = posicao + 'px';
        }
    }, 20);
}

function criarCactus() {
    const cactus = document.createElement('div');
    let cactusPosicao = 1000;
    let cactusAleatorio = Math.random() * 6000;

    cactus.classList.add('cactus'); 
    cactus.style.left = 1000 + 'px'
    fundo.appendChild(cactus);

    let leftInterval = setInterval(() => {
        if (cactusPosicao < -60) {
            clearInterval(leftInterval);
            background.removeChild(cactus);
        } else if (cactusPosicao > 0 && cactusPosicao <60 && posicao < 60) {

        clearInterval(leftInterval);
        document.body.innerHTML = '<h1 class="game-over">Fim de Jogo</h1>';        
        
        } else {
            cactusPosicao -= 10;
            cactus.style.left = cactusPosicao + 'px';
            
        }

    }, 20)

    setTimeout(criarCactus, cactusAleatorio);
}

criarCactus();
document.addEventListener('keyup', handleKeyUp);