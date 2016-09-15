function confirmEnding(str, target) {
  // The substring() method returns a subset of a string between one index and
  // another, or through the end of the string.
  return str.substring(str.length - target.length) == target;
}

// Test data
console.log(confirmEnding("Bastian", "n"));
console.log(confirmEnding("Connor", "n"));
console.log(confirmEnding("He has to give me a new name", "name"));
console.log(confirmEnding("Open sesame", "same"));
console.log(confirmEnding("Open sesame", "pen"));

// Experimenting
console.log("Open sesame".length);
console.log("same".length);

// "Never give up and good luck will find you."
// -- Falcor

// there is no spoon
