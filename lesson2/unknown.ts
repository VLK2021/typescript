let input: unknown;

input = 3;
input = ['ss', 'fff'];

function run(i: unknown) {
    if (typeof i == 'number') {
        i++
    } else {
        i
    }
}

run(input);

//----------------------------------------------------------------------
//краще використовувати явну перевірку
async function getData() {
    try {
        await fetch('');
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
        }
    }
}

//---------------------------------------------------------------------------
//так можна приводити до типи тільки якщо впевнені на всі сто що там ерора!!!
//інакше код враде
async function getDataForce() {
    try {
        await fetch('');
    } catch (error) {
        const e = error as Error
        console.log(e.message);
    }
}
//--------------------------------------------------------------------------
type U1 = unknown | number;
type I1 = unknown & string;
