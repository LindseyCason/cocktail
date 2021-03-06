import "./App.css";
import { DrinkList } from "./components/DrinkList";
import { DrinkDetails } from "./components/DrinkDetailsModal";
import { RandomDrink } from "./components/RandomDrink";
import { Nav } from "./components/Nav";
import { MainMenu } from "./components/MainMenu";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path="/random">
            <RandomDrink />
          </Route>
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
          <Route path="/champagne">
            <DrinkList />
          </Route>
          <Route path="/brandy">
            <DrinkList />
          </Route>
          <Route path="/scotch">
            <DrinkList />
          </Route>
          <Route path="/tequila">
            <DrinkList />
          </Route>
          <Route path="/non-alcoholic">
            <DrinkList />
          </Route>
          <Route path="/:id">
            <DrinkDetails />
          </Route>
          <Route path="/search/">
            <DrinkList />
          </Route>
        </Switch>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
