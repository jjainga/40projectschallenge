
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom"
//Pages
import Home from "./components/Home"
import Color from "./components/ColorFlip"
import Counter from "./components/Counter"
import Calculator from "./components/Calculator"
//Components
import Navigate from "./components/Nav/navigate"


function App() {
  return (
    <Router>
      <div>
        <Navigate />
          <Route exact path="/40projectchallenge" component={Home} />
          <Route exact path="/Color" component={Color} />
          <Route exact path="/Counter" component={Counter} />
          <Route exact path="/Calculator" component={Calculator} />
      </div>
    </Router>
  );
}

export default App;



