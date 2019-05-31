import React from 'react'

import SearchHeader from '../../components/SearchHeader'
import SearchList from './subpage/List'

class Search extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state={}
        // this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    componentDidMount(){
       
        console.log(this.props.match.params.category)
    }
    render() {
        const params = this.props.match.params
        return (
            <div>
              <SearchHeader keyword={params.category}></SearchHeader>
              <SearchList keyword={params.category}></SearchList>
               
            </div>
        )
    }
}

export default Search