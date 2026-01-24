class Person {
    // name: string
    // age: number
    // height: number

    // 语法糖，等同于创建了一个参数同名的属性，然后赋值给它
    constructor(public name: string, private age: number, readonly height: number) {
        // this.name = name
        // this.age = age
        // this.height = height
    }
}

export {}