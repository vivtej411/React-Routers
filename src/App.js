import { Route, Switch, Redirect } from "react-router-dom";
import AllQuotes from "./pages/AllQuotes";
import QuoteDetail from "./pages/QuoteDetail";
import NewQuote from "./pages/NewQuote";
import Layout from "./components/layout/Layout";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/quotes"></Redirect>
        </Route>
        <Route path="/quotes" exact>
          <AllQuotes></AllQuotes>
        </Route>
        <Route path="/quote/:quoteId">
          <QuoteDetail></QuoteDetail>
        </Route>
        <Route path="/new-quote">
          <NewQuote></NewQuote>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
