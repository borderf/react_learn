// 接口声明 interface
interface PointType {
    x: number,
    y: number,
    z?: number
}

// 使用上和类型别名基本没区别
function printCoordinate(point: PointType) {
    console.log(point.x, point.y, point.z)
}

// type 类型范围更广
type MyNumber = number

// interface可以多次声明同一个接口名称
// 多次声明都是有效的
// type 不可以多次定义
interface PointType {
    test: string
}

// interface 支持继承
interface IPerson {
    name: string,
    age: number
}

interface IStudent extends IPerson {
    score: number
}

// interface 可以被类实现(后续面向对象再看)
class Person implements IPerson {
    
}

export {}