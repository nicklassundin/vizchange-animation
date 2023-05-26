const snap = {
    snapTo: "labels", // snap to the closest label in the timeline
    directional: true,
    duration: {min: 5, max: 30}, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
    delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
    ease: "power3.inOut", // the ease of the snap animation ("power3" by default)
    onComplete: (value) => {
        //console.log(value)
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
    constructor(id, type, detail, foreground, background) {
        this.config = options[type]
        this.config.scrollTrigger.trigger = id
        this.timeline = gsap.timeline(this.config)
        this.ids = {};
        this.ids.detail = detail
        this.ids.text = gsap.utils.toArray(`${id}-text`)
        this.ids.foreground = foreground
        this.ids.background = background
        this.ids.more = Object.values(arguments).slice(5);
    }
    addTitle () {
        this.timeline.from(this.ids.background, { y: '25%', duration: 1  },0)
        this.timeline.from(this.ids.foreground, { y: '15%', duration: 1  },'<')
        this.timeline.from(this.ids.detail, { y: '10%', duration: 1  },'<')
        this.timeline.from(this.ids.more, { y: '10%', duration: 1  },'<')
        return this
    }
    addHorizontalIn (factor = 1 ) {
        this.timeline.from(this.ids.background, { y: `${factor*75}%`, duration: 1  },0)
        this.timeline.from(this.ids.foreground, { y: `${factor*85}%`, duration: 1  },'<')
        this.timeline.from(this.ids.detail, { y: `${factor*90}%`, duration: 1  },'<')
        this.timeline.from(this.ids.more, { y: `${factor*90}%`, duration: 1  },'<')
    }
    fadeText() {
        this.ids.text.map((each, i) => {
            /* TODO to fade or not to fade so browning/fishes.js aswell
            this.timeline.from(each, {opacity: 0, duration: 1}, '>')
            this.timeline.to(each, {opacity: 0, duration: 1}, '>')

             */
        })
    }
    addHorizontal (infactor, outfactor) {
        this.addHorizontalIn(infactor)
        /*
        this.fadeText();
         */
        this.addHorizontalOut(outfactor)
    }
    addHorizontalOut (factor = 1) {
        this.timeline.to(this.ids.background, { y: `${factor*75}%`, duration: 1  },'>')
        this.timeline.to(this.ids.foreground, { y: `${factor*60}%`, x: '-3%', duration: 1  },'<')
        this.timeline.to(this.ids.detail, { y: `${factor*50}%`, x: '-5%', duration: 1  },'<')
        this.timeline.to(this.ids.more, { y: `${factor*50}%`, duration: 1  },'<')
    }
}

export class verticalAnimation {
    //constructor(id, type, detail, foreground, background) {
    constructor(id, type, detail = [], background, foreground, alignBackground, endId = id, popup, text) {
        this.config = options[type]
        this.config.scrollTrigger.trigger = id
        this.config.scrollTrigger.endTrigger = endId
        this.timeline = gsap.timeline(this.config)
        this.timeline.addLabel('intro', 0)
        this.ids = {};
        this.ids.detail = detail
        this.ids.foreground = foreground
        this.ids.background = background
        this.ids.alignBackground = alignBackground;
        this.ids.popup = Object.values(popup);

        Object.keys(text).forEach(key => {
            text[key] = gsap.utils.toArray(`${text[key]}-text`)
        })
        this.ids.text = Object.values(text);
        //this.ids.more = Object.values(arguments).slice(5);
        this.times = 0;
    }
    fromRaise(object, config, position) {
        object.forEach((each, index) => {
            let conf = JSON.parse(JSON.stringify(config))
            config.y = `${conf.y*(10-index)/10}%`
            this.timeline.to(each, conf, position)
            position = '<';
        })
    }
    addLakeAlign (start = 0) {
        //this.timeline.from(this.ids.alignBackground, {opacity: 0, duration: 1}, start)
        this.timeline.to(this.ids.alignBackground, { x: '-58.45%', duration: 2}, start)
        this.timeline.to('#D1', { x: '-33.45%', duration: 2}, '<')

        this.timeline.from(this.ids.background, {x: '58.45%', duration: 2}, '<')
        this.timeline.from(this.ids.background, {opacity: 0, duration: 1}, '>-1')

        this.timeline.from(this.ids.detail, {opacity: 0, duration: 2}, '<')
        //this.timeline.from(this.ids.foreground, { x: '15.6%', duration: 2}, '>')



        this.timeline.to(this.ids.alignBackground, {y: '-19.7%',  duration: 1}, '>')
        //this.fromRaise(this.ids.alignBackground, {y: '-19.7%', duration: 1}, '>')

        this.timeline.from(this.ids.background, {y: '19.7%', duration: 1}, '<')
        this.timeline.from(this.ids.foreground, {y: '19.7%', duration: 1}, '<')
        this.timeline.to('#D1', { y: '-5%', duration: 2}, '<')

        //this.timeline.from(this.ids.background, {opacity: 0, duration: 1}, '>')

        this.timeline.to(this.ids.alignBackground, {opacity: 0, duration: 0}, '>')
        this.ids.alignBackground = '#D1';
        // after

    }
    addVertical (start = '>') {
        let value = 33.33333;
        this.times += 1;

        let init = start;
        for(let i = 0; i < this.times; i++) {
            if(i == this.times-1){
                this.timeline.to(this.ids.popup[i], {opacity: 1, duration: 1}, init)
            }else{
                this.timeline.to(this.ids.popup[i], {opacity: 0, duration: 1}, init)
            }
            init = '<'
        }
        this.timeline.to(['.left-side'], {x: '-90%', duration: 1}, '>');
        this.timeline.to(['.right-side'], {x: '-25%', duration: 1}, '>');


        if(this.times < 3){
            this.timeline.to(this.ids.background, {x: `-${value*this.times}%`, duration: 1}, '>')
            this.timeline.to(this.ids.alignBackground, {x: `-${value*this.times}%`, duration: 1}, '<')
            this.timeline.to(this.ids.foreground, {x: `-${value*this.times}%`, duration: 1}, '<')
            this.timeline.to(this.ids.detail, {x: `-${value*this.times}%`, duration: 1}, '<')
            this.timeline.to(this.ids.popup[0], {x: `-${value*this.times}%`, duration: 1}, '<')
            this.timeline.to(this.ids.popup[1], {x: `-${value*this.times}%`, duration: 1}, '<')
            this.timeline.to(this.ids.popup[2], {x: `-${value*this.times}%`, duration: 1}, '<')
        }
    }
    fadeOut (start = '>') {
        this.timeline.to(this.ids.popup[0], {opacity: 0, duration: 1}, start)
        this.timeline.to(this.ids.popup[1], {opacity: 0, duration: 1}, '<')
        this.timeline.to(this.ids.popup[2], {opacity: 0, duration: 1}, '<')
        this.timeline.to(this.ids.detail, {opacity: 0, duration: 1}, '<')
    }
}