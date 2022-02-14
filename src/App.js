import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ModelProvider from "./context/providers/ModelProvider";
import BestProductsProvider from "./context/providers/BestProductsProvider";
import SaleProductsProvider from "./context/providers/SaleProductsProvider";
import ColorsProvider from "./context/providers/ColorsProvider";
import { HelmetProvider } from "react-helmet-async";
import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";
import NotFound from "./pages/NotFound";
import Details from "./pages/Details";
import Menu from "./components/Menu";
function App() {
  return (
    <Router>
      <ModelProvider>
        <BestProductsProvider>
          <SaleProductsProvider>
            <ColorsProvider>
              <Menu />
              <HelmetProvider>
                <Switch>
                  <Route path="/" exact component={Home} />
                  <Route path="/about" exact component={About} />
                  <Route path="/shop" exact component={Shop} />
                  <Route path="/details/:id" exact component={Details} />
                  <Route component={NotFound} exact />
                </Switch>
              </HelmetProvider>
            </ColorsProvider>
          </SaleProductsProvider>
        </BestProductsProvider>
      </ModelProvider>
    </Router>
  );
}

export default App;
