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
         ?<LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadMoreData.bind(this)}/>
         :''
               }
            </div>
        )
    }
    componentDidMount(){
    
        this.resultHandle()
      
        //获取首页数据
  
    }
    resultHandle(){
        let  myData = require('../../../mock/home/list.json')
        console.log(myData)
        this.setState({
            data:this.state.data.concat(myData.data),
            hasMore:true
        })
    }
    //加载更多
    loadMoreData(){
          // 记录状态
          this.setState({
            isLoadingMore: true
        })
        this.resultHandle()
        this.setState({
            isLoadingMore: false
        })
    }
}
export default List
