var user = {
    firstName: 'Type',
    secondName: 'script',
    age: 10,
    city: 'Lvov',
    skills: {
        dev: true,
        devops: false
    }
};
var obj = function (user) {
    return "".concat(user.firstName).concat(user.secondName, " - ").concat(user.age);
};
console.log(obj(user));
