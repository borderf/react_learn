interface IPerson {
    name: string
    age: number
    height: number
}

const p: IPerson = {
    name: "lala",
    age: 18,
    height: 1.88
}

// 索引签名的理解
interface InfoType {
    [key: string]: string
}

function getInfo(): InfoType {
    const abc: any = "haha"
    return abc
}

const info = getInfo()
console.log(info.name, info.age, info.address)

// 索引签名的案例
interface ICollection {
    [index: number]: string
    length: number
}

function printCollection(collection: ICollection) {
    for(let i = 0; i < collection.length; i++) {
        const item = collection[i]
        console.log(item)
    }
}

const names = ["abc", "cba", "nba"]
const tuple: [string, string] = ["haha", "lala"]
printCollection(names)
printCollection(tuple)

export {}