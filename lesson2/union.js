function logId(id) {
    if (typeof id === 'string') {
        console.log(id);
    }
    else if (typeof id === 'number') {
        console.log(id);
    }
    else {
        console.log(id);
    }
}
//--------------------------------------------------------------------------------------------------------
function logError(err) {
    if (Array.isArray(err)) {
        console.log(err);
    }
    else {
        console.log(err);
    }
}
//-----------------------------------------------------------------------------------
function logObg(obj) {
    if ('a' in obj) {
        console.log(obj.a);
    }
    else {
        console.log(obj.b);
    }
}
//-----------------------------------------------------------------------------------
function logMultipleId(a, b) {
    if (a === b) {
    }
    else {
    }
}
