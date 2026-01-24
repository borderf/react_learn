class Person {
    public readonly name: string
    public age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
}


const p = new Person("lala", 18)

// 错误，只读属性无法赋值
// p.name = "hello"

export {}