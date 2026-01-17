// 类型别名
type MyIDType = number | string

function printID(id: MyIDType) {
    console.log(id)
}

// 也可以使用自定义对象类型
type PointType = {x: number, y: number, z: number}
function printCoordinate(point: PointType) {
    console.log(point.x, point.y, point.z)
}

export {}