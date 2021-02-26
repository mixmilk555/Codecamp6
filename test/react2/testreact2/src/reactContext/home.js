import React, { useContext } from 'react';
import logo from '../logo.svg';
import { Switch, Route, Link } from 'react-router-dom';
import context from '../context';


const Home = () => {
    const { state, setState } = useContext(context)  // ใช้ แบบ useContext
    return (
        <div className="App">
            <header className="App-header">
                <div><Link to="/count" style={{ color: "wheat" }}>Count</Link> <span style={{ paddingLeft: "20px" }}>
                    <Link to="/clock" style={{ color: "wheat" }}>Clock</Link></span></div>

                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                    <span>{state.name}</span>
                </p>
                <button onClick={() => setState({ name: "Hello Mix" })}> Click Change Word</button>
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="nor"> Learn React </a>
            </header>
        </div>)
}


export default Home;