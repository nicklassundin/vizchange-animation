const {Audio} = require("../core/audio");
const {verticalAnimation} = require("../phrase");
export class Discovery {
    constructor() {

        this.audio = {
            lake: new Audio('audioLake'),
        }
        this.audio.lake.fadeAudio('discovery', 'discovery')
        let dive = new verticalAnimation('#dive-intro',
            'landscape',
            ['#title'],
            ['#bg2'],
            ['#fg1', '#fg2', '#fg3'],
            ['#D2', '#D3'], // #D1 hard coded
            '#dive-tomorrow',
            {
                1: ['#bubbles', '#carbon', '#extra', '#fishes', '#people'],
                2: ['#fishes2', '#people2', '#zoom'],
                3: ['#fishes3', '#people3', '#nutri1', '#nutri2', '#nutri3', '#ice']
            },
            {
                1: '#dive-yesterday',
                2: '#dive-today',
                3: '#dive-tomorrow',
            })

        dive.addLakeAlign(0);
        dive.addVertical('>');
        dive.addVertical('>');
        dive.addVertical('>');

        //dive.fadeOut('>');


    }
}