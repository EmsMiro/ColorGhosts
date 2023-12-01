class Ghost {
    constructor(){
        this.colorDescriptions = {
            'white': {
                description:'Fantasma branco! Quieto e introspectivo. Sempre acompanhado pelo suave som do lo-fi, este fantasma proporciona uma atmosfera relaxante e contemplativa. ',
                img: './img/3.png'
            },

            'red': {
                description: 'Fantasma vermelho! Com chamas suaves que dançam ao ritmo de suas palavras, este fantasma é apaixonado por livros e conhecimento. Sempre encontrado em bibliotecas abandonadas, compartilhando histórias do além.',
                img: './img/2.png'
            },

            'purple': {
                description: 'Fantasma roxo! Uma figura etérea que paira com um aroma delicioso ao seu redor, é um amante incondicional de comida. Encontrada em cozinhas abandonadas e restaurantes esquecidos, ela compartilha a alegria da boa comida. ',
                img: './img/1.png'
            },

            'blue': {
                description: 'Fantasma Azul! Este fantasma é envolto em uma luz azul, refletindo sua paixão pelos videogames. Sempre encontrado em ambientes abandonados com consoles antigos, o Espírito Gamer é amante de desafios digitais e aventuras virtuais.',
                img: './img/4.png'
            }
        };

        this.arrayColors = Object.keys(this.colorDescriptions);
    }

    getColorImage(color){
        return this.colorDescriptions[color].img;
    }

    getColorDescription(color){
        return this.colorDescriptions[color].description;
    }

    getRandomColor(){
        const randomIndex = Math.floor(Math.random() * this.arrayColors.length);
        return this.arrayColors[randomIndex];
    }
}

const aGhost = new Ghost();

document.querySelector('#discover-button').addEventListener('click', function() {
const randomColor = aGhost.getRandomColor();

const ghostImage = document.querySelector('#ghost-img');
const imagePath = aGhost.getColorImage(randomColor);
ghostImage.src = imagePath;

const ghostDescription = document.querySelector('#ghost-description');

ghostDescription.innerHTML = aGhost.getColorDescription(randomColor);

});