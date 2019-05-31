import React from 'react'
import Info from './subpage/info'
import Comment from './subpage/Comment'
import Header from '../../components/Header'
import Buy from './subpage/buy'
class Detail extends React.Component{
    constructor(props,context){
    super(props,context)
    }
    render(){
        return(
            <div>
            <Header title="商户详情" type="share"/>
            <Info/>
            <Buy></Buy>
            <Comment/>
            </div>
        )
    }
}
export default Detail