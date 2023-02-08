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
    }
    getText(id) {
        return gsap.utils.toArray(`${id}-text`)
    }

    getTimeline() {
        return this.timeline;
    }
    fadeText(text, start = '<', pause = 0, id) {
        text.map((each, i) => {
            this.fadeInText(each, start, id)
            this.fadeOutText(each, pause, id)
            start = '>';
        })
    }
    fadeInText(text, start = '<', id) {
        this.getTimeline(id).from(text, {opacity: 0, duration: 1}, start)
    }
    fadeOutText(text, pause, id) {
        this.getTimeline(id).to(text, {opacity: 0, duration: 1}, `${pause+1}`)
    }
}
