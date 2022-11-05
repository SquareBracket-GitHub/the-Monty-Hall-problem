"use strict";
exports.__esModule = true;
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function changeSelect(_select, _doors) {
    _select++;
    if (_select > 2)
        _select = 0;
    if (_doors[_select] == undefined)
        return changeSelect(_select, _doors);
    if (_select < 3 && _doors[_select] !== undefined)
        return _select;
}
rl.question("How many loops are you going to make?\n   ", function (loop) {
    var correctAnswerCount = 0;
    var loopCount = 0;
    for (var i = 0; i < Number(loop); i++) {
        var doors_1 = [];
        var goat_1 = Math.floor(Math.random() * 3);
        var sOrF_1 = 'Wrong!';
        for (var i_1 = 0; i_1 < 3; i_1++) {
            if (i_1 === goat_1)
                doors_1.push(true);
            else
                doors_1.push(false);
        }
        var select_1 = Math.floor(Math.random() * 3);
        for (var i_2 = 0; i_2 < 3; i_2++) {
            if (i_2 !== select_1 && !doors_1[i_2]) {
                delete doors_1[i_2];
                break;
            }
        }
        select_1 = changeSelect(select_1, doors_1);
        loopCount++;
        if (doors_1[select_1]) {
            correctAnswerCount++;
            sOrF_1 = 'Correct!';
        }
        console.log("".concat(loopCount, "th try | ").concat(sOrF_1, " | Answer rate: ").concat(correctAnswerCount / loopCount * 100, "%"));
    }
    rl.close();
});
