// 调用签名
// 函数类型
type BarType = (num1: number) => number
const bar: BarType = (num1: number): number => {
    return 123
}

// 函数的调用签名
// 函数也是一个对象，也可以有其他的属性
interface IBar {
    name: string,
    age: number,
    // 函数可以调用，函数调用签名
    // 注意这个格式
    (num1: number): number
}

const newBar: IBar = (num1: number): number => {
    return 123
}
// 要赋值其余的属性
newBar.name = "lala"
newBar.age = 18


// 开发中如何选择：
// 1.如果只是描述函数类型本身（函数可以被调用），使用函数类型表达式；
// 2.如果在描述函数作为对象可以被调用，同时也有其他属性时，使用函数调用签名；


export {}