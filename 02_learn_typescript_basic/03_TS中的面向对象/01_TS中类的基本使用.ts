// 类的基本使用
class Person {
    // 类中有成员属性，必须要声明
    // 可以指定类型和初始化值
    age: number = 0
    name: string = "lala"

    constructor(name: string, age: number) {
        this.age = age
        this.name = name
    }

    eating() {
        console.log(this.name + " eating")
    }
}

// 实例对象
const p1 = new Person("jaja", 18)
const p2 = new Person("hoho", 12)

console.log(p1.name, p1.age)

export {}