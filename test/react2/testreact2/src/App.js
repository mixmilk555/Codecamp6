import logo from './logo.svg';
import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import Count from './reactHook/usestate'
import context from './context'
import Home from './reactContext/home'
import { useState } from 'react';
import tableStudent  from './antd/table'
import Grid from './antd/grid'

function App() {
  const [state, setState] = useState({ name: "Por" })
  return (
    <context.Provider value={{ state, setState }}>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} ></Route>
          <Route path='/table' component={tableStudent}></Route>
          <Route path='/grid' component={Grid}></Route>
          <Redirect to="/" />
        </Switch>
      </div>
    </context.Provider>
  );
}

export default App;
