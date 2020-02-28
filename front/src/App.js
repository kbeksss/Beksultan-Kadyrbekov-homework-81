import React from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";
import Main from "./containers/Main/Main";

function App() {
  return (
    <Switch>
      <Route path='/' component={Main}/>
    </Switch>
  );
}

export default App;
