// 普通的实现
// function getLength(arg) {
//     return arg.length
// }

// 1.函数的重载实现
function getLength(arg: string): number
function getLength(arg: any[]): number
function getLength(arg: any) {
    return arg.length
}

// 2.联合类型实现
function getLength1(arg: string | any[]) {
    return arg.length
}

// 3.对象类型实现，必须有length属性
function getLength2(arg: {length: number}) {
    return arg.length
}

export {}