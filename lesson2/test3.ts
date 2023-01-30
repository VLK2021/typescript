// // Запрос в виде платежа
// {
//     "sum": 10000,
//     "from": 2,
//     "to": 4
// }
// // Ответ
// {
//     "status": "success",
//     "data": {
//     "databaseId": 567,
//         "sum": 10000,
//         "from": 2,
//         "to": 4
// }
// },
// {
//     "status": "failed",
//     "data": {
//     "errorMessage": "Недостаточно средств",
//         "errorCode": 4
// }
// }


interface IPayment {
    sum: number,
    from: number,
    to: number
}

enum PaymentStatus {
    SUCCESS = 'success',
    FAILED = 'failed'
}

interface IPaymentRequest extends IPayment {
}

interface IDataSuccess extends IPayment{
    databaseId: number,
}

interface IDataFailed {
    errorMessage: string,
    errorCode: string
}

interface IResponseSuccess {
    status: PaymentStatus.SUCCESS,
    data: IDataSuccess
}

interface IResponseFailed {
    status: PaymentStatus.FAILED,
    data: IDataFailed
}

