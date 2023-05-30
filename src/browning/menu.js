
const {Phrase} = require("../core/phrase");


export class Menu extends Phrase {
    constructor () {
        super();
        this.speed = 0.3;
        this.timelines = {};
        this.timelines.menu = gsap.timeline();
        this.timelines.time = this.createTimeTimeline()
        this.initSeasons()

        /*
        this.timelines.menu.addLabel('Spring')
        this.timelines.menu.add(this.timelines.spring, "-="+this.speed)
        this.timelines.menu.addLabel('Summer')
        this.timelines.menu.add(this.timelines.summer, "-="+this.speed)
        this.timelines.menu.addLabel('Autumn')
        this.timelines.menu.add(this.timelines.autumn , "-="+this.speed)
        this.timelines.menu.addLabel('Winter')
        this.timelines.menu.add(this.timelines.winter, "-="+this.speed)

         */
        this.current = 'Spring_yesterday';
        this.timelines.menu.seek(this.current)
        // add event listener for mouse click

        // parse coords

        // get all class .menuButton and rescale elements parameter coords each button from size of #title
        let scale = function (el) {
            let title = document.getElementById('title')
            let titleRect = title.getBoundingClientRect()
            let elRect = el.coords.split(',').map(x => parseInt(x))
            let scale = titleRect.width / 980
            let x = (elRect[0] - titleRect[2])
            let y = (elRect[1] - titleRect[3])
            console.log(elRect, scale, elRect.map(x => x*scale))
            el.coords = elRect.map(x => x*scale).join(',')
        }
        let buttons = Object.values(document.getElementsByClassName('menu_button'))
        buttons.forEach(button => {
            scale(button)
        })
        let isActive = () => {
            return this.timelines.menu.isActive() || this.timelines.time.isActive()
        }
        let getTimelines = () => this.timelines;
        let getCurrent = () => this.current;
        let setCurrent = (name) => this.current = name;
        $("#areaArrowRight").on("click", function(e){
            if(isActive()) return false
            e.preventDefault()
            getTimelines().time.reversed(false)
            switch (getTimelines().time.previousLabel()) {
                case 'yesterday':
                    setCurrent(getTimelines().menu.nextLabel());
                    getTimelines().menu.play(getCurrent())
                    getTimelines().time.play('today')
                    break;
                case 'today':
                    setCurrent(getTimelines().menu.nextLabel());
                    getTimelines().menu.play(getCurrent())
                    getTimelines().time.play('tomorrow')
                    break;
                default:
            }
        });
        $("#areaArrowLeft").on("click", function(e){
            if(isActive()) return false
            e.preventDefault();
            getTimelines().time.reversed(true)
            switch (getTimelines().time.previousLabel()) {
                case 'yesterday':
                    break;
                case 'tomorrow':
                    setCurrent(getCurrent().replace('tomorrow', 'today'))
                    getTimelines().menu.play(`${getCurrent()}`)
                    getTimelines().time.resume()
                    break;
                case 'today':
                    setCurrent(getCurrent().replace('today', 'yesterday'))
                    getTimelines().menu.play(`${getCurrent()}`)
                    getTimelines().time.resume()
                    break;
                default:
            }
        })
        $("#springButton").on("click", function(e){
            if(isActive()) return false
            e.preventDefault();
            setCurrent(`Spring_${getTimelines().time.previousLabel()}`)
            getTimelines().menu.play(getCurrent())
        })
        $("#summerButton").on("click", function(e){
            if(isActive()) return false
            e.preventDefault();
            setCurrent(`Summer_${getTimelines().time.previousLabel()}`)
            getTimelines().menu.play(getCurrent())

        })
        $("#autumnButton").on("click", function(e){
            if(isActive()) return false
            e.preventDefault();
            setCurrent(`Autumn_${getTimelines().time.previousLabel()}`)
            getTimelines().menu.play(getCurrent())
        })
        $("#winterButton").on("click", function(e){
            if(isActive()) return false
            e.preventDefault();
            setCurrent(`Winter_${getTimelines().time.previousLabel()}`)
            getTimelines().menu.play(getCurrent())
        })
    }
    'createTimeTimeline' () {
        let today = ['.lake_today']
        let today_text = ['#today_text']
        let tom = ['.lake_tomorrow']
        let tom_text = ['#tomorrow_text']
        let yest = ['.lake_yesterday']
        let yest_text = ['#yesterday_text']


        let time = gsap.timeline();

        time.addLabel('yesterday', this.speed - 0.1*this.speed);
        time.from(yest, { opacity: 0, duration: this.speed }, 0)
        time.from(yest_text, { opacity: 0, duration: this.speed }, 0)
        time.addPause(this.speed)

        time.addLabel('today', 2*this.speed - 0.1*this.speed)
        time.to(yest_text, { opacity: 0, duration: this.speed }, this.speed)
        time.from(today, { opacity: 0, duration: this.speed }, this.speed)
        time.from(today_text, { opacity: 0, duration: this.speed }, this.speed)
        time.addPause(2*this.speed)

        time.addLabel('tomorrow', 3*this.speed - 0.1*this.speed)
        time.to(today_text, { opacity: 0, duration: this.speed }, 2*this.speed)
        time.from(tom, { opacity: 0, duration: this.speed }, 2*this.speed)
        time.from(tom_text, { opacity: 0, duration: this.speed }, 2*this.speed)
        time.addPause(3*this.speed)

        return time;
    }
    initSeasons () {
        let summer = ['.summer']
        let autumn = ['.autumn']
        let spring = ['.spring']
        let winter = ['.winter']

        let today_autumn = ['.autumn_today']
        let today_spring = ['.spring_today']
        let today_summer = ['.summer_today']
        let today_winter = ['.winter_today']

        let yest_autumn = ['.autumn_yesterday']
        let yest_spring = ['.spring_yesterday']
        let yest_summer = ['.summer_yesterday']
        let yest_winter = ['.winter_yesterday']

        let tom_autumn = ['.autumn_tomorrow'];
        let tom_spring = ['.spring_tomorrow'];
        let tom_summer = ['.summer_tomorrow'];
        let tom_winter = ['.winter_tomorrow'];

        /*
        this.timelines['autumn'] = gsap.timeline();
        this.timelines['spring'] = gsap.timeline();
        this.timelines['summer'] = gsap.timeline();
        this.timelines['winter'] = gsap.timeline();

         */

// Spring
        this.addSeason(0, this.timelines.menu, 'Spring', spring, yest_spring, today_spring, tom_spring)
// Summer
        this.addSeason(6*this.speed, this.timelines.menu,'Summer', summer, yest_summer, today_summer, tom_summer)
//autumn
        this.addSeason(12*this.speed, this.timelines.menu, 'Autumn', autumn, yest_autumn, today_autumn, tom_autumn);
// Winter
        this.addSeason(18*this.speed, this.timelines.menu, 'Winter', winter, yest_winter, today_winter, tom_winter);
// End Spring

    }
    addSeason (time, tl, id, season, yest_season, today_season, tomorrow_season) {

        // Season
        /*
        tl.addLabel('hidden', { onComplete: pause }, '<')
         */

        tl.from(season, { opacity: 0, duration: this.speed }, time)
        tl.from(yest_season, { opacity: 0, duration: this.speed }, time)
        tl.addLabel(`${id}_yesterday`, time+this.speed - 0.1*this.speed)
        tl.addPause(time+this.speed)
        tl.to(yest_season, { opacity: 0, duration: this.speed }, time + this.speed)

        tl.from(today_season, { opacity: 0, duration: this.speed }, time + 2*this.speed)
        tl.addLabel(`${id}_today`, time + 3*this.speed - 0.1*this.speed)
        tl.addPause(time + 3*this.speed)
        tl.to(today_season, { opacity: 0, duration: this.speed }, time + 3*this.speed)

        tl.from(tomorrow_season, { opacity: 0, duration: this.speed }, time + 3*this.speed)
        tl.addLabel(`${id}_tomorrow`, time + 4*this.speed - 0.1*this.speed)
        tl.addPause(time + 4*this.speed)
        tl.to(tomorrow_season, { opacity: 0, duration: this.speed }, time +4*this.speed)

        tl.to(season, { opacity: 0, duration: this.speed  }, time + 4*this.speed)
        /// End Season
    }
}
