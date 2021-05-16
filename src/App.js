
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom"
import Home from "./components/Home"
import Navigate from "./components/Nav/navigate"

function App() {
  return (
    <Router>
      <div>
        <Navigate />
          <Route exact path="/40projectchallenge" component={Home} />
      </div>
    </Router>
  );
}

export default App;



