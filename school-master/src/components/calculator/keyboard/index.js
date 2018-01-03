import React, { Component } from 'react'
import Key from "./key";

export default class Keyboard extends Component {
    render() {
        const {handleNumber, handleOperation, handleResult, handleSpecial} = this.props;

        return (
            <div className="container-fluid">
                <div className="">
                    <Key onClick={handleNumber} value="7" style="number" />
                    <Key onClick={handleNumber} value="8" style="number" />
                    <Key onClick={handleNumber} value="9" style="number" />
                    <Key onClick={handleOperation} value="+" style="operation" />
                    <Key onClick={handleNumber} value="4" style="number" />
                    <Key onClick={handleNumber} value="5" style="number" />
                    <Key onClick={handleNumber} value="6" style="number" />
                    <Key onClick={handleOperation} value="-" style="operation" />
                    <Key onClick={handleNumber} value="1" style="number" />
                    <Key onClick={handleNumber} value="2" style="number" />
                    <Key onClick={handleNumber} value="3" style="number" />
                    <Key onClick={handleOperation} value="*" style="operation" />
                    <Key onClick={handleSpecial} value="RST" style="special" />
                    <Key onClick={handleNumber} value="0" style="number" />
                    <Key onClick={handleResult} value="=" style="result" />
                    <Key onClick={handleOperation} value="/" style="operation" />
                </div>
            </div>
        )
    }
}
