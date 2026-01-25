// 泛型类型约束
interface ILength {
    length: number
}
// 1.getLength 来说没有必要用泛型
function getLength(arg: ILength) {
    return arg.length
}

// 2.获取传入的内容，这个内容必须有length属性
// 为了保证输出跟输入是同一类型，同时类型必须有约束，具有length属性
function getInfo<T extends ILength>(args: T): T {
    return args
}

const res1 = getInfo("123")
const res2 = getInfo([1, 2, 3])

export {}