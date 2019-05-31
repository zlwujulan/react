import React from 'react'
import ComponentList from '../../../components/List'
import LoadMore from '../../../components/LoadMore'


class SearchList extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state={
            searchResult:[],
            hasMore:false,
            isLoadingMore:false

        }
     
    }
   
    render() {
       
        return (
            <div>
           {
                 this.state.searchResult.length?
                 <ComponentList data={this.state.searchResult}></ComponentList>
                 :<div>加载中。。。</div>
           }
          {
                    this.state.hasMore
                    ? <LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadMoreData.bind(this)}/>
                    : ''
                }
               
            </div>
        )
    }
    componentDidMount(){
        this.getData()
        
      }
      getData(){
          let  myData = require('../../../mock/home/list.json')
          this.setState({
            searchResult:this.state.searchResult.concat(myData.data),
            hasMore:true,
            isLoadingMore:false
          })
      }
      loadMoreData(){
          this.getData()
      }
    
}

export default SearchList