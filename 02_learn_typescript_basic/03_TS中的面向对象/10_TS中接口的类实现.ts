interface IPerson {
    name: string
    age: number

    running: () => void
}

// 一个类可以实现多个接口
class Person implements IPerson {
    name: string
    age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    running() {

    }
}


export {}