let obj = {
  _id: "675f2f6e704a0ce64660c8b3",
  partName: "EUMSA54051M-C",
  subpiecec: [
    {
      _id: "675f2f32704a0ce64660c8a9",
      partName: "SA54051M-7S",
      piecec: [
        {
          _id: "675f2ec4704a0ce64660c89f",
          partName: "5396-A1-1",
          partStTime: 0,
          category: [],
          option: [
            {
              _id: "675f2d08704a0ce64660c803",
              name: "pružinky",
              value: "kovove",
              __v: 0,
            },
          ],
          operation: [],
          __v: 0,
        },
        {
          _id: "675f2d99704a0ce64660c851",
          partName: "SCAPAC556",
          partStTime: 0,
          category: [],
          option: [
            {
              _id: "675f2d89704a0ce64660c847",
              name: "páska",
              value: " 33m1k",
              __v: 0,
            },
          ],
          operation: [],
          __v: 0,
        },
        {
          _id: "675f2d74704a0ce64660c83d",
          partName: "NPPSTXKM-1",
          partStTime: 0,
          category: [],
          option: [
            {
              _id: "675f2d63704a0ce64660c82b",
              name: "doska",
              value: "doska",
              __v: 0,
            },
          ],
          operation: [],
          __v: 0,
        },
        {
          _id: "675f2d54704a0ce64660c821",
          partName: "WWUM05026-2",
          partStTime: 0,
          category: [],
          option: [
            {
              _id: "675f2d46704a0ce64660c817",
              name: "káblik s konektorom",
              value: "pre rucne spajkovanie",
              __v: 0,
            },
          ],
          operation: [],
          __v: 0,
        },
      ],
      category: [],
      operation: [],
      __v: 0,
    },
  ],
  piecec: [],
  subPiecec: [],
  operation: [],
  __v: 0,
};

function printValues(obj) {
  for (var key in obj) {
    if (typeof obj[key] === "object") {
      if (obj[key] !== 0) {
        printValues(obj[key]);
      }
    } else if (obj[key] !== 0) {
      console.log(obj[key]);
    }
  }
}
console.log(JSON.stringify(printValues(obj)));
