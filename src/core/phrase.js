const snap = {
    snapTo: "labels", // snap to the closest label in the timeline
    directional: true,
    duration: {min: 5, max: 30}, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
    delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
    ease: "power3.inOut", // the ease of the snap animation ("power3" by default)
    onComplete: (value) => {
        console.log(value)
    }
}

const options = {
    'title_horizontal': {
        scrollTrigger:{
            start: "top center",
            end: "bottom top",
            //markers: true,
            //pin: true,
            //pinnedContainer: true,
            scrub: true,
         //   snap: snap
        }
    },
    'landscape': {
        scrollTrigger:{
            start: "top bottom",
            end: "bottom top",
            //markers: true,
            //pin: true,
            //pinnedContainer: true,
            scrub: 1,
         //   snap: snap
        },
    },
    'master': {
        scrollTrigger:{
            start: "top top",
            end: "bottom top",
            //toggleActions: "play none none reverse",
            //markers: true,
            //pin: true,
            //pinnedContainer: true,
            scrub: 1,
            //snap: snap
        }
    },
}

export class Phrase {
    constructor(id, endId = id, ids = {}, type = 'landscape') {
        this.config = options[type]
        this.config.scrollTrigger.trigger = id
        this.timeline = gsap.timeline(this.config)
        this.ids = ids
        this.timelines = {};
    }
    getText(id) {
        return gsap.utils.toArray(`${id}-text`)
    }

    getTimeline() {
        return this.timeline;
    }
    fade(text, start = '<', pause = 0, id) {
        text.map((each, i) => {
            this.fadeIn(each, start, id)
            this.fadeOutPause(each, pause, id)
            start = '>';
        })
    }
    fadeText(start = '<', pause = 0, id) {
        this.fade(this.getText(`#${id}-scene`), start, pause, id)
    }
    fadeIn(text, start = '<', id) {
        this.getTimeline(id).from(text, {opacity: 0, duration: 1}, start)
    }
    fadeOutPause(text, pause, id) {
        this.getTimeline(id).to(text, {opacity: 0, duration: 1}, `${pause+1}`)
    }
    fadeOut(text, start, id) {
        this.getTimeline(id).to(text, {opacity: 0, duration: 1}, start)
    }
    createTimeline(id, config, callback = (timeline) => timeline) {
        this.timelines[id] = gsap.timeline(config)
        this.timeline.add(this.timelines[id]);

        return callback(this.timelines[id])
    }
    createTextTimeline(id, callback) {
        let config = {
            scrollTrigger:{
                trigger: `#${id}-scene`,
                start: "top top",
                end: "bottom top",
                //markers: true,
                //pin: true,
                //pinnedContainer: true,
                scrub: true,
                //   snap: snap
            }
        }
        return this.createTimeline(`${id}-text`, config, callback)
    }
    rightIn (target, start, id) {
        this.getTimeline(id).from(target, { x: '100%', duration: 1}, start)
    }
    rightOut (target, start = '>', id, duration = 1) {
        this.getTimeline(id).to(target, { x: '50%', y: '-25%', duration: duration}, start)
    }
    bottomIn (target, start = '>', id) {
        this.getTimeline(id).from(target, { y: '100%', duration: 1}, start)
    }
}
