import React, { useEffect } from "react";
import "./App.css";

import { Switch, Route } from "react-router-dom";

// TODO: A bootstrap spining styling
// import Loading from "./components/Loading";

//to manage the messages from the routers
import MessageBox from "./components/MessageBox";

//Load Pages
import Navbar from "./components/Navigation";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

import EventDetails from "./pages/EventDetails";
import PostEvent from "./pages/PostEvent";
import SearchEvent from "./pages/SearchEvent";
import LandPage from "./pages/LandPage";

import { useDispatch, useSelector } from "react-redux";
import { selectAppLoading } from "./store/appState/selectors";
import { getUserWithStoredToken } from "./store/user/actions";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAppLoading);

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  return (
    <div className="App">
      <MessageBox />
      {isLoading ? "Loading App" : null}
      <Navbar />
      <Switch>
        <Route exact path="/" component={LandPage} />
        <Route exact path="/landpage" component={LandPage} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/postevent" component={PostEvent} />
        <Route path="/search" component={SearchEvent} />
        <Route path="/event/:id" component={EventDetails} />
      </Switch>
    </div>
  );
}

export default App;
