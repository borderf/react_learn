// 映射类型：类比于函数
// T = IPerson 的情况下，keyof T = "name" | "age"
type MapPerson<T> = {
    // 索引类型依次进行使用一次
    // 等同于 name: string / age: number
    [property in keyof T]: T[property]
}

interface IPerson {
    name: string
    age: number
}

// 拷贝一份 IPerson
/**
 * type NewPerson = {
    name: string;
    age: number;
}
 */
type NewPerson = MapPerson<IPerson>

export {}