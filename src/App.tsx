import { useEffect } from "react";
import axios from "axios";

import "./styles/main.scss";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import {
  AddBid,
  Detail,
  Listings,
  Login,
  Signup,
  AddListing,
} from "./components";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="/login" />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/listings" component={Listings} />
        <Route exact path="/detail/:id" component={Detail} />
        <Route exact path="/addListing" component={AddListing} />
        <Route exact path="/addbid/:listingId" component={AddBid} />
      </Switch>
    </Router>
  );
};

export default App;
