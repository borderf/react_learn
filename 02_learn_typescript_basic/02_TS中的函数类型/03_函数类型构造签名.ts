// 构造签名
class Person {

}

// 需要明确它是一个构造函数
interface ICTORPerson {
    // 构造签名
    new (): Person
}

function factory(fn: ICTORPerson) {
    return new fn()
}

factory(Person)



export {}