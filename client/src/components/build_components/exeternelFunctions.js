const standartTimeCalc = function (obj) {
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
  // console.log(arr);
  // console.log(countStTime(arr));
  return countStTime(arr);
  // console.log(obj);
};

export default standartTimeCalc;
