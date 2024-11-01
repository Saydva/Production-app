// testing functions to build data in arr that will be then rendered with React

let delKyes = ["piece", "subpiecec", "operations"];

let obj = {
  partName: "No Name",
  stTime: "No time",
  piecec: [],
  subpiecec: [],
  category: [],
  option: [],
  operations: [],
};
console.log(obj);

function deleteObjKeys(obj, arr) {
  arr.forEach((element) => {
    delete obj[element];
  });
}

deleteObjKeys(obj, delKyes);

let newObj = obj;
console.log(newObj);
