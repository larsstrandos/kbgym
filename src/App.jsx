import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact>
            Home
          </Route>
          <Route path="/om-oss/" exact>
            Om oss
          </Route>
          <Route path="/pt/" exact>
            PT
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
