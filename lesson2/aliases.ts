type httpMethod = 'post' | 'get';

function alias(url: string, method: httpMethod) {

}

//--------------------------------------------------------------
type User = {
    name: string,
    age: number,
    skills: string[]
}

let user1: User = {
    name: 'Volodymyr',
    age: 18,
    skills: ['1', '2']
}
//------------intersection-------------------------------------------------------------------------
type Role1 = {
    id: number
}

type UserWithRole = User & Role1;

let user2: UserWithRole = {
    name: 'Volodymyr',
    age: 18,
    skills: ['1', '2'],
    id: 1
}
