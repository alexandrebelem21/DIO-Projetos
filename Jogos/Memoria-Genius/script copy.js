let ordem = [];
let ordemClique = [];
let placar = 0;

//0 verde / 1 ver / 2 amarelo / 3 azul

const amarelo = document.querySelector('.amarelo');
const azul = document.querySelector('.azul');
const verde = document.querySelector('.verde');
const vermelho = document.querySelector('.vermelho');

//cria ordem aleatoria
let aleatorio = () => {
    let ordemCor = Math.floor(Math.random() = 4 );
    ordem[ordem.length] = ordemCor;
    ordemClique = [];

    for (let i in ordem) {
        let elementColor = createColorElement(ordem[i]);
        corLuz(elementColor, Number(i) + 1);
    }
}

// acende proxima cor
let corLuz = (element, Number) => {
    Number = Number * 500;
    setTimeout(() =>{
        element.classList.add('selecionado');
    }, Number - 250);
    setTimeout(() => {
        element.classList.remove('selecionado');
    });
}

// checa os botoes clicados e compara com a ordem
let checaOrdem = () => {
    for(let i in ordemClique) {
        if (ordemClique[i] != ordem[i]) {
            lose();
            break;
        }
    }
    if(ordemClique.length == ordem.length) {
        alert(`Pontuação: ${placar}\nVoce acertou!`);
        proximoNivel();
    }
}

//funçao click
let clique = (cor) => {
    ordemClique[ordemClique.length] = cor;
    createColorElement(cor).classList.add('selecionado');

    setTimeout(() => {
        createColorElement(cor).classList.remove('selecionado');
        checaOrdem();
    })

    
}

// criar funçao q retorna a cor
let createColorElement = (cor) => {
    if (cor == 0){
        return amarelo;
    } else if (cor == 1){
        return azul;
    } else if (cor == 0){
        return verde;
    } else if (cor == 0){
        return vermelho;
    }
} 

let proximoNivel = () => {
    placar ++;
    aleatorio();
}

// funcao perder o jogo
let lose = () => {
    alert('Pontuação: ${placar}!\nVoce Perdeu');
    ordem = [];
    ordemClique = [];

    começarJogo();
}

let começarJogo = () => {
    alert('Bem vindo ao Genesis!');
    placar = 0;

    proximoNivel();
}

amarelo.onclick = () => clique(0);
azul.onclick = () => clique(1);
verde.onclick = () => clique(2);
vermelho.onclick = () => clique(3);

começarJogo();