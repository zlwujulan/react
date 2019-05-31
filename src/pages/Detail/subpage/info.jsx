import React from 'react'
import DetailInfo from '../../../components/DetailInfo'

class Info extends React.Component {
    constructor(props, context) {
        super(props, context);
     
        this.state = {
            info: false
        }
    }
    render() {
        return (
            <div>
                {
                    this.state.info
                    ? <DetailInfo data={this.state.info}/>
                    : ''
                }
            </div>
        )
    }
    componentDidMount() {
        // 获取商户信息
        this.getInfo()
    }
    getInfo() {
        let  myData = require('../../../mock/detail/info.json')
       
            this.setState({
                info: myData
            })
    }
}

export default Info