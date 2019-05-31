import React from 'react'
import DetailInfo from '../../../components/LoadMore'
import CommentList from '../../../components/CommentList'
import LoadMore from '../../../components/LoadMore';

class Info extends React.Component {
    constructor(props, context) {
        super(props, context);
     
        this.state = {
            info: false,
            myData:[]
        }
    }
    render() {
        return (
            <div>
                {
                   this.state.myData?
                   <CommentList data={this.state.myData}></CommentList>:
                   <div>加载中</div>
                }
               {
                    this.state.hasMore
                    ? <LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadMoreData.bind(this)}/>
                    : ''
                }
            </div>
        )
    }
    componentDidMount() {
        // 获取商户信息
        this.getInfo()
    }
    getInfo() {
        let  myData = require('../../../mock/detail/comment.json')
       console.log(myData)
            this.setState({
                myData: this.state.myData.concat(myData.data),
                hasMore:true
            })
    }
    loadMoreData(){
        this.getInfo()
    }
}

export default Info