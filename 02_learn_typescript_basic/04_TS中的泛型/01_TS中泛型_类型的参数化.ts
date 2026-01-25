// 定义一个函数，将用户传入的内容返回
function bar<Type>(arg: Type) {
    return arg
}

const res1 = bar<string>("111")

const res2 = bar<number>(12)

const res3 = bar<{name: string}>({name: "haha"})

// 支持传入多个类型
function foo<T, E>(a1: T, b1: E) {
    return a1 + " " + b1
}

foo(12, "13")

export {}