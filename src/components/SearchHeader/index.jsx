import React from 'react'
import history from '../../js/history'
import SearchInput from '../SearchInput'

import './style.css'

class SearchHeader extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (
            <div id="search-header" className="clear-fix">
                <span className="back-icon float-left" onClick={this.clickHandle.bind(this)}>
                    返回
                </span>
                <div className="input-container">
                    <i className="icon-search"></i>
                    &nbsp;
                    <SearchInput value={this.props.keyword || ''} enterHandle={this.enterHandle.bind(this)}/>
                </div>
            </div>
        )
    }
    clickHandle() {
        window.history.back()
    }
    enterHandle(value) {
        history.push('/search/' + encodeURIComponent(value))
    }
}

export default SearchHeader