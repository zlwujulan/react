import React from 'react'

// import SearchHeader from '../../components/SearchHeader'
// import SearchList from './subpage/List'

class Search extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state={}
        // this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        // const params = this.props.params
        return (
            <div>
                我是search
                {/* <SearchHeader keyword={params.keyword}/>
                <SearchList keyword={params.keyword} category={params.category}/> */}
            </div>
        )
    }
}

export default Search