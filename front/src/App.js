import logo from './logo.svg';
import './App.css';
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ConsultaForm from './components/ConsultaForm';
import Answer from './components/Answer';

function App() {
  return (
    <>
    <Switch>
      <Route path="/">
      <Navbar/>
      <Route exact path="/" component={ConsultaForm}/>
      <Route exact path="/answer" component={Answer}/>
      </Route>
    </Switch>
    </>
    
  );
}

export default App;
