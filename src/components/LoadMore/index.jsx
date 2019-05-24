import React from 'react'


import './style.css'

class LoadMore extends React.Component {
    constructor(props, context) {
        super(props, context);
       
    }
    render() {
        return (
            <div className="load-more" ref="wrapper">
               {
                   this.props.isLoadingMore
                   ?<span>加载中。。。</span>
                   :<span onClick={this.loadMoreHandle.bind(this)}>加载更多</span>
               }
            </div>
        )
    }
   
    loadMoreHandle(){
        // 执行传输过来的
        this.props.loadMoreFn();
    }
    componentDidMount(){
        //使用滚动时自动加载更多
        const loadMoreFn = this.props.loadMoreFn
        const wrapper = this.refs.wrapper
        let timeoutId
        function callback() {
            const top = wrapper.getBoundingClientRect().top;
            //getBoundingClientRect用于获取某个元素相对于视窗的位置集合。集合中有top, right, bottom, left等属性。
            //返回值类型：　rectObject.top：元素上边到视窗上边的距离;rectObject.right：元素右边到视窗左边的距离;
            //rectObject.bottom：元素下边到视窗上边的距离;rectObject.left：元素左边到视窗左边的距离;
            const windowHeight = window.screen.height
            // window.screen.height这个方法是获取用户电脑屏幕的高度，是不关浏览器或者顶部工具栏跟底部工具栏的高度的
            if(top&&top<windowHeight){
                //证明wrpper已经被滚动到暴露在页面的可视范围内了
                loadMoreFn()
            }
        }
        //element.addEventListener(event, function, useCapture);
        //第一个参数是事件的类型第二个参数是事件触发后调用的函数。
        //第三个参数是个布尔值用于描述事件是冒泡还是捕获。该参数是可选的。
        window.addEventListener('scroll',function(){
            if(this.props.isLoadingMore){
                return
            }
            if(timeoutId){
                clearTimeout(timeoutId)
            }
            timeoutId = setTimeout(callback,50)
        }.bind(this),false)
    }
}

export default LoadMore