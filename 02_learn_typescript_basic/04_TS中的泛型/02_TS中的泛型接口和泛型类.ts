// 泛型接口：可以使用默认值
interface IPerson<T = string> {
    name: T
    age: number
}

const person: IPerson<string> = {
    name: "lala",
    age: 18
}

const p2: IPerson<number> = {
    name: 123,
    age: 12
}

const p3: IPerson = {
    name: "12",
    age: 13
}

// 泛型类
class Point<T> {
    x: T
    y: T

    constructor(x: T, y: T) {
        this.x = x
        this.y = y
    }
}

const point1 = new Point<number>(1, 2)
// 可以推导
const point2 = new Point("1", "2")

export {}