var getRandomWord = function (object) {
  var propArray = Object.keys(object);
  var randomProp = propArray[Math.floor((Math.random() * propArray.length))];
  return {word: randomProp};
}

module.exports.gRWord = getRandomWord;
