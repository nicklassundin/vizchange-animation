let imersion = require('./browning/imersion.json');
let discovery = require('./browning/discovery.json');
let fishes = require('./browning/fishes.json');
exports.acts = {
    imersion: imersion,
    discovery: discovery,
    fishes: fishes,
};
exports.actsID = Object.keys(exports.acts)