import React from 'react'


import './style.css'

class CurrentCity extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state={}
    }
    render() {
        return (
            <div className="current-city">
                <h2>{this.props.cityName}</h2>
            </div>
        )
    }
}

export default CurrentCity