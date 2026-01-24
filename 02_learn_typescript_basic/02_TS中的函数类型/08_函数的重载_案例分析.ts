// 需求：只能将两个数字/两个字符串相加
// 案例分析：any实现
// function add(arg1, arg2) {
//     return arg1 + arg2
// }

// add(10, 20)
// add("123", "132")

// 实现两个函数，这种非常麻烦
function add1(num1: number, num2: number) {
    return num1 + num2
}

function add2(str1: string, str2: string) {
    return str1 + str2
}

// 错误做法：联合类型，+ 运算符不能作用于联合类型
// function add3(arg1: string | number, arg2: string | number) {
//     return arg1 + arg2
// }

// TS中的函数的重载写法
// 1.先编写重载签名，只是签名，没有实现体
function add(arg1: number, arg2: number): number
function add(arg1: string, arg2: string): string
// 2.编写通用的实现
function add(arg1: any, arg2: any) {
    return arg1 + arg2
}

// 3.调用
add(10, 20)
add("123", "321")
// 下面都是错误做法，通用函数不能被调用，没有对应的重载签名
// add({"name": "111"}, 11)
// add("111", 123)


export {}