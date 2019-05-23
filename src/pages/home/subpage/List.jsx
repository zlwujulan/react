import React from 'react'
import { Link } from 'react-router-dom';
import Listcomponent from '../../../components/List/index'
import LoadMore from '../../../components/LoadMore'
class List extends React.Component{
    constructor(props,context){
          super();
            this.state={
              data:[],
              hasMore: false,
              isLoadingMore: false,
              page: 0
            }

    }
  
    render(){
        return(
            <div>
                <h2>猜你喜欢</h2>
               {
                   this.state.data.length
                   ?<Listcomponent data={this.state.data}/>:
                   <div>加载中。。。</div>
               }
               {
         this.state.hasMore
         ?<LoadMore />
         :''
               }
            </div>
        )
    }
    componentDidMount(){
        let  myData = require('../../../mock/home/list.json')
        console.log(myData)
        this.setState({
            data:myData.data
        })
        //获取首页数据
  
    }
  
}
export default List
