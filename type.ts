// 基本类型
const log = console.log
// boolean
let isDone: boolean = false;
function done(isDone: boolean) {
    if(isDone) {
        console.log('is done');
    } else {
        console.log('not done yet');
    }
}

done(isDone);

// number
let dec: number = 6;
let hex: number = 0xf00d;
let bin: number = 0b1010;
let oct: number = 0o744;

function dec2bin(dec: number) {
    log(parseInt(dec.toString(2), 10));
}

function hex2dec(hex: number) {
    log(parseInt(hex.toString(10)))
}

dec2bin(dec);
hex2dec(hex);

// string
