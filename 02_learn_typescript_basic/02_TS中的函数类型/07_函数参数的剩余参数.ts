// 剩余参数，加入类型注解
function sum(...nums: number[]) {
    let total = 0
    for(const num of nums) {
        total += num
    }
    return total
}

const res = sum(10, 20, 30, 11)

export {}