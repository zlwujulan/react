import React from 'react'
import LocalStore from '../util/localStore'
import {CITYNAME,USER} from '../config/localStoreKey'
import { Route } from 'react-router-dom'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
// import store from '../store/index'
import * as userInfoActionsFromOtherFile from '../store/action'
import home from '../pages/home'
import Search from '../pages/Serach/index'
import city from '../pages/City/index'
import Detail from '../pages/Detail/index'
import Login from '../pages/Login/index'
import User from '../pages/User/index'
class App extends React.Component {
    constructor(props,context){
        super(props,context)
        this.state = {
            initDone: false
        }
    }
    render() {
        return (
            <div>
                {
                    this.state.initDone
                    ? 
                    <div>
                        
                    <Route path="/home" component={home}/>
                    <Route path="/search/:category" component={Search}/>
                    <Route path="/city" component={city}/>
                    <Route path="/detail" component={Detail}/>
                    <Route path="/Login/:router" component={Login}/>
                    <Route path="/User" component={User}/>
                    
                    </div>
                    : <div>正在加载...</div>
                }
            </div>
        )
    } 
    componentDidMount() {
      
        //获取位置信息
        let cityName = LocalStore.getItem(CITYNAME)
        if(cityName ==null){
            cityName = '北京'
        }
        console.log(cityName)
      //用户登录
      let user = LocalStore.getItem(USER)
     
     
        this.props.userInfoActions.update({
            cityName:cityName
        })
       
        // console.log(this.props.userInfoActions)
           // 更改状态
           this.setState({
            initDone: true
        })
    }
}
function mapStateToProps(state) {
    return {
        
    }
}
//action作为属性传入react中
function mapDispatchToProps(dispatch) {
    return {
        userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch),
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
