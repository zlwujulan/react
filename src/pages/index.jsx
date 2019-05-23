import React from 'react'
import LocalStore from '../util/localStore'
import {CITYNAME} from '../config/localStoreKey'
import { Route } from 'react-router-dom'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
// import store from '../store/index'
import * as userInfoActionsFromOtherFile from '../store/action'
import home from '../pages/home'
import Search from '../pages/Serach/index'
import { update } from '../store/action';
import userinfo from '../store/reducer';
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
                    <Route path="/Search" component={Search}/>
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
      
        // store.dispatch(update(cityName))
        this.props.userInfoActions.update({
            city:cityName
        })
        console.log(this.props.state)
           // 更改状态
           this.setState({
            initDone: true
        })
    }
}
function mapStateToProps(state) {
 
    return {
        state
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
