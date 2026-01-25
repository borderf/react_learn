// 两个签名
interface IIndexType {
    // 不能使用联合签名，但是可以使用两个签名
    // [index: number]: string
    // [key: string]: any

    // 下面的写法不允许
    // number类型索引的类型，必须是string类型索引的类型的子类型
    // 原因：所有的数字类型都是会转成字符串类型去对象中获取内容
    // 保证通过number索引拿到的内容，跟通过string索引拿到的类型不矛盾
    [index: number]: string
    [key: string]: number | string
    
    // 如果索引签名中有定义其他的属性，其他属性返回的内容，必须符合string类型返回的属性
}

const names: IIndexType = ["a", "b", "c"]

export {}