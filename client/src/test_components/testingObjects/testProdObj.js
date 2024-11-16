let models = [
  {
    modelName: "Armchair",
    modelType: "Chair",
    subPieces: [
      {
        name: "foot",
        oprations: [
          { name: "cutting", stTime: 0.7 },
          { name: "edging", stTime: 0.4 },
          { name: "finish", stTime: 0.2 },
        ],
      },
      {
        name: "table",
        oprations: [
          { name: "cutting", stTime: 0.5 },
          { name: "edging", stTime: 0.1 },
          { name: "finish", stTime: 0.4 },
        ],
      },
      {
        name: "assembly",
        oprations: [
          { name: "skrewing", stTime: 0.9 },
          { name: "paintning", stTime: 0.2 },
          { name: "finish", stTime: 0.1 },
        ],
      },
    ],
  },
  {
    modelName: "Rocking Chair",
    modelType: "Chair",
    subPieces: [
      {
        name: "foot",
        oprations: [
          { name: "cutting", stTime: 0.6 },
          { name: "edging", stTime: 0.5 },
          { name: "finish", stTime: 0.2 },
        ],
      },
      {
        name: "table",
        oprations: [
          { name: "cutting", stTime: 0.2 },
          { name: "edging", stTime: 0.1 },
          { name: "finish", stTime: 0.4 },
        ],
      },
      {
        name: "assembly",
        oprations: [
          { name: "skrewing", stTime: 0.3 },
          { name: "paintning", stTime: 0.2 },
          { name: "finish", stTime: 0.1 },
        ],
      },
    ],
  },
  {
    modelName: "Adirondack Chair",
    modelType: "Chair",
    subPieces: [
      {
        name: "foot",
        oprations: [
          { name: "cutting", stTime: 0.4 },
          { name: "edging", stTime: 0.2 },
          { name: "finish", stTime: 0.1 },
        ],
      },
      {
        name: "table",
        oprations: [
          { name: "cutting", stTime: 0.3 },
          { name: "edging", stTime: 0.2 },
          { name: "finish", stTime: 0.1 },
        ],
      },
      {
        name: "assembly",
        oprations: [
          { name: "skrewing", stTime: 0.5 },
          { name: "paintning", stTime: 0.3 },
          { name: "finish", stTime: 0.5 },
        ],
      },
    ],
  },
];

const arr = [];
models.map((e) => arr.push({ value: e.modelName, label: e.modelName }));

export default models;
