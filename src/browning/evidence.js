
const {Phrase} = require("../core/phrase");

export class Evidence extends Phrase {
    constructor () {
        super();


        this.createTimeline('map', {
            scrollTrigger:{
                trigger: `#map-scene`,
                start: "top top",
                end: "bottom top",
                //markers: true,
                //pin: true,
                //pinnedContainer: true,
                scrub: true,
                //   snap: snap
            }
        }, (timeline) => {
            let start = 0;

            ['#perc-1', '#perc-2', '#perc-3', '#perc-4', '#perc-5'].forEach((each, index) => {
                this.fadeIn(each, start,'map')
                if(index < 4)this.fadeOut(each, '>','map')
                start = '<'
            })
            this.fadeOut(['#arctic', '#map', '#perc-1', '#perc-2', '#perc-3', '#perc-4', '#perc-5'], '>', 'map')
        })

        this.createTextTimeline('context')
        this.createTimeline('context', {
            scrollTrigger:{
                trigger: `#context-scene`,
                start: "top center",
                end: "bottom top",
                //markers: true,
                //pin: true,
                //pinnedContainer: true,
                scrub: true,
                //   snap: snap
            }
        }, () => {
            //this.fadeText(0, 0, 'context')
            let context = ['#context-1', '#context-2', '#context-3', '#context-4', '#context-5', '#context-6', '#context-7', '#context-8']
            this.bottomIn(context, 0, 'context')
            //this.rightOut(context, 3, 'context', 10)
        })

        this.createTextTimeline('summer')
        this.createTimeline('summer', {
            scrollTrigger:{
                trigger: `#summer-scene`,
                start: "top center",
                end: "bottom top",
                //markers: true,
                //pin: true,
                //pinnedContainer: true,
                scrub: true,
                //   snap: snap
            }
        }, () => {
            //this.fadeText(0, 0, 'context')
            let context = ['#summer-axonometric', '#freeze', '#time', '#scientist-1', '#scientist-2', '#scientist-3', '#scientist-4']
            this.bottomIn(context, 0, 'summer')
            //this.rightOut(context, 3, 'summer', 10)
        })


        this.createTextTimeline('winter')
        this.createTimeline('winter', {
            scrollTrigger:{
                trigger: `#winter-scene`,
                start: "top center",
                end: "bottom top",
                //markers: true,
                //pin: true,
                //pinnedContainer: true,
                scrub: true,
                //   snap: snap
            }
        }, () => {
            //this.fadeText(0, 0, 'context')
            let context = ['#winter-axonometric', '#break', '#winter-scientist-1', '#winter-scientist-2']
            this.bottomIn(context, 0, 'winter')
            //this.rightOut(context, 3, 'summer', 10)
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