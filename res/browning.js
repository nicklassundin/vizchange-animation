let imersion = require('./browning/imersion.json');
let discovery = require('./browning/discovery.json');
exports.acts = {
    imersion: imersion,
    discovery: discovery
};
exports.actsID = Object.keys(exports.acts)