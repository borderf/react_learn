function foo(arg: number): number {
    return 123
}

// foo 本身也是一个标识符，也有自己的类型
// 方案一：函数类型表达式，格式: (参数列表) => 返回值类型 
// 注意：参数列表中参数名称和参数类型都不能省略
type BarType = (xxx: number) => number
const bar: BarType = (arg: number): number => {
    return 123
}

// TS对于传入的函数类型的参数个数不进行校验
type CalcType = (num1: number, num2: number) => number
function calc(calFn: CalcType) {
    const num1 = 10
    const num2 = 20
    const res = calFn(num1, num2)
    console.log(res)
}

function sum(x: number, y: number): number {
    return x + y
}

calc(sum)
// 匿名函数的形式
calc(function(num1, num2) {
    return num1 * num2
})

export {}