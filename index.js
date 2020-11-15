let myArray = [];

function seq(requested_length) {
  if (requested_length < 0) {
    throw new RangeError("Must not be negative");
  }

  for (var i = 0; i < requested_length; i++) {
    myArray.push(i);
  }

  return myArray;
}

module.exports = { seq };