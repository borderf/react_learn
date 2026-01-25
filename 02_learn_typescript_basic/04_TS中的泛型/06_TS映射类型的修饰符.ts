// 映射类型
type MapPerson<T> = {
    // ? 修饰符：表示可选
    // readonly：表示只读
    // readonly [property in keyof T]?: T[property]
    // -readonly [property in keyof T]-?: T[property]
    readonly [property in keyof T]-?: T[property]
}

interface IPerson {
    name: string
    age: number
    readonly height: number
    address?: string
}
// 参数都转变成可选的
/**
 * type IPersonOptional = {
    readonly name?: string | undefined;
    readonly age?: number | undefined;
    readonly height?: number | undefined;
    readonly address?: string | undefined;
}
 */
type IPersonOptional = MapPerson<IPerson>



export {}