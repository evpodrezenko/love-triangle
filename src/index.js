/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  var numberLoveTriangles = 0;

  for (var i = 0; i < preferences.length; i++) {
    var a = preferences[i];
    if (a === i+1) { // excludes reference to itself
      continue;
    }
    var b = preferences[a-1];
    var c = preferences[b-1];
    if (c-1 === i) { // return to "a", because man "c" loves man "a"
      numberLoveTriangles++;
    }
  }

  // division by 3 excludes love triangles with combinations of the same elements
  return numberLoveTriangles = numberLoveTriangles / 3; 
};