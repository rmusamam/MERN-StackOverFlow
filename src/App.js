import "./styles.css";
import Header from "./compnents/Header/Header";
import StackOverflow from './compnents/StackOverflow';  
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom';
// import { Switch } from "react-router-dom";


 function App() {
  return (
    <div className="App">
    <Router>
    <Header />
      <Routes>
        <Route  path='/' element= {  <StackOverflow />   }>
           
        </Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App