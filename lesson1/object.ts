const user = {
    firstName: 'Type',
    secondName: 'script',
    age: 10,
    city: 'Lvov',
    skills: {
        dev: true,
        devops: false
    }
}


const obj = (user: {firstName:string, secondName: string, age: number}) => {
    return `${user.firstName}${user.secondName} - ${user.age}`;
}
console.log(obj(user));