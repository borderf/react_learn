interface IPerson {
    name: string
    age: number
}

// 可以从其他接口中继承属性
// 1.提高代码的复用
// 2.如果使用第三方库，我们可以增强它们的一些属性
interface IStudent extends IPerson {
    score: number
}

const stu1: IStudent = {
    name: "ll",
    age: 18,
    score: 90
}

export {}