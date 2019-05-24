import React,{Component} from 'react'
import { Link } from 'react-router-dom';
import './style.css'
class Header extends Component{
    constructor(props,context){
          super();
            this.state={

            }

    }
    componentDidMount(){}
    render(){
        return(
            <div id="common-header">
            <span className="back-icon" onClick={this.clickHandle.bind(this)}>
                <i className="icon-chevron-left">返回</i>
            </span>
            <h1>{this.props.title}</h1>
        </div>
        )
    }
    clickHandle(){
        window.history.back()
    }
  
}
export default Header