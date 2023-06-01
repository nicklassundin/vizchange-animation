
const {Phrase} = require("../core/phrase");


export class Evidence extends Phrase {
    constructor () {
        super();
        this.createTimeline('map', {
            scrollTrigger:{
                trigger: `#map-scene`,
                start: "top top+=1",
                end: "bottom top",
                //markers: true,
                //pin: true,
                //pinnedContainer: true,
                scrub: true,
                //   snap: snap
            }
        }, () => {
            let start = 0;

            ['#perc-1', '#perc-2', '#perc-3', '#perc-4', '#perc-5'].forEach((each, index) => {
                this.fadeIn(each, start,'map')
                if(index < 4) this.fadeOut(each, '>','map')
                start = '<'
            })
            this.fadeOut(['#arctic', '#map', '#perc-1', '#perc-2', '#perc-3', '#perc-4', '#perc-5'], '>+6', 'map')
        })

        this.addBoxAnimation('context', ['#context-1', '#context-2', '#context-3', '#context-4', '#context-5', '#context-6', '#context-7', '#context-8'], 'right')
        this.addBoxAnimation('summer', ['#summer-axonometric', '#freeze', '#time', '#scientist-1', '#scientist-2', '#scientist-3', '#scientist-4'], 'left')
        this.addBoxAnimation('winter', ['#winter-axonometric', '#break', '#winter-scientist-1', '#winter-scientist-2', '#lakeIcePlot', "#lakeBreakPlot"], 'up')

    }
    addBoxAnimation (id, element, direction) {
        this.createTextTimeline(id, () => {
            // TODO
            //this.fadeText(0,  0, `${id}-text`)
        })
        this.createTimeline(id, {
            scrollTrigger:{
                trigger: `#${id}-scene`,
                start: "top center",
                end: "bottom top",
                //markers: true,
                //pin: true,
                //pinnedContainer: true,
                scrub: true,
                //   snap: snap
            }
        }, () => {
            this.bottomIn(element, 0, id)
            let y = 20;
            switch (direction) {
                case 'right':
                    this.getTimeline(id).to(element, { x: '15%', y: `-${y+30}%`, duration: 1}, '>+1')
                    break;
                case 'left':
                    this.getTimeline(id).to(element, { x: '-13%', y: `-${y+30}%`, duration: 1}, '>+1')
                    break;
                case 'up':
                    this.getTimeline(id).to(element, { x: '15%', y: `-${y}%`, duration: 1}, '>+1')
                    break;
                default:
            }
        })
    }
    getTimeline(id) {
        switch (id) {
            case undefined:
                return this.timeline
            default:
                return this.timelines[id]
        }
    }
}