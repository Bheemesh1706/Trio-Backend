
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
 import Navbar from './Components/nav'
import { Form } from './LoginComponent/form';



function App() {
  return (
    <Router>
    <div className="App">
        <Navbar/>
        <div className="main">
        <div className="left"></div>
        <Switch>
          <Route path="/login">
            <Form page="Login"/>
          </Route>
          <Route path="/">
            <Form page="Register"/>
          </Route>
        </Switch>
        </div>
    
    </div>

   
  </Router>);
}


export default App;
