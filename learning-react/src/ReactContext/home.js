import React, { useContext } from 'react';
import logo from '../logo.svg';
import Context, { Context2 } from '../Context'
import { Switch, Route, Link } from 'react-router-dom';


const Home = () => {
    // const { state, setState } = useContext(Context2)
    return (
        <Context2.Consumer>{ ({state,setState}) => (<div className="App">
            <header className="App-header">
                <div><Link to="/ex" style={{ color: "wheat" }}>Example</Link> <span style={{ paddingLeft: "20px" }}>
                    <Link to="/counter2" style={{ color: "wheat" }}>Counter2</Link></span></div>

                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                <span>{state[0].content}</span>
                </p>
                <button onClick={() => setState([{ content: "Hello Mix" }])}> Click Change Word</button>
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="nor"> Learn React </a>
            </header>
        </div>)
        }
        </Context2.Consumer>

    )
}
export default Home;