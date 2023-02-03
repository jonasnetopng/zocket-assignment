import { Input } from "@nextui-org/react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import AllCampaigns from "./components/AllCampaigns";
import "./App.css";
import AddCampaign from "./components/AddCampaign";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/all" exact component={() => <Dashboard Component={AllCampaigns} />} />
        <Route path="/add" exact component={() => <Dashboard Component={AddCampaign} />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
