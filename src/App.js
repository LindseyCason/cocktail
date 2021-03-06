import logo from "./logo.svg";
import "./App.css";
import { DrinkCard } from "./components/DrinkCard";
import { DrinkList } from "./components/DrinkList";
import { DrinkDetails } from "./components/DrinkDetails";
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
        <Switch>
          <Route path="/" exact>
            <MainMenu />
          </Route>
          <Route path="/rum">
            <DrinkList />
          </Route>
          <Route path="/vodka">
            <DrinkList />
          </Route>
          <Route path="/gin">
            <DrinkList />
          </Route>
          <Route path="/whisky">
            <DrinkList />
          </Route>
          <Route path="/scotch">
            <DrinkList />
          </Route>
          <Route path="/tequila">
            <DrinkList />
          </Route>
          <Route path="/random">
            <RandomDrink />
          </Route>

          <Route path="/:id">
            <DrinkDetails />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
