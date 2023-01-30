var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["SUCCESS"] = 1] = "SUCCESS";
    StatusCode[StatusCode["IN_PROCESS"] = 2] = "IN_PROCESS";
    StatusCode[StatusCode["FAILED"] = 3] = "FAILED";
})(StatusCode || (StatusCode = {}));
var en = {
    message: 'Платіж успішний',
    statusCode: StatusCode.SUCCESS
};
// 1 - успіх
// 2- в процесі
// 3- провал
function action(status) {
}
action(StatusCode.SUCCESS);
action(1);
// ------------------------------------------------------------------------------------------------
function comp() {
    return 3;
}
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 0] = "USER";
    Role[Role["DEV"] = comp()] = "DEV";
})(Role || (Role = {}));
var res1 = 0 /* ADMIN */;
