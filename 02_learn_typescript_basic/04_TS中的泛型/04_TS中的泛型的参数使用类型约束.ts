// 传入的key类型，应当是obj当中key的其中之一
function getObjProperty<O, K extends keyof O>(obj: O, key: K) {
    return obj[key]
}

const info = {
    name: "1",
    age: 12,
    height: 1.88
}

// 报错
const value1 = getObjProperty(info, "address")

interface IPerson {
    name: string
    age: number,
    address: string
}

// 是 "name" | "age" | "address" 的联合类型 
type IPersonKeys = keyof IPerson

export {}