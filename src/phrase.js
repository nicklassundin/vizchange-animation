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
            markers: true,
            //pin: true,
            //pinnedContainer: true,
            scrub: true,
            snap: snap
        }
    },
    'landscape': {
        scrollTrigger:{
            start: "top center",
            end: "bottom center",
            //markers: true,
            //pin: true,
            //pinnedContainer: true,
            scrub: 0.5,
            snap: snap
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
            scrub: .5,
            //snap: snap
        }
    },
}


import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
export class Phrase {
    constructor(id, type, detail, foreground, background) {
        this.config = options[type]
        this.config.scrollTrigger.trigger = id
        this.timeline = gsap.timeline(this.config)
        this.ids = {};
        this.ids.detail = detail
        this.ids.foreground = foreground
        this.ids.background = background
        this.ids.more = Object.values(arguments).slice(5);
    }
    addTitle () {
        this.timeline.from(this.ids.background, { y: '25%', duration: 1  },0)
        this.timeline.from(this.ids.foreground, { y: '15%', duration: 1  },'<')
        this.timeline.from(this.ids.detail, { y: '10%', duration: 1  },'<')
        this.ids.more.forEach((each) => {
            this.timeline.from(each, { y: '10%', duration: 1  },'<')
        })
        return this
    }
    addHorizontalIn () {
        this.timeline.from(this.ids.background, { y: '75%', duration: 1  },0)
        this.timeline.from(this.ids.foreground, { y: '85%', duration: 1  },'<')
        this.timeline.from(this.ids.detail, { y: '90%', duration: 1  },'<')
        this.ids.more.forEach((each) => {
            this.timeline.from(each, { y: '90%', duration: 1  },'<')
        })
    }
    addHorizontal () {
        this.addHorizontalIn()
        this.addHorizontalOut()
    }
    addHorizontalOut () {
        this.timeline.to(this.ids.background, { y: '50%', duration: 1  },'>')
        this.timeline.to(this.ids.foreground, { y: '30%', x: '-3%', duration: 1  },'<')
        this.timeline.to(this.ids.detail, { y: '12%', x: '-5%', duration: 1  },'<')

        this.ids.more.forEach((each) => {
            this.timeline.to(each, { y: '50%', duration: 1  },'<')
        })
    }
    addLakeAlign () {
        this.timeline.from(this.ids.detail, { y: '75%', duration: 1  },0)
        this.timeline.from(this.ids.foreground, { y: '85%', duration: 1  },'<')
        this.timeline.from(this.ids.background, { y: '90%', duration: 1  },'<')


        this.timeline.to(this.ids.detail, { y: '-10%', duration: 1  },'>')
        this.timeline.to(this.ids.foreground, { y: '-20%', duration: 1  },'<')
        this.timeline.to(this.ids.background, { y: '-20%', x: '-15%', duration: 2 },'<')
        console.log(this.ids)
        if(typeof this.ids.more === 'string'){
            this.timeline.from(this.ids.more, { opacity: 0, duration: 1}, '>')
        }else{
            this.ids.more.forEach(each => {
                this.timeline.from(each, { opacity: 0, duration: 1}, '>')
            })
        }
        this.timeline.to(this.ids.background, { opacity: 0, duration: 1}, '>')
    }
    addVertical () {
        //this.timeline.from(this.ids.detail, {opacity: 0, duration: 1}, 0)
        this.timeline.from(this.ids.more[2], {opacity: 0, duration: 1}, 0)


        let diveObjects = [this.ids.detail, this.ids.background, this.ids.foreground].concat(this.ids.more)
        this.timeline.to(diveObjects, { x: '-50vh'}, '>')

        this.timeline.from(this.ids.background, {opacity: 0, duration: 1}, '<')

        this.timeline.to(diveObjects, { x: '-100vh'}, '>')
    }
}