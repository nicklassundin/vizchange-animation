// Animation Project
// TODO webpack this to client


// or get other plugins:
import ScrollTrigger from "gsap/ScrollTrigger";
import Draggable from "gsap/Draggable";
export const {Phrase} = require('../phrase.js')
export const {Imersive} = require('./imersive');
export const {Discovery} = require('./discovery');
export const {Fishes} = require('./fishes');

export const {Evidence} = require('./evidence');

window.Imersive = Imersive;
window.Discovery = Discovery;
window.Fishes = Fishes;
window.Evidence = Evidence;

