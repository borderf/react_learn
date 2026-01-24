abstract class Shape {
    // getArea只有声明没有实现体
    // 实现让子类自己实现
    // 可以定义为抽象方法
    // 抽象方法必须出现在抽象类中，子类必须实现抽象方法
    abstract getArea(): number 
}

class Reactangle extends Shape {
    constructor(public width: number, public height: number) {
        super()
    }

    getArea() {
        return this.width * this.height
    }
}

class Circle extends Shape {
    constructor(public radius: number) {
        super()
    }

    getArea() {
        return Math.PI * this.radius ** 2
    }
}


function calcArea(shape: Shape) {
    return shape.getArea()
}

// 抽象类不能被实例化
// new Shape()

console.log(calcArea(new Circle(10)))
console.log(calcArea(new Reactangle(10, 20)))

export {}