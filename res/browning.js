let imersion = require('./browning/imersion.json');
let discovery = require('./browning/discovery.json');
let fishes = require('./browning/fishes.json');
let evidence = require('./browning/evidence.json');
exports.acts = {
    imersion: imersion,
    discovery: discovery,
    fishes: fishes,
    evidence: evidence
};
exports.actsID = Object.keys(exports.acts)