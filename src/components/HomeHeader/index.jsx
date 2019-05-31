import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import history from '../../js/history'
import SearchInput from '../SearchInput'
import { withRouter } from 'react-router'
class HomeHeader extends React.Component{
    constructor(props,context){
        super(props,context);
        this.state={
            path:''
        }

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
                <Link to={"/login"+this.state.path}> login</Link>
                </div>
                <div className="home-header-middle">
                    <div className="search-container">
                       <SearchInput value="" enterHandle={this.enterHandle.bind(this)}></SearchInput>
                    </div>

                </div>
            </div>
        )
    }
    componentDidMount(){
        console.log(this.props.match.path)
        this.setState({
            path:this.props.match.path
        })
    }
    enterHandle(value){
     history.push('/search/' + encodeURIComponent(value))
    }
}
HomeHeader = withRouter(HomeHeader)
export default HomeHeader