import React from "react";
import MainPage from "./components/MainPage/MainPage";
import ProfilePage from './components/ProfilePage/ProfilePage'
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route path="/dogs/:id" component={ProfilePage} />
    </Switch>
  );
}

export default App;
