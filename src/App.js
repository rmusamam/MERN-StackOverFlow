import "./styles.css";
import Header from "./compnents/Header/Header";
import StackOverflow from './compnents/StackOverflow'
// import {BrowsReporter as Router,Switch,Route,Redirect } from react-router-dom
import { Switch } from "react-router-dom";


 function App() {
  return (
    <div className="App">
    <Router>
    <Header />
      <Switch>
        <Route exact path='/' component={StackOverflow}  />
      </Switch>
    </Router>
    <StackOverflow />
    </div>
  );
}

export default App