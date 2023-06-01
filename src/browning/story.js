// Animation Project
// TODO webpack this to client
export const {Phrase} = require('../phrase.js')
export const {Immersive} = require('./immersive');
export const {Discovery} = require('./discovery');
export const {Fishes} = require('./fishes');

export const {Evidence} = require('./evidence');

export const {Menu} = require('./menu');
window.Immersive = Immersive;
window.Discovery = Discovery;
window.Fishes = Fishes;
window.Evidence = Evidence;
window.Menu = Menu;

