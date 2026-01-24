class Person {
    // 私有属性，属性前面加下划线
    private _name: string
    private _age: number

    constructor(name: string, age: number) {
        this._name = name
        this._age = age
    }

    // setter和getter
    set name(newValue: string) {
        this._name = newValue
    }

    get name(): string {
        return this._name
    }
}

// setter和getter：对于属性的访问进行拦截操作
const p = new Person("hello", 17)

p.name = "lala"
console.log(p.name)

export {}