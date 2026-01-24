// 可选参数
// 使用 ? 表示参数是可选的
// 可选参数的类型是什么？ number | undefined 联合类型
function foo(x: number, y?: number) {
    // 使用的时候需要进行类型缩小
    if (y !== undefined) {
        console.log(y + 20)
    }
}

foo(10)

export {}