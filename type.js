// 基本类型
var log = console.log;
// boolean
function testBool() {
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
}
// number
function testNum() {
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
}
// string
function testStr() {
    var name = 'bod';
    name = 'smith';
    // template
    var age = 14;
    var sentence = "hello, my name is " + name + ", " + age + " years old";
    log(sentence);
}
// array
function testArr() {
    var list = [1, 2, 3, 4];
    log(list[0]);
    // let list2: number[] = ['1', 2, 3, 4]
    var list3 = [1, 2, 3, 4];
    // let list4: Array<number> = ['1', 2, 3, 4];
}
// tuple
function testTuple() {
    // 声明
    var x;
    x = ['hello', 10];
    log('tuple x', x);
    var y;
    // y = [10, 'hello'];
    // get
    log(x[0]);
    // 越界
    log(x[3]); // undefined
    // set
    // x[0] = 10;
    // 越界： 接受指定类型的任意一种
    x[5] = 10;
    x[6] = '10';
    // x[7] = true;
}
// enum
function testEnum() {
    // 声明: 为一组值指定名字， 值默认是 0, 1, 2..
    var Color;
    (function (Color) {
        Color[Color["Red"] = 0] = "Red";
        Color[Color["Green"] = 1] = "Green";
        Color[Color["Blur"] = 2] = "Blur";
    })(Color || (Color = {}));
    ;
    var c = Color.Green;
    log('enum c', c);
    // 指定值
    var eventType;
    (function (eventType) {
        eventType[eventType["click"] = 1] = "click";
        eventType[eventType["keydown"] = 2] = "keydown";
        eventType[eventType["mouseenter"] = 3] = "mouseenter";
    })(eventType || (eventType = {}));
    ;
    var click = eventType.click;
    log('enum click', click);
    // 反向查找
    log('enum click value', eventType[1]);
}
function testAny() {
    var notSure = 4;
    notSure = 'str';
    notSure = false;
    // Any 与 Object 的区别
    // 包含不同数据类型的数组
    var list = [1, true, 'free'];
}
function testVoid() {
    // 只能赋值 undefined null
    var unusable = undefined;
    unusable = null;
    // unusable = false;
    // 没有返回值的函数
    function warn() {
        console.error('warn');
    }
    warn();
}
function testNullUndefined() {
    var u = undefined;
    var n = null;
    // null 和 undefined 是所有类型的子类型
    var num = n;
    var str = u;
    // 指定 --strictNullChecks null 和 undefined 只能赋值给 void 和 自身
    var num2 = n;
    var str2 = u;
}
function testNever() {
    // never: 掏出错误的 或 不能返回的函数的返回值类型
    function error(message) {
        throw new Error(message);
    }
    function fail() {
        return error('some');
    }
    function loop() {
        while (true) {
        }
    }
}
function testTypeAssert() {
    // 类型断言就是类型转换
    var some = 'this a string';
    var str = some.slice(0);
}
function __main() {
    // testStr()
    // testArr()
    // testTuple();
    // testEnum();
    // testAny()
    // testVoid()
    // testNever()
    testTypeAssert();
}
__main();
