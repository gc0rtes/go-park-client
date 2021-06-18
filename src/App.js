import React, { useEffect } from "react";
import "./App.css";

import { Switch, Route } from "react-router-dom";

// A bootstrap spining styling
// import Loading from "./components/Loading";

//to manage the messages from the routers
import MessageBox from "./components/MessageBox";

//Load Pages
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Events from "./pages/Events";

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
      {isLoading ? "Loading" : null}
      <Switch>
        <Route exact path="/" component={Events} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
      </Switch>
    </div>
  );
}

export default App;
