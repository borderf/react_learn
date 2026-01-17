// typeof：使用最多
function printID(id: string | number) {
    if (typeof id === "string") {
        console.log(id.length)
    } else {
        console.log(id)
    }
}

// 方向类型的判断
type Direction = "left" | "right" | "up" | "down"
function switchDirection(direction: Direction) {
    if (direction === "left") {
        console.log("左:", direction, " 角色向左移动")
    } else if (direction === "right") {
        console.log("右:", direction, " 角色向右移动")
    } else if (direction === "up") {
        console.log("上:", direction, " 角色向上移动")
    } else {
        console.log("下:", direction, " 角色向下移动")
    }
}

// 3.instanceof 打印日期
function printDate(date: string | Date) {
    // if (typeof date === "string") {
    //     console.log(date)
    // } else {
    //     console.log(date.getTime())
    // }

    if (date instanceof Date) {
        console.log(date.getTime())
    } else {
        console.log(date)
    }
}


// 4. in 操作符
interface ISwim {
    swim: () => void
}

interface IRun {
    run: () => void
}

const fish: ISwim = {
 swim() {

 }
}

const dog: IRun = {
    run () {
        
    },
}

function move(animal: ISwim | IRun) {
    // 判断是否有这个属性
    if ("swim" in animal) {

    } else if ("run" in animal) {
        
    }
}


export {}