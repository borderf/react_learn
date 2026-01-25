// 定义枚举类型
enum Direction {
    UP = "UP",
    DOWN = "DOWN",
    LEFT = "LEFT",
    RIGHT = "RIGHT"
}

enum Operation {
    READ = 1 << 0,
    WRITE
}

const d1: Direction = Direction.UP

function turnDirection(direction: Direction) {
    switch(direction) {
        case Direction.UP:
            console.log("向上移动")
            break
        case Direction.DOWN:
            console.log("向下移动")
            break
        case Direction.LEFT:
            console.log("向左移动")
            break
        case Direction.RIGHT:
            console.log("向右移动")
            break
        default:
            console.log("原地不动")
    }
}

turnDirection(Direction.DOWN)

export {}