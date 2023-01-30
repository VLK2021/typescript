const tup: [number, string] = [1, 'Typescript'];

// const id = tup[0];
// const tupName = tup[1];
//  або
const [id, tupName] = tup;
console.log(id, tupName);

const tup1: [number, string, ...boolean[]] = [1, 'Typescript', true, false, true];

for (const tup1Element of tup1) {
    console.log(tup1Element);
}