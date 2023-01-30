const arr: string[] = ['Type', 'Script', 'Lvov'];

for (const string of arr) {
    console.log(string.toLowerCase());
}

const rez = arr
    .filter((s: string) => s !== 'Script')
    .map(s => {
        return 1
    })
    .reduce((a, b) => a + b)

console.log(rez);