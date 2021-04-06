import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function About(){

      return (<div>
       <h1> The about page </h1>
    </div>

    );
}

function Home() {

    return (<div>
       <h1> The Fucking Home</h1>
    </div>

    );
}


export {About,Home};