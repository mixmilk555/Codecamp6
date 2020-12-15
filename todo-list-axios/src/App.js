import logo from './logo.svg';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './component/pages/Login';
import Index from './component/pages/Index';
import Register from './component/pages/Register';
import Profile from './component/pages/Profile';

function App() {
  return (
    <div className="App">
    {/* เรียก component อีกแบบหนึ่งโดยใช้เป็น attbuite  */}
      <Switch>
        <Route exact path="/" component={Index} />
        <Route path="/login" component={Login}></Route>
        <Route path="/register" component={Register}></Route>
        <Route path="/profile" component={Profile}></Route>
        <Redirect to="/" />
      </Switch>
      
      {/*   ใช้ Route อีกแบบ คือ เรียก <Component>
      <Switch>
          <Route exact path="/" />  <Index />
          <Route path="/login" >    <Login />      </Route>
          <Route path="/register" > <Register /> </Route>
          <Route path="/profile" >  <Profile />     </Route>
             <Redirect to="/" /> 
      </Switch> */}
    </div >
  );
}

export default App;
