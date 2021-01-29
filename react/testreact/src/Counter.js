import React from "react"
import { Link } from 'react-router-dom';

export default class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0
        }
        console.log("Counter component is starting to mount to the DOM")
        // this.addCounter = this.addCounter.bind(this) //bind เพื่อให้ class รู้ว่ามี function นี้อยู่
        // this.subtractCounter = this.subtractCounter.bind(this)
        // this.resetCounter = this.resetCounter.bind(this)
    }
    componentDidMount() {
        return console.log("Counter component has been mounted into the DOM")
    }
    componentDidUpdate() {
        console.log("Counter component has been update")
    }
    componentWillUnmount() {
        console.log("Counter component is going to unmount off the DOM")
    }
    addCounter = () => {
        this.setState(() => ({ counter: this.state.counter + 1 }))
        //this.setState((state)=>({counter:state.counter + 1 })) state แทน this.state 
    }
    subtractCounter = () => {
        this.setState({ counter: this.state.counter - 1 })
    }
    resetCounter = () => {
        this.setState((state) => ({ counter: 0 }))
        // this.setState(()=>({ counter: this.state.counter * 0 }))
        //this.setState({ counter: 0 })
    }
    render() {
        return <p>
            <Link to='/clock'>Clock app</Link>
            <h1>{this.state.counter}</h1>
            <button onClick={() => this.setState(({ counter: this.state.counter + 1 }))}>+</button>
            <button onClick={this.subtractCounter}>-</button>
            <button onClick={this.resetCounter}>reset</button>
        </p>
    }
}
