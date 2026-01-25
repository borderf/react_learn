// 类型的前面使用 type
import { sum, type IPerson, type IDType } from "./utils/math"

console.log(sum(10, 20))

const id: IDType = "1111"

const p1: IPerson = {
    name: "a1",
    age: 13
}