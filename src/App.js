import { Input } from "@nextui-org/react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import AllCampaigns from "./components/AllCampaigns";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/all" exact component={() => <Dashboard Component={AllCampaigns} />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
