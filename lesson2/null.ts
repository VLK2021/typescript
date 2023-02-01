interface IUser {
    name: string
}

function getUser(){
    if (Math.random() > 0.5){
        return null;
    } else {
        return {
            name: 'Vita'
        } as IUser
    }
}

const user11 = getUser();
if (user11){
    const n22 = user11?.name
}