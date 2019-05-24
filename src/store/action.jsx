// 这里写组件改变redux里面的状态的方法名以及参数，需要调用下面这些方法的要在对应的组件中导入
export const USERINFO_UPDATE = 'USERINFO_UPDATE'
//设置城市  更改状态，传到reducer中去
export function update(data){
    console.log(data,123)
    return{
        type:USERINFO_UPDATE,
        data

    }
}







