// RollDice
// Rolls a dice given a number of sides and a number of dice

// Main entry point
module.exports.function = function rollDice(numDice, gameName, playerNum, numSides) {

  var sum = 0;
  var mul = 1;
  var sub = 0;
  var result = [];

  for (var i = 0; i < numDice; i++) {
    var roll = Math.ceil(Math.random() * numSides);
    result.push(roll);
    sum += roll;
    if( i == 0){
      sub = roll
    }
    else{
      sub -= roll
    }
    mul *= roll;
  }

  // RollResult
  return {
    sum: sum, // required Sum
    mul: mul,
    sub: sub,
    gameName: gameName,
    playerNum: playerNum,
    roll: result // required list Roll
  }
}
