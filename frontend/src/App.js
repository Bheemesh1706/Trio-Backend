
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import OnlineUsers from './Components/OnlineUsers'
import Navbar from './Components/nav'
import { RegisterForm } from './LoginComponent/RegisterForm';
import {LoginForm} from './LoginComponent/LoginForm'
import Chat from './ChatComponents/Chat'
import useLocalStorage from './hooks/uselocalstorage'




function App() {

  const usernameProps = useLocalStorage('username')

  return (
    <Router>
    <div className="App">
        <Navbar usernameProps = {usernameProps} />
        <div className="main">
        <div className="left">
          <Switch>
            <Route path="/chatRoom">
              <OnlineUsers/>
            </Route>
          </Switch>
        </div>
        <Switch>
          <Route path="/login">
            <LoginForm usernameProps = {usernameProps} />
          </Route>
           <Route path="/chatRoom">
            <Chat/>
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
