function getUser() {
    if (Math.random() > 0.5) {
        return null;
    }
    else {
        return {
            name: 'Vita'
        };
    }
}
var user11 = getUser();
if (user11) {
    var n22 = user11 === null || user11 === void 0 ? void 0 : user11.name;
}
