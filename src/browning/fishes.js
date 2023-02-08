
const {Phrase} = require("../core/phrase");
export class Fishes extends Phrase{
    constructor () {
        super('#fishes', "#fishes", undefined, 'landscape');

        this.timelines = {}
        this.timelines['fishes-outro'] = gsap.timeline({
            scrollTrigger:{
                trigger: `#fishes-outro`,
                start: "top bottom",
                end: "bottom top",
                //markers: true,
                //pin: true,
                //pinnedContainer: true,
                scrub: true,
                //   snap: snap
            }
        })
        this.fadeText(this.getText('#fishes-outro'), 0, 4, 'fishes-outro')

        this.createTimeline('char')
        this.createTimeline('barbel', '>')
        this.createTimeline('trout', '>')
        this.createTimeline('grayling', '>')
        this.createTimeline('minnow', '>')
        this.createTimeline('perch', '>')
        this.createTimeline('pike', '>')
        this.createTimeline('salmon', '>')
    }
    createTimeline(id) {
        this.timelines[id] = gsap.timeline({
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
        })
        this.timeline.add(this.timelines[id]);
        this.addFish(id, 0)
        return this.timelines[id]
    }
    addFish (fish, start = '>') {
        let duration = 8;
        const path = [
            { x: '50%', y: '0%' },
            { x: '10%', y: '1%' },
            { x: '1%', y: '1%' },

            { x: '-1%', y: '1%' },
            { x: '-1%', y: '-1%' },
            { x: '1%', y: '-1%' },

        ]
        this.timelines[fish].fromTo(`#${fish}`, {
            x: '100%',
        }, {
            filter: 'saturate(1.5)',
            x: '50%',
            duration: 2,
        }, start)
        this.timelines[fish].to(`#${fish}`, {
            motionPath: {
                path: path,
                alignOrigin: [0.5, 0.5],
                //autoRotate: true,
                //start: 0.25,
            },
            duration: duration,
        }, '>')
        this.fadeText(this.getText(`#${fish}-scene`), '<', duration, fish)

        this.timelines[fish].to(`#${fish}`, {

            //filter: 'grayscale(70%)',
            filter: 'saturate(1) grayscale(10%)',
            duration: 1,
        }, '>')

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

