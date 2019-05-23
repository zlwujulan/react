import React from 'react'
import { Link } from 'react-router-dom';
import './style.css'
class HomeAd extends React.Component{
    constructor(props,context){
          super(props,context);
            this.state={

            }

    }
    componentDidMount(){}
    render(){
        return(
            <div id="home-ad">
                <h2>超值特惠</h2>
                <div className="ad-container clear-fix">
                    {this.props.data.map((item,index)=>{
                        return <div key={index} className="ad-item float-left">
                            <a href={item.link} target="_blank">
                            <img src={item.img} alt={item.title}/>
                            </a>
                        </div>
                    })}
                </div>
            </div>
        )
    }
  
}
export default HomeAd