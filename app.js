const _ = require('lodash');

const list = [1,[2,[3,[4]]]];

const newItem = _.flattenDeep(list);

console.log(newItem);