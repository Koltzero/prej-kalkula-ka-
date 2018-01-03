import React, { Component } from 'react'

export default class Display extends Component {
    render() {
        const {value} = this.props;
        return (
            <div className="result-box">
                {value}

            
            </div>
        )
    }
}
