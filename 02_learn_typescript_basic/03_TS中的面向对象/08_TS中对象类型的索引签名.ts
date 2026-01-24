// 对象类型
interface ICollection {
    // 对象必须有length属性
    length: number
    // 索引签名
    // 指定以什么样的索引进行访问，而且访问返回的是什么类型
    [index: number]: string
}

const names = ["abc", "cn", "us"]
console.log(names[0])
console.log(names[1])


function iteratorCollection(collection: ICollection) {

}

iteratorCollection(names)

// 必须要通过number类型索引，返回一个字符串
iteratorCollection({name: "al", age: 18, length: 11})

export {}