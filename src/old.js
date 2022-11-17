// Animation Project

const gsap = require('gsap')
gsap.registerPlugin(ScrollTrigger); 
//let snap = undefined
/** */  
let snap = {
	snapTo: "labels", // snap to the closest label in the timeline
	duration: {min: 0.2, max: 300}, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
	delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
	ease: "power3.inOut", // the ease of the snap animation ("power3" by default)
} 
/** */
let t0 = gsap.timeline({
	scrollTrigger:{
		trigger: '[data-section-id="6270e0341c0517246a68a4a7"]',
		start: "top top",
		end: "bottom top",
		//pin: true,
		//markers: true,
		scrub: .5,
		//fastScrollEnd: true,
		snap: snap
	}
})
let getTimeLine = function(id){
	let tl = gsap.timeline({
		scrollTrigger:{
			trigger: id,
			start: "top top",
			end: "bottom top",
			markers: true,
			//pin: true,
			//pinnedContainer: true,
			scrub: 0.5,
			snap: snap
		}
	})
	return tl;
}
let master = gsap.timeline({
	scrollTrigger:{
		trigger: '#collection-624c0388b345a128a8a8816b',
		start: "top top",
		end: "bottom top",
		//toggleActions: "play none none reverse",
		//markers: true,
		//pin: true,
		//pinnedContainer: true,
		scrub: .5
		//snap: snap
	}
})
// Intro
let headId = '[data-section-id="6270e0341c0517246a68a4a7"] '
//let timeline = getTimeLine('[data-section-id="6270e0627c9d9321d88a3115"]')
let highId = '[data-section-id="6270e0627c9d9321d88a3115"] '
//let timeline = getTimeLine('.sections')
let timeline = getTimeLine(highId)
// Rain
let rainId = '[data-section-id="6270e30c9b5782057580e754"] ';
let rain = getTimeLine('[data-section-id="6270e30c9b5782057580e754"]')
let t3 = getTimeLine('[data-section-id="6270e39bcaa0567ecdcc9670"]')
let t4 = getTimeLine('[data-section-id="6270e407bd6bb05d07a2334b"]')

let dive1 = getTimeLine('[data-section-id="627cdbd381dc15199d521819"]')
let dive2 = getTimeLine('[data-section-id="627cdc01871e2b3a35a54624"]')
let dive3 = getTimeLine('[data-section-id="627cdc22059da7196e676e0d"]')
let fish = getTimeLine('[data-section-id="627cfaa8a66b185bd6be7fc0"]')

let map = getTimeLine('[data-section-id="627cf4f46c7c7c7b1ad5ba87"]')
let evidenciaSummer = getTimeLine('[data-section-id="627cef9b2760cd09485b3e11"]')
let evidencia = getTimeLine('[data-section-id="627388af7393be40eb185fe3"]')
let evidenciaWinter = getTimeLine('[data-section-id="627a619916f18902fb0b9d01"]')

// cloud
let cloud = gsap.timeline({repeat: 3, repeatDelay: 0});
cloud.to('#block-yui_3_17_2_1_1652345046515_31502', {x: '-1000vw', duration: 1}, 0)
master.add(cloud)
// a2 2a-background
t0.addLabel("title")
t0.from('#block-yui_3_17_2_1_1649323123247_16515', { y: '25%', duration: 1  },0)
// a3 3a-detail
t0.from('#block-yui_3_17_2_1_1649667699761_18917', { y: '15%', duration: 1  },'<')
// a4 4a-ground
t0.from('#block-yui_3_17_2_1_1652343551372_28989', { y: '10%', duration: 1  },'<')
t0.from('#block-yui_3_17_2_1_1649752046807_9796', { y: '10%', duration: 1  },'<')

timeline.addLabel("immersion-1")
// a2 2a-background
timeline.to('#block-yui_3_17_2_1_1649323123247_16515', { y: '50%', duration: 2  },0)

// a3 3a-detail
timeline.to('#block-yui_3_17_2_1_1649667699761_18917', { y: '40%', duration: 2  },'<')
// a4 4a-ground
timeline.to('#block-yui_3_17_2_1_1649752046807_9796', { y: '12%', duration: 2  },'<')
timeline.to('#block-yui_3_17_2_1_1652343551372_28989', { y: '12%', duration: 2  },'<')

// a2 2a-background
//let rain = '[data-section-id="6270e30c9b5782057580e754"]'
let highplaceObjects = ['#block-yui_3_17_2_1_1649323123247_16515', //background
	'#block-yui_3_17_2_1_1649667699761_18917', //detail
	'#block-yui_3_17_2_1_1649752046807_9796',  // ground
	'#block-yui_3_17_2_1_1652343551372_28989'] // ground

rain.to(highplaceObjects, { y: '100%', duration: 1  },0)
///////////////

// rain
let rainObjects = ['#block-yui_3_17_2_1_1649668149073_10547', // background
	'#block-yui_3_17_2_1_1649668149073_11596', // detail
	'#block-yui_3_17_2_1_1649752046807_11326'] // rain
//timeline.fromTo(rainObjects, {y: '100%', duration: 1}, {y: '50%'}, '<')
rain.from('#block-yui_3_17_2_1_1649758477534_9277', { opacity: 0, duration: 1  }, '<')
// 1b-cloud
rain.from('#block-yui_3_17_2_1_1652343551372_44060', { x: '400%', duration: 1  },'<')
rain.from('#block-yui_3_17_2_1_1649668149073_9495', { x: '400%', duration: 1  },'<')
// b2 2b-background
rain.from(rainObjects, { y: '50%', duration: 1  },'>')
rain.addLabel('immersion-2')
// OUT 
rain.to('#block-yui_3_17_2_1_1649758477534_9277', { opacity: 0, duration: 1  },'>')
// 1b-cloud
rain.to('#block-yui_3_17_2_1_1652343551372_44060', { x: '200%', duration: 1  },'<')
rain.to('#block-yui_3_17_2_1_1649668149073_9495', { x: '50%', duration: 2  },'<')
// b2 2b-background
rain.to('#block-yui_3_17_2_1_1649668149073_10547', { y: '40%', duration: 2  },'<')
// b3 3b-detail
rain.to('#block-yui_3_17_2_1_11596', { y: '40%', duration: 2  },'<')
// b4 4b-ground
rain.to('#block-yui_3_17_2_1_1649752046807_11326', { y: '12%', duration: 2  },'<')
// 1b-cloud
//t3.to('#block-yui_3_17_2_1_1649668149073_9495', { x: '400%', duration: 1  },0)
//t3.to('#block-yui_3_17_2_1_1652343551372_44060', { x: '400%', duration: 1  },'<')

t3.to(rainObjects,{ y: '100%', duration: 1  },0)
// C
/////////////////////
let t3Objects = ['#block-yui_3_17_2_1_1649837773162_9875', // background
	'#block-yui_3_17_2_1_1649837773162_11847', // detail
	'#block-yui_3_17_2_1_1649837773162_13849', // detail
	'#block-yui_3_17_2_1_1649837773162_15910'] // ground
t3.from(t3Objects,{ y: '100%', duration: 1  },'<')
t3.addLabel("immersion-3")
// C Out
t3.to('#block-yui_3_17_2_1_1649837773162_9875', { y: '25%', duration: 1  },'>')  
// c3 3c-detail
t3.to('#block-yui_3_17_2_1_1649837773162_11847', { y: '20%', duration: 1  },'<')
t3.to('#block-yui_3_17_2_1_1649837773162_13849', { y: '15%', duration: 1  },'<')
// c4 c4-ground
t3.to('#block-yui_3_17_2_1_1649837773162_15910', { y: '12%', duration: 1  },'<')
// C Out
// c2 2c-background
t4.to(t3Objects, { y: '100%', duration: 1  },0)
//////////////////
// D
t4.from('#block-yui_3_17_2_1_1651049598100_17242', { y: '100%', duration: 1  },'>')
// cloud
t4.from('#block-yui_3_17_2_1_1652343551372_44060', { x: '100%', duration: 1  },'<')
t4.from('#block-yui_3_17_2_1_1651049598100_21026', { y: '100%', duration: 1  },'<') 
t4.from('#block-yui_3_17_2_1_1651049598100_25001', { y: '100%', duration: 1  },'<')
t4.from('#block-yui_3_17_2_1_1651049598100_28195', { y: '100%', duration: 1  },'<')
t4.addLabel("immersion-4")
// D out
t4.to('#block-yui_3_17_2_1_1651049598100_17242', { y: '100%', duration: 2  },2)
// cloud
t4.to('#block-yui_3_17_2_1_1652343551372_44060', { x: '400%', duration: 2  },'<')
t4.to('#block-yui_3_17_2_1_1651049598100_21026', { y: '40%', duration: 2  },'<') 
t4.to('#block-yui_3_17_2_1_1651049598100_25001', { y: '100%', duration: 2  },'<')
t4.to('#block-yui_3_17_2_1_1651049598100_28195', { y: '100%', duration: 2  },'<')

/// discovery dive
///

let detail_A = [
	'#block-yui_3_17_2_1_1652345046515_33277',
	'#block-yui_3_17_2_1_1652346524875_49576',
	'#block-yui_3_17_2_1_1652346524875_58512',
	'#block-yui_3_17_2_1_1652346524875_62860',
	'#block-yui_3_17_2_1_1652346524875_53987'
]
let detail_B = [
	'#block-yui_3_17_2_1_1652345046515_34165',
	'#block-yui_3_17_2_1_1652346524875_73750',
	'#block-yui_3_17_2_1_1652346524875_78112',
	'#block-yui_3_17_2_1_1652346524875_82470'
]
let detail_C = [
	'#block-yui_3_17_2_1_1652345046515_35068',
	'#block-yui_3_17_2_1_1652346524875_104368',
	'#block-yui_3_17_2_1_1652346524875_86801',
	'#block-yui_3_17_2_1_1652346524875_95680',
	'#block-yui_3_17_2_1_1652346524875_91317',
	'#block-yui_3_17_2_1_1652346524875_100024'
]

let diveObjects = ['#block-yui_3_17_2_1_1652345046515_30615', // ground
	'#block-yui_3_17_2_1_1652345046515_29670', // background
	'#block-yui_3_17_2_1_1652345046515_32389', // text
	'#block-yui_3_17_2_1_1652345046515_33277', // ground
	'#block-yui_3_17_2_1_1652345046515_34165', // ground
	'#block-yui_3_17_2_1_1652345046515_35068' // cediment
]
// cloud
//dive1.from('#block-yui_3_17_2_1_1652345046515_31502', { x: '100%', duration: 1 }, '<')
//
dive1.fromTo(diveObjects, { y: '100%'  },{ y: '40%', duration: 1  },0)
dive1.fromTo(detail_A, { y: '100%'  },{ y: '40%', duration: 1  },'<')
dive1.fromTo(detail_C, { y: '100%'  },{ y: '40%', duration: 1  },'<')
dive1.fromTo(detail_B, { y: '100%'  },{ y: '40%', duration: 1  },'<')
dive1.to(diveObjects,{ y: '0%', duration: 1  },'>')
dive1.to(detail_A,{ y: '0%', duration: 1  },'<')
dive1.to(detail_B,{ y: '0%', duration: 1  },'<')
dive1.to(detail_C,{ y: '0%', duration: 1  },'<')
dive1.to('#block-yui_3_17_2_1_1651049598100_21026', { y: '0%', duration: 1  },'<')
// In 
dive1.from(detail_A, { opacity: 0, duration: 1 },0);

// Move
let px = "-"+1920/4+"px";
dive1.to(diveObjects, { x: px, duration: 1  },'>')
dive1.to('#block-yui_3_17_2_1_1651049598100_21026', {x: '-600px', duraction: 1},'<')
dive1.to(detail_A, { x: px, duration: 1  },'<')
dive1.to(detail_B, { x: px, duration: 1  },'<')
dive1.to(detail_C, { x: px, duration: 1  },'<')

dive1.to('#block-yui_3_17_2_1_1652346524875_58512', { x: px, duration: 1  },'<')
dive1.addLabel('dive-1')
// out 
dive2.to(detail_A, { opacity: .5, duration: 2 }, 0);


/// dive1.to('#block-yui_3_17_2_1_1652346524875_73750', { opacity: 1, duration: 2 }, '<');
//dive1.to('#block-yui_3_17_2_1_1652346524875_82470', { opacity: 1, duration: 2 }, '<');
/////////
// Int 
dive2.from(detail_B, { opacity: 0, duration: 1 }, 0);
/// Move
px = "-"+2*1920/4+"px";
dive2.to(diveObjects, { x: px, duration: 1  },0)
dive2.to('#block-yui_3_17_2_1_1651049598100_21026', {x: '-400px', duraction: 1},'<')

dive2.to(detail_A, { x: px, duration: 1  },'<')
dive2.to(detail_B, { x: px, duration: 1  },'<')
dive2.to(detail_C, { x: px, duration: 1  },'<')

dive2.to('#block-yui_3_17_2_1_1652346524875_58512', { x: px, duration: 1  },'<')
dive2.addLabel('dive-2')
// out 
dive3.to(detail_B, { opacity: .5, duration: 0 }, 0);
///
// In
dive3.from(detail_C, { opacity: 0, duration: 1 }, 0);
// Move
px = "-"+3*1920/4+"px";
dive3.to(diveObjects, { x: px, duration: 1  },0)
dive3.to('#block-yui_3_17_2_1_1651049598100_21026', {x: '-300px', duraction: 1},'<')

dive3.to(detail_A, { x: px, duration: 1  },'<')
dive3.to(detail_B, { x: px, duration: 1  },'<')
dive3.to(detail_C, { x: px, duration: 1  },'<')

dive3.to('#block-yui_3_17_2_1_1652346524875_58512', { x: px, duration: 1  },'<')
dive3.addLabel('dive-2')
// out 

// dive3.to('', { opacity: 0, duration: 1 }, '>');
// dive3.to('', { opacity: 0, duration: 1 }, '<');
// dive3.to('', { opacity: 0, duration: 1 }, '<');



/// Fish Stories
// big lake fishes
fish.set(t3Objects, { opacity: 0 })
fish.set(rainObjects, { opacity: 0 })
fish.set(highplaceObjects, { opacity: 0 })
fish.set('#block-yui_3_17_2_1_1649668149073_9495', { opacity: 0 })
fish.set('#block-yui_3_17_2_1_1652343551372_39714', { opacity: 0 })
fish.to(diveObjects, { y: '-100%', duration: 1  },0)
fish.to('#block-yui_3_17_2_1_1651049598100_21026', {y: '-100%', duration: 1}, '<')
fish.to(detail_A, { y: '-100%', duration: 1  },'<')
fish.to(detail_C, { y: '-100%', duration: 1  },'<')
fish.to(detail_B, { y: '-100%', duration: 1  },'<')
// cloud
//fish.to('#block-yui_3_17_2_1_1652345046515_31502', { y : '-100%', duration: 1 }, '<')
/** */
fish.from('#block-yui_3_17_2_1_1652345046515_35962', { y: '100%', duration: 1  },0)
fish.addLabel('fish-1')
fish.from('#block-yui_3_17_2_1_1652345046515_37373', { y: '100%', duration: 1  },'>')
fish.addLabel('fish-2')
fish.from('#block-yui_3_17_2_1_1652345046515_38276', { y: '100%', duration: 1  },'>')
fish.addLabel('fish-3')
fish.from('#block-yui_3_17_2_1_1652345046515_39163', { y: '100%', duration: 1  },'>')
fish.addLabel('fish-4')
fish.from('#block-yui_3_17_2_1_1652345046515_40070', { y: '100%', duration: 1  },'>')
fish.addLabel('fish-5')
fish.from('#block-yui_3_17_2_1_1652345046515_40977', { y: '100%', duration: 1  },'>')
fish.addLabel('fish-6')
fish.from('#block-yui_3_17_2_1_1652345046515_41881', { y: '100%', duration: 1  },'>')
fish.addLabel('fish-7')
fish.from('#block-yui_3_17_2_1_1652345046515_42938', { y: '100%', duration: 1  },'>')
fish.addLabel('fish-8')
// OUT
fish.to('#block-yui_3_17_2_1_1652345046515_35962', { y: '100%', duration: 2  },'>')
fish.to('#block-yui_3_17_2_1_1652345046515_37373', { y: '100%', duration: 2  },'<')
fish.to('#block-yui_3_17_2_1_1652345046515_38276', { y: '100%', duration: 2  },'<')
fish.to('#block-yui_3_17_2_1_1652345046515_39163', { y: '100%', duration: 2  },'<')
fish.to('#block-yui_3_17_2_1_1652345046515_40070', { y: '100%', duration: 2  },'<')
fish.to('#block-yui_3_17_2_1_1652345046515_40977', { y: '100%', duration: 2  },'<')
fish.to('#block-yui_3_17_2_1_1652345046515_41881', { y: '100%', duration: 2  },'<')
fish.to('#block-yui_3_17_2_1_1652345046515_42938', { y: '100%', duration: 2  },'<')
// sweden map
map.from('#block-yui_3_17_2_1_1652343551372_85515', { opacity: 0, duration: 1 }, 0)
// big top circle
map.from('#block-yui_3_17_2_1_1652343551372_96363', { opacity: 0, duration: 1 }, '<')
// end thini majing
map.from('#block-yui_3_17_2_1_1652343551372_91847', { opacity: 0, duration: 1 }, '<')
map.addLabel('sweden-map')
// OUT
// sweden map
map.to('#block-yui_3_17_2_1_1652343551372_85515', { opacity: .5, duration: 2 }, '>')
// big top circle
map.to('#block-yui_3_17_2_1_1652343551372_96363', { opacity: .5, duration: 2 }, '<')
// end thini majing
map.to('#block-yui_3_17_2_1_1652343551372_91847', { opacity: .5, duration: 2 }, '<')
// sweden map
evidenciaSummer.to('#block-yui_3_17_2_1_1652343551372_85515', { opacity: 0, duration: 1 }, 0)
// big top circle
evidenciaSummer.to('#block-yui_3_17_2_1_1652343551372_96363', { opacity: 0, duration: 1 }, '<')
// end thini majing
evidenciaSummer.to('#block-yui_3_17_2_1_1652343551372_91847', { opacity: 0, duration: 1 }, '<')


// Local Evidencia
// summer

evidenciaSummer.from('#block-yui_3_17_2_1_1652343551372_100702', { y: '100%', duration: 1 }, 0)
evidenciaSummer.to('#block-yui_3_17_2_1_1652343551372_100702', { x: '0%', duration: 3 }, '<')
evidencia.addLabel("evidencia-summer")
evidencia.to('#block-yui_3_17_2_1_1652343551372_100702', { x: '100%', duration: 1 }, '<')

// Local Evidencia
evidencia.from('#block-yui_3_17_2_1_1651737837356_22034', { opacity: 0, duration: 1 }, '<')
evidencia.from('#block-yui_3_17_2_1_1652343551372_64049', { y: '100%', duration: 1 }, '<')
evidencia.from('#block-yui_3_17_2_1_1651737992666_17273', { y: '100%', duration: 1 }, '<')
evidencia.from('#block-yui_3_17_2_1_1651737992666_15424', { y: '100%', duration: 1 }, '<')
evidencia.from('#block-yui_3_17_2_1_1651737992666_16345', { y: '100%', duration: 1 }, '<')

evidencia.from('#block-yui_3_17_2_1_1652343551372_53148', { y: '100%', duration: 1 }, '<')
evidencia.from('#block-yui_3_17_2_1_1652343551372_57526', { y: '100%', duration: 1 }, '<')
evidencia.addLabel("evidencia-1")
evidencia.to('#block-yui_3_17_2_1_1652343551372_64049', { x: '0%', duration: 3 }, '<')
evidencia.to('#block-yui_3_17_2_1_1651737992666_17273', { x: '0%', duration: 3 }, '<')
evidencia.to('#block-yui_3_17_2_1_1651737992666_15424', { x: '0%', duration: 3 }, '<')
evidencia.to('#block-yui_3_17_2_1_1651737992666_16345', { x: '0%', duration: 3 }, '<')


// Evidencia Winter
evidenciaWinter.to('#block-yui_3_17_2_1_1651737992666_17273', { x: '-100%', duration: 1 }, 0)
evidenciaWinter.to('#block-yui_3_17_2_1_1652343551372_64049', { x: '-100%', duration: 1 }, '<')

evidenciaWinter.to('#block-yui_3_17_2_1_1651737992666_15424', { x: '-100%', duration: 1 }, '<')
evidenciaWinter.to('#block-yui_3_17_2_1_1651737992666_16345', { x: '-100%', duration: 1 }, '<')
// out 
//evidenciaWinter.from('#viz-lake-thick', { x: '100%', duration: 1 }, 0)
evidenciaWinter.from('#viz-anim-lake',  { y: '100%', duration: 1 }, '<');
evidenciaWinter.from('#block-yui_3_17_2_1_1652183716602_24112', { y: '100%', duration: 1  }, '<')
evidenciaWinter.from('#block-yui_3_17_2_1_1652183716602_25206', { y: '100%', duration: 1  }, '<')
evidenciaWinter.from('#block-yui_3_17_2_1_1652183716602_26257', { y: '100%', duration: 1  }, '<')
evidenciaWinter.from('#block-yui_3_17_2_1_1652183716602_27299', { y: '100%', duration: 1  }, '<')
evidenciaWinter.from('#block-yui_3_17_2_1_1652183716602_28351', { y: '100%', duration: 1  }, '<')
evidenciaWinter.addLabel("evidecia-2")
// in place
evidenciaWinter.to('#block-yui_3_17_2_1_1652183716602_24112', { y: '0%', duration: 3  }, '>')
evidenciaWinter.to('#block-yui_3_17_2_1_1652183716602_25206', { y: '0%', duration: 3  }, '<')
evidenciaWinter.to('#block-yui_3_17_2_1_1652183716602_26257', { y: '0%', duration: 3  }, '<')
evidenciaWinter.to('#block-yui_3_17_2_1_1652183716602_27299', { y: '0%', duration: 3  }, '<')
evidenciaWinter.to('#block-yui_3_17_2_1_1652183716602_28351', { y: '0%', duration: 3  }, '<')


master.add(timeline);
master.add(rain);
master.add(t3);
master.add(t4);
master.add(dive1);
master.add(dive2);
master.add(dive3);
master.add(fish);
master.add(map);
master.add(evidenciaSummer);
master.add(evidencia);
master.add(evidenciaWinter);

