import logo from "./logo.svg";
import "./App.css";
import { DrinkItem } from "./components/DrinkItem";
import { DrinkList } from "./components/DrinkList";
import { RandomDrink } from "./components/RandomDrink";
import { Nav } from "./components/Nav";
import { NonAlcoholic } from "./components/NonAlcoholic";
import { Footer } from "./components/Footer";
import { MainMenu } from "./components/MainMenu";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <MainMenu />
        <Switch>
          <Route path="/rum">
            <DrinkItem />
          </Route>
          <Route path="/vodka">
            <DrinkItem />
          </Route>
          <Route path="/gin">
            <DrinkItem />
          </Route>
          <Route path="/whisky">
            <DrinkItem />
          </Route>
          <Route path="/scotch">
            <DrinkItem />
          </Route>
          <Route path="/tequila">
            <DrinkItem />
          </Route>
          <Route path="/random">
            <RandomDrink />
          </Route>
          <Route path="/non-alcoholic">
            <NonAlcoholic />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
