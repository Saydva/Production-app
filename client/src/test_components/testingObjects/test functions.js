// import { standartTimeCalc } from "../../components/build_components/exeternalFunctions";

let obj = {
  _id: {
    $oid: "6761566cbb71c480501b8029",
  },
  partName: "EUMSA54051M-C",
  partStTime: 1.064,
  piecec: [
    {
      _id: "6761511808fb682d2c58b5a3",
      partName: "UPC-XA66-175S",
      partStTime: 0,
      category: [
        {
          _id: "676150ec08fb682d2c58b599",
          name: "balenie",
          value: "balenie",
          __v: 0,
        },
      ],
      option: [],
      operation: [],
      __v: 0,
    },
  ],
  subPiecec: [
    {
      _id: "676151fb08fb682d2c58b5c6",
      partName: "SA54051M-7S",
      partStTime: 0.48,
      piecec: [
        {
          _id: "6761514808fb682d2c58b5ae",
          partName: "NPPSTXKM-1",
          partStTime: 0,
          category: [
            {
              _id: "676150ba08fb682d2c58b593",
              name: "doska",
              value: "kabliky",
              __v: 0,
            },
          ],
          option: [],
          operation: [],
          __v: 0,
        },
        {
          _id: "6761515508fb682d2c58b5b0",
          partName: "WWUM05026-2",
          partStTime: 0,
          category: [
            {
              _id: "676150d908fb682d2c58b595",
              name: "káblik s konektorom",
              value: "kablik",
              __v: 0,
            },
          ],
          option: [],
          operation: [],
          __v: 0,
        },
        {
          _id: "6761516e08fb682d2c58b5bb",
          partName: "5396-A1-1",
          partStTime: 0,
          category: [
            {
              _id: "676150e308fb682d2c58b597",
              name: "pružinky",
              value: "pružinky",
              __v: 0,
            },
          ],
          option: [],
          operation: [],
          __v: 0,
        },
        {
          _id: "676150a708fb682d2c58b589",
          partName: "SCAPAC556",
          partStTime: 0,
          category: [
            {
              _id: "6761508787deb33ad688afc9",
              name: "páska",
              value: "33m1k",
              __v: 0,
            },
          ],
          option: [],
          operation: [],
          __v: 0,
        },
      ],
      category: [],
      operation: [
        {
          name: "Assembly",
          time: 0.169,
        },
        {
          name: "Hand Insertion",
          time: 0.16,
        },
        {
          name: "Solder Inspection",
          time: 0.16,
        },
      ],
      __v: 0,
    },
  ],
  operation: [
    {
      name: "packing",
      time: 0.292,
    },
    {
      name: "ft",
      time: 0.292,
    },
  ],
  __v: 0,
};

// console.log(standartTimeCalc(obj));

const objtoman = {
  name: [],
};

let n = 6;
let objecto = { name: "dodo" };
function incrementerObj(object, part, n) {
  for (let i = 0; i <= n; i++) {
    part.push(object);
  }
}

incrementerObj(objecto, objtoman.name, n);
console.log(objtoman);
