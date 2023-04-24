console.log("Menu")

let today_menu = ['#today_text']
let yest_menu = ['#yesterday_text']
let tom_menu = ['#tomorrow_text']


let autumn = []

let spring = []
let winter = []

let today = []
let today_autumn = ['.autumn today']
let today_spring = ['.spring today']
let today_summer = ['.summer today']
let today_winter = ['.winter today']

let yest = []
let yest_autumn = ['.autumn yesterday']
let yest_spring = ['.spring yesterday']
let yest_summer = ['.summer yesterday']
let yest_winter = ['.winter yesterday']
let tom = []
let tom_autumn = ['.autumn tomorrow'];
let tom_spring = ['.spring tomorrow'];
let tom_summer = ['.summer tomorrow'];
let speed = 0.3;
let delay = 0;
let menu = gsap.timeline({repeat: 1000});


let getTime  = function (time_menu) {

	let tl = gsap.timeline({ paused: true });
	let pause = () => {
		tl.pause()
	}
	tl.addLabel('entry',0)
	tl.from(time_menu, { opacity: 0, duration: speed }, 'entry')

	//tl.to(time_menu, { opacity: 0, duration: speed }, '>')
	return tl;
}

let yest_tl = getTime(yest_menu)
let today_tl = getTime(today_menu)
let tom_tl = getTime(tom_menu)


let tl_autumn = gsap.timeline();
let tl_spring = gsap.timeline();
let tl_summer = gsap.timeline();
let tl_winter = gsap.timeline();
let time = gsap.timeline({repeat: 1000});

var current = tl_summer;
time.addLabel('yesterday', 0)
time.from(yest, { opacity: 0, duration: speed, onComplete: () => {
	tom_tl.reverse();
	yest_tl.play('entry')
	time.pause()}}, "yesterday")


time.addLabel('today', 10)
time.from(today, { opacity: 0, duration: speed, onComplete: () => {
	yest_tl.reverse();
	today_tl.play('entry')
	time.pause()}}, "today")


time.addLabel('tomorrow', 20)
time.from(tom, { opacity: 0, duration: speed, onComplete: () => {
	today_tl.reverse();
	tom_tl.play('entry')
	time.pause()}}, "tomorrow")

let addSeason = function(tl, id, season, yest_season, today_season, tommorrow_season, yesterday, today, tommorrow){
	//tl.add(time)

	let pause = () => {
		current = tl;
		tl.pause();
		menu.pause();
	}
	// tl.set(today, { opacity: 0 })
	//tl.set(today_season, { opacity: 0 })

	// Season
	//tl.addLabel(id)
	tl.addLabel('yesterday')
	tl.from(season, { opacity: 0, duration: speed }, '<')
	tl.from(yest_season, { opacity: 0, duration: speed, onComplete: pause }, '<')
	tl.to(yest_season, { opacity: 0, duration: speed }, '>'+delay)

	tl.addLabel('today')
	tl.from(today_season, { opacity: 0, duration: speed, onComplete: pause }, '<')
	tl.to(today_season, { opacity: 0, duration: speed }, '>'+delay)

	tl.addLabel('tomorrow')
	tl.from(tommorrow_season, { opacity: 0, duration: speed, onComplete: pause }, '<')
	tl.to(tommorrow_season, { opacity: 0, duration: speed }, '>'+delay)

	tl.to(season, { opacity: 0, duration: speed  }, '<')
	/// End Season
}
// Summer
addSeason(tl_summer,'summer', summer, yest_summer, today_summer, tom_summer)
//autumn
addSeason(tl_autumn, 'autumn', autumn, yest_autumn, today_autumn, tom_autumn);
// Winter
addSeason(tl_winter, 'winter', winter, yest_winter, today_winter, tom_winter);
// Spring
tl_autumn.set('#block-yui_3_17_2_1_1653475289732_2803', {opacity: 1})
addSeason(tl_spring, 'spring', spring, yest_spring, today_spring, tom_spring)
// End Spring

menu.addLabel('Summer')
menu.add(tl_summer)
menu.addLabel('Autumn')
menu.add(tl_autumn, "-="+speed)
menu.addLabel('Winter')
menu.add(tl_winter, "-="+speed)
menu.addLabel('Spring')
menu.add(tl_spring, "-="+speed)
