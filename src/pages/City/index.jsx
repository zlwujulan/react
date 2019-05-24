import React from 'react'
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as userInfoActionsFromOtherFile from '../../store/action'
import Header from '../../components/Header/index'
import CityList from '../../components/CityList/index'
import CurrentCity from '../../components/CurrentCity/index'
import { CITYNAME } from '../../config/localStoreKey'
import localStore from '../../util/localStore'
import history from '../../js/history'
class City extends React.Component{
    constructor(props,context){
          super();
            this.state={
             
            }

    }
  
    render(){
        return(
            <div>
               <Header title="选择城市"></Header>
               <CurrentCity cityName={this.props.city}></CurrentCity>
               <CityList changeFn={this.changeCity.bind(this)}></CityList>
           
            </div>
        )
    }
    componentDidMount(){
    console.log(this.props.city)
    console.log(this.state.default)
        //获取首页数据
  
    }
    changeCity(newCity){
        console.log(newCity,3333)
        if(newCity==null){
          return
        }
        //z修改reduxkjyt5
      
       
         this.props.userInfoAction.update({newCity})
        // 修改 cookie
        localStore.setItem(CITYNAME, newCity)
        // history.push('/home')
    }
    
}

function mapstateToProps(state){
    console.log(state,11111)
    return{
      city:state.default.city
    }
}
function mapDispatchToProps(dispatch){
    return{
        userInfoAction:bindActionCreators(userInfoActionsFromOtherFile,dispatch)
    }
}
export default connect(
    mapstateToProps,
    mapDispatchToProps
)(City)