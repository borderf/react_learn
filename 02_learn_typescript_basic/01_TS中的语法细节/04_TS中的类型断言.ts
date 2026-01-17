// 类型断言 as
// 获取DOM元素，根据class选择，ts推测是Element | null
// const imgEl = document.querySelector(".img")
// if (imgEl !== null) {
    
// }


// 使用类型断言
const imgEl = document.querySelector(".img") as HTMLImageElement
imgEl.src = "xxx"
imgEl.alt = "yyy"


// 类型断言的规则,
// TS只允许类型断言转换为 更具体 或者 不太具体 的类型版本
const age: number = 18
const age2 = age as string // 不允许

const age3 = age as any  // 允许，但是不合适
const age4 = age3 as string // 允许，但是不合适

// 非空类型断言 !
function printMessage(message?: string) {
    console.log(message!.toUpperCase())
}

printMessage("hello")

printMessage()

export {}