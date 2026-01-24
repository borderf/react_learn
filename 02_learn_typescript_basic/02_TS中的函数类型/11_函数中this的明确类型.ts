// 在没有对TS进行特殊配置的情况下，this是any类型
// 在没有配置选项（编译选项compilerOptions -> noImplicitThis设置为true，不允许模糊this存在）
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
function foo(this: {name: string}, name: string) {
    // this明确类型
    console.log(this)
    console.log(name)
}

foo.call({name: "lala"}, "hello")

export {}