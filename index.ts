import * as readline from 'readline';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function changeSelect(_select: number, _doors: boolean[]):number {
    _select++;
    if (_select > 2) _select = 0;
    if (_doors[_select] == undefined) return changeSelect(_select,  _doors);
    if (_select < 3 && _doors[_select] !== undefined) return _select;
}

rl.question("How many loops are you going to make?\n   ", loop => {
    let correctAnswerCount:number = 0;
    let loopCount:number = 0;

    for (let i=0; i < Number(loop); i++) {
        let doors:boolean[] = [];
        const goat:number = Math.floor(Math.random() * 3);
        let sOrF:string = 'Fail';
        
        for (let i:number=0; i < 3; i++) {
            if (i === goat) doors.push(true);
            else doors.push(false);
        }
        
        let select:number = Math.floor(Math.random() * 3);
        
        for (let i:number=0; i < 3; i++) {
            if (i !== select && !doors[i]) {
                delete doors[i];
                break;
            }
        }
        
        select = changeSelect(select, doors);
        loopCount++;
        if (doors[select]) {
            correctAnswerCount++;
            sOrF = 'Success'
        }
        console.log(`${loopCount}th try | ${sOrF} | Answer rate: ${correctAnswerCount / loopCount * 100}%`);
    }

    rl.close();
});