//--------------------------------нічого не повертає

function generateError(message: string): never {
    throw new Error(message);
}

//------------------нічого не повертає--------------------------------------------

function dumpError(): never {
    while (true) {
    }
}
//-----------------нічого не повертає-----------------------------------------------

function rec():never {
    return rec();
}
//---------------------------------------------------------------------------

type paymentAction = 'refund' | 'checkout' | 'reject';

function processAction(action:paymentAction){
    switch (action){
        case "refund":
            //.....
            break;
        case "checkout":
            //....
            break;
        case "reject":
            //---
            break;
        default:
            const _:never = action;
            throw new Error('нема такого action')
    }
}
//----------------------------------------------------------------------------







