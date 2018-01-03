import React, { Component } from 'react'

export default class Key extends Component {
    render() {
        const {value, style, onClick} = this.props;

        if(style == "number"){
            return (
                <input onClick={onClick} className={`Key col-3`} type="submit" value={value} />
            )   
        }

        if(style == "operation"){
            return (
                <input onClick={onClick} className={`Key Key-operator col-3 `} type="submit" value={value} />
            )
        }

        if(style == "result"){
            return (
                <input onClick={onClick} className={`Key Key-result  col-3 `} type="submit" value={value} />
            )
        }
        else{
            return (
                <input onClick={onClick} className={`Key Key-result  col-3 `} type="submit" value={value} />
            )
        }
    }
}
