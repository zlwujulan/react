import React,{Component} from 'react'
import { Link } from 'react-router-dom';
// import { getData } from '../../../mock/home/ad.json'
import HomeAd from '../../../components/HomeAd/index'
export default class Index extends Component{
    constructor(props,context){
          super();
            this.state={
               data:[]
            }

    }
    componentDidMount(){
        //引入mock json数据
        let  myData = require('../../../mock/home/ad.json')
        console.log(myData)
        this.setState({
            data:myData
        })
    }
    render(){
        return(
            <div>
              {
                  this.state.data.length?
                  <HomeAd data={this.state.data}/>
                  :<div>加载中。。。</div>
              }
            </div>
        )
    }
  
}