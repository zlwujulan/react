import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import history from '../../js/history'
import SearchInput from '../SearchInput'
class HomeHeader extends React.Component{
    constructor(props,context){
        super(props,context);
        this.state={}

    }
    render(){
        return(
            <div id="home-header" className="clear-fix">
                <div className="home-header-left float-left">
                   <Link to="/city">
                      <span>{this.props.cityName}</span>
                   </Link>
                </div>
                <div className="home-header-right float-right">

                </div>
                <div className="home-header-middle">
                    <div className="search-container">
                       <SearchInput value="" enterHandle={this.enterHandle.bind(this)}></SearchInput>
                    </div>

                </div>
            </div>
        )
    }
    enterHandle(value){
     history.push('/search/all/' + encodeURIComponent(value))
    }
}
export default HomeHeader