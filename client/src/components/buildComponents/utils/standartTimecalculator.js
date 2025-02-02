export function standartTimeCalc(obj) {
    let arr = [];
  
    function iterateObject(obj, arr) {
      for (let key in obj) {
        if (typeof obj[key] === "object" && obj[key] !== null) {
          iterateObject(obj[key], arr);
        } else {
          if (key == "stTime") {
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
  }
  
  
//   export function incrementerObj(object, part, n) {
//     for (let i = 0; i < n; i++) {
//       part.push(object);
//     }
//   }