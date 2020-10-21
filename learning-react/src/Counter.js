import React from "react"

export default class Counter extends React.Component{
    constructor(props){
        super(props)
        this.state = { 
            counter : 0
        }

        // this.addCounter = this.addCounter.bind(this) //bind เพื่อให้ class รู้ว่ามี function นี้อยู่
        // this.subtractCounter = this.subtractCounter.bind(this)
        // this.resetCounter = this.resetCounter.bind(this)
    }
    
    addCounter(){
        this.setState(function(state){
         return {
             counter: state.counter +1
         }
        })
    }
    subtractCounter(){
        this.setState(function(state){
            return{
                counter :state.counter -1 
            }
        })
    }
    resetCounter(){
        this.setState(function(state){
            return{
                counter : state.counter *0
            }
        })
    }
    render(){
        return <div>
            <h1>{this.state.counter}</h1>
            <button onClick={this.addCounter}>+</button>
            <button onClick={this.subtractCounter}>-</button>
            <button onClick={this.resetCounter}>reset</button>
        </div>
    }
}
