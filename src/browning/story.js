// Animation Project
// TODO webpack this to client

import gsap from "gsap";

// or get other plugins:
import ScrollTrigger from "gsap/ScrollTrigger";
import Draggable from "gsap/Draggable";

window.onbeforeunload = function () {
	window.scrollTo(0, 0);
}

const {Phrase} = require('../phrase.js')
console.log(Phrase)
gsap.registerPlugin(ScrollTrigger);
window.addEventListener('load', function () {
	let snap = {
		snapTo: "labels", // snap to the closest label in the timeline
		directional: true,
		duration: {min: 5, max: 30}, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
		delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
		ease: "power3.inOut", // the ease of the snap animation ("power3" by default)
		onComplete: (value) => {
			console.log(value)
		}
	}

	let getTimeLine = function(id){
		let tl = gsap.timeline({
			scrollTrigger:{
				trigger: id,
				start: "top center",
				end: "bottom center",
				//markers: true,
				//pin: true,
				//pinnedContainer: true,
				scrub: 0.5,
				snap: snap
			}
		})
		return tl;
	}
	let ballad = new Phrase('#story', 'master')
	let master = ballad.timeline

	let highPhrase = new Phrase('#high', 'title_horizontal','#a3', '#a2', '#a1')
	highPhrase.addTitle()
	highPhrase.addHorizontalOut()
	let timeline = highPhrase.timeline


	let rainPhrase = new Phrase( '#rain', 'landscape', '#b4', '#b2', '#b1')
	rainPhrase.addHorizontal()
	let rain = rainPhrase.timeline

	let mudPhrase = new Phrase( '#mud', 'landscape', '#c1', '#c4', '#c2')
	mudPhrase.addHorizontal();
	let mud = mudPhrase.timeline

	let lakePhrase = new Phrase( '#lake', 'landscape', '#d1', '#d3', '#d2', '#bg2')
	lakePhrase.addLakeAlign();
	let lake = lakePhrase.timeline
	/*
	let lake = getTimeLine('#lake');
	lake.to("#d1", { y: '-10%', duration: 1  },'>')
	lake.to('#d3', { y: '-20%', duration: 1  },'<')
	lake.to('#d2', { y: '-20%', x: '-15%', duration: 2 },'<')
	lake.from('#bg2', { opacity: 0, duration: 1}, '>')
	lake.to('#d2', { opacity: 0, duration: 1}, '>')

	 */
	//lake.from("#d1", {y: '20%', x: '22.3%', duration: 2}, '<')

	let dive_yester = new Phrase('#lake', 'landscape', '#d1', '#bg2', '#fg1', '#fg2', '#fg3', '#title')
	dive_yester.addVertical()
	let dive_yesterday = dive_yester.timeline;
	/*
	let dive_yesterday = getTimeLine('#dive-yesterday');


	dive_yesterday.from("#fg1", {opacity: 0, duration: 1}, 0)
	dive_yesterday.from("#title", {opacity: 0, duration: 1}, 0)


	let diveObjects = ['#d1', '#bg2', '#fg1', '#fg2', '#fg3', '#title']
	dive_yesterday.to(diveObjects, { x: '-50vh'}, '>')

	dive_yesterday.from("#fg1", {opacity: 0, duration: 1}, '<')

	dive_yesterday.to(diveObjects, { x: '-100vh'}, '>')
	 */
	let dive_today = getTimeLine('#dive-today');
	dive_today.from("#fg2", {opacity: 0, duration: 1}, 0)

	let dive_tomorrow = getTimeLine('#dive-tomorrow')

	dive_tomorrow.from("#fg3", {opacity: 0, duration: 1}, 0)
	//master.add(cloud)
	//master.addLabel('title')
	//master.add(t0, 0)
	//master.addLabel('high')
	master.add(timeline, '>')
	//master.addLabel('rain')
	master.add(rain, '>')
	//master.addLabel('mud')
	master.add(mud, '>')
	//master.addLabel('lake')
	master.add(lake, '>')

	master.add(dive_yesterday, '>')

	master.add(dive_today, '>')

	master.add(dive_tomorrow, '>')

	console.log(master.labels)
	ScrollTrigger.refresh()
})
