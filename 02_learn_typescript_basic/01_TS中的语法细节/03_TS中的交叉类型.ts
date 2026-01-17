// 交叉类型：两种或多种类型同时满足
// 但是这种情况下永远不会发生，所以MyType的类型是never，无意义
type MyType = number & string

interface IPerson {
    name: string,
    age: number
}

interface IAnimal {
    name: string,
    type: string
}

// 此时如果我们要求一个对象既是IPerson，又是 IAnimal，此时就可以用到交叉类型
const info: IPerson & IAnimal = {
    name: "haha",
    age: 13,
    type: "111"
}



export {}