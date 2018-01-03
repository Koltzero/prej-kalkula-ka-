import React, { Component } from 'react'
import Display from "./display"
import Keyboard from "./keyboard"

export default class Calculator extends Component {
    
    state = {
        display_value: 0,
        first_number: null,
        operation: null,
    }

    handleNumber = (e) => {
        const {display_value} = this.state;
        if(display_value == 0){
            this.setState({
                display_value: e.target.value,
            });
        }
        else{
            this.setState({
                display_value: display_value + e.target.value,
            });
        }
    }

    handleOperation = (e) => {
        const {display_value} = this.state;
        if(display_value == 0 && e.target.value === "/"){
            document.writeln("nulou se nedělí :(( zkus to prosím později");
        }

        else{
            this.setState({
                first_number: display_value,
                operation: e.target.value,
                display_value: 0,
            });
        }
    }

    handleResult = () => {
        let {display_value, first_number, operation} = this.state;
        
        if(operation != null){
            display_value = parseFloat(display_value);
            first_number = parseFloat(first_number);
            let result = 0;
            switch(operation){
                case "+":
                    result = first_number + display_value;
                    break;
                case "-":
                    result = first_number - display_value;
                    break;
                case "*":
                    result = first_number * display_value;
                    break;
                case "/":
                    result = first_number / display_value;
                    break;
                default: 
                    
                    break;
            }
            this.setState({
                display_value: result,
            });
        }
    }

    handleSpecial = () => {
        this.setState({
            display_value: 0,
            first_number: null,
            operation: null,
        });
       
    }

    
    render() {
        const {handleNumber, handleOperation, handleResult, handleSpecial} = this;
        const {display_value} = this.state;        
        return (
            <div className="keyboard calculator ">
                <h1 className="casio">prej kalkulačka®</h1>
                <Display value={display_value}/>
                <Keyboard handleNumber={handleNumber}
                    handleOperation={handleOperation} 
                    handleResult={handleResult}
                    handleSpecial={handleSpecial}
                    />
            </div>
        )
    }
}
