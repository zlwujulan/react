import React from 'react'
import Header from '../../components/Header'
import LoginComponent from '../../components/Login'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import history from '../../js/history'
import { USER } from '../../config/localStoreKey'
import localStore from '../../util/localStore'
import * as userInfoActionsFromOtherFile from '../../store/action'
class Login extends React.Component{
    constructor(props,context){
        super(props,context)
        this.state={
            checking: true
        }
    }
    render(){
        return(
         <div>
              <Header title="登录"/>
          {
              this.state.checking
              ?<div></div>
              :<LoginComponent loginHandle={this.loginHandle.bind(this)}></LoginComponent>
          }
         </div>

        )
    }
    componentDidMount(){
        //判断是否已经登录
        this.doCheck()
      
    }
    doCheck(){
      const userinfo = this.props.state
    //   console.log(userinfo.default.user,99999)
      if(userinfo.default.user){
          
          
          //已经登录，跳转到用户主页
          this.goUserPage()
      }else{
          this.setState({
              checking:false
          })
      }
    }
    //处理登录之后的事情
    loginHandle(username){
        //保存用户名
        let userinfo = this.props.state
        userinfo.username = username
        console.log(userinfo,8888888888888)
        this.props.userInfoActions.update({
            user: userinfo.username
        })
        localStore.setItem(USER,userinfo.username)
        const params = this.props.match.params;
        const router = params.router
        console.log(router,1234567)
        if(router){
    //跳转到指定页面
            history.push('/'+router)
        }else{
            //跳转到用用主页

        }
    }
    goUserPage(){
        history.push('/User')
    }
}
function mapStateToProps(state){
    return{
        state
    }
}
function mapDispatchToProps(dispatch){
    return{
        userInfoActions:bindActionCreators(userInfoActionsFromOtherFile,dispatch)
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)