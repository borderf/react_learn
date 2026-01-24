function foo(this: {name: string}, arg: string) {
    console.log(this)
}

type FooType = typeof foo

// 1.ThisParameterType：获取FooType类型中的this类型
type FooThisType = ThisParameterType<FooType>

// 2.OmitThisParameter：删除this类型，剩余的函数类型
type PureFooType = OmitThisParameter<FooType>

// 3.ThisType：绑定一个上下文的this
interface IState {
    name: string
    age: number
}
interface IStore {
    state: IState,
    running: () => void
}

// 将store的this类型绑定为IState
const store: IStore & ThisType<IState> = {
    state: {
        name: "lala",
        age: 18
    },
    // 后续所有函数的this都是IState
    running: function() {
        console.log(this.name)
    }
}

export {}