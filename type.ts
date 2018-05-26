// 基本类型
const log = console.log
// boolean
function testBool() {
    let isDone: boolean = false;
    function done(isDone: boolean) {
        if(isDone) {
            console.log('is done');
        } else {
            console.log('not done yet');
        }
    }

    done(isDone);
}

// number
function testNum() {
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
}

// string
function testStr() {
    let name: string = 'bod';
    name = 'smith';

    // template
    let age: number = 14;
    let sentence: string = `hello, my name is ${name}, ${age} years old`;

    log(sentence);
}

// array
function testArr() {
    let list: number[] = [1, 2, 3, 4]
    log(list[0])

    // let list2: number[] = ['1', 2, 3, 4]

    let list3: Array<number> = [1, 2, 3, 4];
    // let list4: Array<number> = ['1', 2, 3, 4];
}

// tuple
function testTuple() {
    // 声明
    let x: [string, number];
    x = ['hello', 10];
    log('tuple x', x);
    
    let y: [string, number];
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
    enum Color {Red, Green, Blur};
    let c: Color = Color.Green;
    log('enum c', c);

    // 指定值
    enum eventType {click = 1, keydown = 2, mouseenter = 3};
    let click = eventType.click;
    log('enum click', click)
    // 反向查找
    log('enum click value', eventType[1])
}

function testAny() {
    let notSure: any = 4;
    notSure = 'str';
    notSure = false;

    // Any 与 Object 的区别


    // 包含不同数据类型的数组
    let list: any[] = [1, true, 'free'];

}

function testVoid() {
    // 只能赋值 undefined null
    let unusable: void = undefined;
    unusable = null;
    // unusable = false;

    // 没有返回值的函数
    function warn(): void {
        console.error('warn');
    }
    warn();
}

function testNullUndefined() {
    let u: undefined = undefined;
    let n: null = null;

    // null 和 undefined 是所有类型的子类型
    let num: number = n;
    let str: string = u;

    // 指定 --strictNullChecks null 和 undefined 只能赋值给 void 和 自身
    let num2: number = n;
    let str2: string = u;
}

function testNever() {
    // never: 掏出错误的 或 不能返回的函数的返回值类型
    function error(message: string): never {
        throw new Error(message);
    }

    function fail() {
        return error('some')
    }

    function loop(): never {
        while(true) {
        }
    }
}

function testTypeAssert() {
    // 类型断言就是类型转换
    let some: any = 'this a string';
    let str: string = (some as string).slice(0);
}


function __main() {
    // testStr()
    // testArr()
    // testTuple();
    // testEnum();
    // testAny()
    // testVoid()
    // testNever()
    testTypeAssert()
}

__main()
