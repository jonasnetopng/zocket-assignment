import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import AllCampaigns from "./components/AllCampaigns";
import "./App.css";
import AddCampaign from "./components/AddCampaign";
import useCommonStore from "./Store/store";
import { useEffect } from "react";

function App() {
  // getCampaigns is the request to call data from api, this is too from store
  const getCampaigns = useCommonStore((state) => state.getCampaigns);
  useEffect(() => {
    // loading on first load
    getCampaigns();
  }, [getCampaigns]);

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
