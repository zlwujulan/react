import React from 'react'
import {connect} from 'react-redux'
// import store from '../store/index'
import HomeHeader from '../../components/HomeHeader'
import userinfo from '../../store/userinfo';
import Category from  '../../components/Category'
import Ad from '../../pages/home/subpage/Ad'
import List from '../../pages/home/subpage/List'
class Home extends React.Component{
    constructor(props,context){
        super(props,context);
        this.state={}
    }
    render(){
        return(
            <div>
                <HomeHeader cityName ={this.props.city}></HomeHeader>
                <Category></Category>
                <div style={{height: '15px'}}>{/* 分割线 */}</div>
                <Ad></Ad>
                <List></List>
            </div>
        )
    }
    componentDidMount(){
        console.log(this.props.state)
        console.log(this.props.userinfo,32)
    }
}

function mapStateToProps(state) {
 
    return {
       
        city:state.default.cityName
    }
}
//action作为属性传入react中
function mapDispatchToProps(dispatch) {
    return {
      
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)

// export default Home