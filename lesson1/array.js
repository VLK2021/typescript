var arr = ['Type', 'Script', 'Lvov'];
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var string = arr_1[_i];
    console.log(string.toLowerCase());
}
var rez = arr
    .filter(function (s) { return s !== 'Script'; })
    .map(function (s) {
    return 1;
})
    .reduce(function (a, b) { return a + b; });
console.log(rez);
