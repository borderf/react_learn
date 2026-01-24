// 在没有对TS进行特殊配置的情况下，this是any类型
// 1.对象中函数中的this
const obj = {
    name: "lala",
    study: function() {
        // 默认情况下，this是any类型
        console.log(this.name, "studying")
    }
}

obj.study()
obj.study.call({})

// 2.普通函数
function foo() {
    // this也是any类型
    console.log(this)
}

export {}