// ts中字面量类型的使用
// 字面量类型的基本使用
const name: "haha" = "haha"

let age: 18 = 18

// 将多个字面量类型联合起来 |
// 起到类似枚举的作用，只能在这几个字面量中进行赋值
type Direction = "left" | "right" | "up" | "down" 
const d1: Direction = "left"

// 例子：封装请求方式
type MethodType = "get" | "post"
function request(url: string, method: MethodType) {

}

request("http://www.baidu.com", "post")

// TS 细节
const info = {
    url: "xxx",
    method: "post"
}

// 下面的做法错误，info.method获取的是string类型
// request(info.url, info.method)

// 解决方案一：info.method进行类型断言
request(info.url, info.method as "post")

// 解决方案二：直接让info对象类型是一个字面量类型
// const info1: {url: string, method: MethodType} = {
//     url: "xxx",
//     method: "post"
// }
// 字面量推理
const info1 = {
    url: "xxx",
    method: "post"
} as const

request(info1.url, info1.method)

request

export {}