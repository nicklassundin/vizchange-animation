
const {Phrase} = require("../phrase");
export class Imersive {
    constructor () {

        let highPhrase = new Phrase('#high', 'title_horizontal','#a3', '#a2', '#a1')
        highPhrase.addTitle()
        highPhrase.fadeText()
        highPhrase.addHorizontalOut(0.5)
        let timeline = highPhrase.timeline

        let rainPhrase = new Phrase( '#rain', 'landscape', '#b4', '#b2', '#b1')
        rainPhrase.addHorizontal()
        let rain = rainPhrase.timeline

        let mudPhrase = new Phrase( '#mud', 'landscape', '#c1', '#c4', '#c2')
        mudPhrase.addHorizontal(1, 0.75);
        let mud = mudPhrase.timeline


        let lakePhrase = new Phrase( '#lake', 'landscape', '#d1', '#d3', '#d2', '#bg2')
        lakePhrase.addHorizontal(1, 0);

        let lake = lakePhrase.timeline

    }
}

