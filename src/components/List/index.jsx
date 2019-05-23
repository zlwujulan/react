import React from 'react'
import { Link } from 'react-router-dom';
import Item from './Item'
import './style.css'
class List extends React.Component{
    constructor(props,context){
          super(props,context);
            this.state={

            }

    }
    componentDidMount(){}
    render(){
        return(
            <div className="list-container">
            {this.props.data.map((item, index) => {
                return <Item key={index} data={item}/>
            })}
        </div>
        )
    }
  
}
export default List