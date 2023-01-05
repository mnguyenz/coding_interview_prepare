// Shallow Copy
const submitStructure = {
  type: "Submit",
  sale: 1000,
}

const uwStructure = {
  ...submitStructure,
  type: "UW"
}

const uwStructure2 = {
  type: "UW2",
  ...submitStructure,
}

// Deep Copy
const json = JSON.stringify(submitStructure);
const uwStructure3 = JSON.parse(json);
uwStructure3.type = "UW3";

console.log(uwStructure);
console.log(uwStructure.type);
console.log(uwStructure2);
console.log(uwStructure2.type);
console.log(uwStructure3);
console.log(uwStructure3.type);
console.log(submitStructure);