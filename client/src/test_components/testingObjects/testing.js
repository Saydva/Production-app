// testing functions to build data in arr that will be then rendered with React

let delKyes = ["piece", "subpiecec", "operations"];

let obj = {
  partName: "dodo",
  stTime: 6,
  piecec: [],
  subpiecec: [{ value: "Rocking Chair", label: "Rocking Chair" }],
  category: [{ value: "Armchair", label: "Armchair" }],
  option: [],
  operations: [
    { name: "1", time: 1 },
    { name: "assembly", time: 1.3 },
  ],
};

function deleteObjKeys(obj, arr) {
  arr.forEach((element) => {
    delete obj[element];
  });
}

let arr = [];

function iterateObject(obj, arr) {
  for (let key in obj) {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      iterateObject(obj[key], arr);
    } else {
      if (key == "time") {
        arr.push(obj[key]);
      }
    }
  }
}

iterateObject(obj, arr);
const countStTime = (arr) => {
  let n = 0;
  for (let e of arr) {
    n = n + e;
  }
  return n;
};
console.log(arr);
console.log(countStTime(arr));
