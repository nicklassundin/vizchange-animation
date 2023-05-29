const {Audio} = require("../core/audio");

const {Phrase} = require("../phrase");
export class Imersive {
    constructor () {
        this.audio = {
            wind: new Audio('audioWind'),
            mosquitos: new Audio('audioMosquitos'),
            stream: new Audio('audioStream'),
            lake: new Audio('audioLake'),
        }
        this.audio.wind.fadeAudio('titlescreen', 'high')
        this.audio.mosquitos.fadeAudio('rain', 'rain')
        this.audio.stream.fadeAudio('mud', 'mud')
        this.audio.lake.fadeAudio('lake', 'imersion')

        let highPhrase = new Phrase('#high', 'title_horizontal','#a3', '#a2', '#a1')
        highPhrase.addTitle()
        highPhrase.fadeText()
        highPhrase.addHorizontalOut(0.5)
        let timeline = highPhrase.timeline

        let rainPhrase = new Phrase( '#rain', 'landscape', '#b4', '#b2', '#b1')
        rainPhrase.addHorizontal(1, 0.6)
        let rain = rainPhrase.timeline

        let mudPhrase = new Phrase( '#mud', 'landscape', '#c1', '#c4', '#c2')
        mudPhrase.addHorizontal(1, 0.05);
        let mud = mudPhrase.timeline


        let lakePhrase = new Phrase( '#lake', 'landscape', '#d1', '#d3', '#d2', '#bg2')
        lakePhrase.addHorizontal(1, 0);

        let lake = lakePhrase.timeline

    }
}

