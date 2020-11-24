import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';
import Article from './Component/Article';
import Counter from './Counter';
import Counter1 from './hookCounter/Counter1';
import { TodoList } from './todoHook/TodoList';
import Context, { Context2 } from './Context';
import Home from './ReactContext/home';
import Counter2 from './Reducer/Counter2';
import Example from './Reducer/Example';

function App() {
  const [state, setState] = useState([{ content: "Hello World" }]);
  return (
    <Context2.Provider value={{ state, setState }}>
      <Switch>
       <Route exact path="/"><Home /></Route> 
       <Route path="/counter2"><Counter2/></Route>
       <Route path="/ex"><Example/></Route>
      </Switch>
    </Context2.Provider>
  )
}


// 1.React-dom
// function App() {
//   return (
//     <Switch>

//       <Route exact path="/">
//         <div className="App">
//           <header className="App-header">
//           <Link to="/ss" title="ss path" style={{color:"Bisque"}}>Click me to Counter Path!</Link>
//           <Link to="aa" title="aa path" style={{color:"tomato"}}>Click me to Counter1 Path!</Link>
//             <img src={logo} className="App-logo" alt="logo" />
//             <p>
//               Edit <code> src/App.js </code> and save to reload. 

//             </p>
//             <Counter/>
//             {/* <Counter1/> */}
//           </header>
//         </div>
//       </Route>
//       <Route path="/ss"><Counter /></Route>
//       <Route path="/aa"><Counter1/></Route>
//       <Route path="/todo"><TodoList/></Route>

//     </Switch>
//   )
// }

//2
// class App extends React.Component {
//   constructor(props) {
//     console.log("[App.js] constructor")
//     super(props);
//     this.state = {
//       isShow: true,
//       article: "Hello My JavaScript World"
//     }
//     // this.onChangeVisible = this.onChangeVisible.bind(this);
//   }

//   static getDerivedStateFromProps(props, state) {
//     console.log("[App.js] getDerivedStateFromProps");
//     return state;
//   }
//   shouldComponentUpdate(nextProps, nextState) {
//     console.log("[App.js] shouldComponentUpdate")
//     return true;
//   }

//   getSnapshotBeforeUpdate(prevProps, prevState) {
//     console.log("[App.js] getSnapshotBeforeUpdate")
//     return { x: 0, y: 0 }
//   }
//   componentDidUpdate(prevProps, prevState, snapShot) {
//     console.log("[App.js] componentDidUpdate", snapShot);
//   }
//   componentDidMount() {
//     console.log("[App.js] componentDidMount")
//   }
//   onChangeVisible() {
//     this.setState((previousState) => {
//       return {
//         isShow: !previousState.isShow
//       }
//     })
//   }
//   render() {
//     console.log("[App.js] Render")
//     return (
//       <div className="App">
//         <button onClick={this.onChangeVisible.bind(this)}>Show/Hide</button><br />
//         <input value={this.state.article} onChange={(e) => this.setState({ article: e.target.value })} />
//         <br /><br />{this.state.isShow ? <Article article={this.state.article} /> : null}
//       </div>
//     );
//   }
// }

export default App;
