
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import {About,Home} from './about'

function App() {
  return (
    <Router>
    <div className="App">
  
       <Link exact={true} to="/"> Login </Link>
       <Link exact={true} to="/about"> About </Link>
    
    </div>

    <Switch>
           <Route path = "/about">
                <About/>
          </Route>
          <Route path = "/">
                <Home/>
          </Route>
          
    </Switch>
  </Router>);
}


export default App;
