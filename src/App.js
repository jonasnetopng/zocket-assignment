import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import AllCampaigns from "./components/AllCampaigns";
import "./App.css";
import AddCampaign from "./components/AddCampaign";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={() => <Redirect to="/all" />} />
        <Route path="/all" exact component={() => <Dashboard Component={AllCampaigns} />} />
        <Route path="/add" exact component={() => <Dashboard Component={AddCampaign} />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
