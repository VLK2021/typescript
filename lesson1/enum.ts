enum StatusCode {
    SUCCESS = 1,
    IN_PROCESS = 2,
    FAILED = 3
}

const en = {
    message: 'Платіж успішний',
    statusCode: StatusCode.SUCCESS
}

// 1 - успіх
// 2- в процесі
// 3- провал


function action(status: StatusCode) {

}

action(StatusCode.SUCCESS);
action(1);

// ------------------------------------------------------------------------------------------------
function comp() {
    return 3;
}

enum Role {
    ADMIN,
    USER = ADMIN * 2,
    DEV= comp()
}

//--------------------------------------------------------------------------
const enum Roles{
    ADMIN,
    USER = ADMIN * 2,
}

const res1 = Roles.ADMIN;