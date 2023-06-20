// VUE LINK RUN CHECK
console.log('Vue is correctly running', Vue);

const app = Vue.createApp({
    name: 'Carousel',
    data() {
        return {
            currentIndex: 0,
            pictures: [
                {
                    img: 'img/01.webp',
                    title: 'Cities Skyline II',
                    description: "Un gestionale mai come prima d'ora.",
                },
                {
                    img: 'img/02.webp',
                    title: 'Diablo IV',
                    description: "Il quarto capitolo non delude i fan."
                },
                {
                    img: 'img/03.webp',
                    title: "Dragon's Dogma II",
                    description: "Ricco e avvincente, preparatevi a combattimenti incredibili."
                },
                {
                    img: 'img/04.webp',
                    title: 'Final Fantasy XVI',
                    description: "Preparatevi a tornare nei panni degli Avalanche in questo nuovo capitolo della saga"
                },
                {
                    img: 'img/05.webp',
                    title: 'Formula 1 23',
                    description: "Un must per gli amanti della corsa."
                },
                {
                    img: 'img/06.webp',
                    title: 'LOTR: Gollum',
                    description: 'Vestite i panni di Smigol in questo epico viaggio a Mordor'
                },
                {
                    img: 'img/07.webp',
                    title: 'Lord of The Fallen',
                    description: 'Si torna alle epiche boss fight nel seguito del primo capitolo di Deck13'
                },
                {
                    img: 'img/08.webp',
                    title: 'Metal Gear Solid',
                    description: 'Preparatevi a tornare nei panni di Snake in questo inaspettato reboot di Snake Eater'
                },
                {
                    img: 'img/09.webp',
                    title: 'Payday 3',
                    description: "L'attesissimo capitolo sta per giungere finalmente, preparatevi a combattere orde di SWAT"
                },
                {
                    img: 'img/10.webp',
                    title: "Spiderman 2",
                    description: 'Peter Parker chi?'
                },
                {
                    img: 'img/11.webp',
                    title: "Street Fighter VI",
                    description: "Dalle sale giochi alle proprie console, SF è una saga che non smette di sorprendere"
                },
                {
                    img: 'img/12.webp',
                    title: "Call of Duty Season 4",
                    description: 'La season 4 è in arrivo, e con lei una nuova mappa e 2 nuove modalità'
                },
            ],
        }
    },
    methods: {
        prevImage() {
          this.currentIndex = (this.currentIndex - 1 + this.pictures.length) % this.pictures.length;
        },
        nextImage() {
          this.currentIndex = (this.currentIndex + 1) % this.pictures.length;
        }
      }
});

app.mount('#root');