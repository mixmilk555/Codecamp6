import React, { useState } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Counter from './Counter'
import Clock from './Clock'
import Count from './reacthook/usestate'
import Context from './context'
import Home from './reactcontext/home'
import Reducer from './useReducer/Reducer'
import Apps from './antd/table'

function App() {
  const [state, setState] = useState({ content: "Hello World" })
  return (       //ใส่ component ได้ 2แบบ
    <Context.Provider value={{ state, setState }}>
      <Switch>
        <Route exact path='/'>   <Apps/>  </Route>
        {/* <Route exact path='/'>   <Home />  </Route> */}
        {/* <Route path='/count'>   <Count />  </Route>
        <Route path='/clock' component={Clock}></Route>
        <Route path='/reducer' component={Reducer}></Route> */}
      </Switch>
    </Context.Provider>
  );
}

export default App;
