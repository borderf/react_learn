// 函数参数可以有默认值
// 1、有默认值的情况下，参数的类型注解可以省略
// 2、有默认值的参数，是可以接收一个 undefined 的值
function foo(x: number, y = 100) {
    console.log(x + y)
}   

// 如果不传的话就会使用默认值
foo(10)
// 传的话使用传入的值
foo(10, 20)

// 但是我们也可以传入 undefined
foo(10, undefined)

export {}