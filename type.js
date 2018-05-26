// 基本类型
var log = console.log;
// boolean
var isDone = false;
function done(isDone) {
    if (isDone) {
        console.log('is done');
    }
    else {
        console.log('not done yet');
    }
}
done(isDone);
// number
var dec = 6;
var hex = 0xf00d;
var bin = 10;
var oct = 484;
function dec2bin(dec) {
    log(parseInt(dec.toString(2), 10));
}
function hex2dec(hex) {
    log(parseInt(hex.toString(10)));
}
dec2bin(dec);
hex2dec(hex);
