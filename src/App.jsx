import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="flex flex-col h-screen justify-between">
        <Header />
        <main class="mb-auto">
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
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
