class Person {

}

/**
 * 类的作用：
 * 1.可以创建类对应的实例；
 * 2.类可以作为这个实例的类型；
 * 3.类也可以当作一个有构造签名的函数；
 */
const name: string = "aaa"

const p: Person = {}

function factory(ctor: new () => void) {

}

factory(Person)


export {}