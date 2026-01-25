interface IIndexType {
    // any返回值类型的目的：告知通过索引获取到的值是什么类型
    // index的类型只能说 number 或者 string 的其中一个，也不能是联合类型
    [index: number]: any
}

// 索引签名：[index: number]: string
const names: IIndexType = ["a", "b", "c"]

export {}