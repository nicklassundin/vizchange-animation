let immersion = require('./browning/immersion.json');
let discovery = require('./browning/discovery.json');
let fishes = require('./browning/fishes.json');
let evidence = require('./browning/evidence.json');
let menu = require('./browning/menu.json');
exports.acts = {
    immersion: immersion,
    discovery: discovery,
    fishes: fishes,
    evidence: evidence,
    menu: menu,
};
exports.actsID = Object.keys(exports.acts)