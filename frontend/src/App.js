
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Navbar from './Components/nav'
import { RegisterForm } from './LoginComponent/RegisterForm';
import {LoginForm} from './LoginComponent/LoginForm'



function App() {
  return (
    <Router>
    <div className="App">
        <Navbar/>
        <div className="main">
        <div className="left"></div>
        <Switch>
          <Route path="/login">
            <LoginForm/>
          </Route>
          <Route path="/">
            <RegisterForm/>
          </Route>
        </Switch>
        </div>
    
    </div>

   
  </Router>);
}


export default App;
