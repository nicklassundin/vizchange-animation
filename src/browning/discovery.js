
const {verticalAnimation} = require("../phrase");
export class Discovery {
    constructor() {
        //let dive_yester = new Phrase('#lake', 'landscape', '#d1', '#bg2', '#fg1', '#fg2', '#fg3', '#title')

        let dive = new verticalAnimation('#dive-intro',
            'landscape',
            ['#title'],
            ['#bg2'],
            ['#fg1', '#fg2', '#fg3'],
            ['#D1', '#D2', '#D3'],
            '#dive-tomorrow',
            ['#bubbles', '#carbon', '#extra', '#fishes', '#people'],
            ['#fishes2', '#people2', '#zoom'],
            ['#fishes3', '#people3', '#nutri1', '#nutri2', '#nutri3', '#ice'])

        //let dive_yester = new verticalAnimation('#dive-yesterday', 'landscape', ['#title'], ['#bg2'], ['#fg1', '#fg2', '#fg3'], ['#d1', '#d2', '#d3'])
        dive.addLakeAlign('intro');
        dive.addVertical('yesterday')
        dive.addVertical('today');
        dive.addVertical('tomorrow')


    }
}