import React, { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from "react-router-dom";
import Home from "./components/Home";
import Jobs from "./components/Jobs";
import Login from "./components/Login";
import Details from "./components/Details";
import { useDispatch, useSelector } from "react-redux";
import Logout from "./components/Logout";

function App() {
	const FourOhFourPage = () => {
		return (
			<div className="four04">
				<h1>404 Not Found</h1>
				<img className="img-fluid" src="https://cdn.pixabay.com/photo/2017/04/06/21/55/confused-snail-2209386_960_720.png" alt="confused snail" />
			</div>
		);
	};
	const user = useSelector((state) => state.user);
	const ProtectedRoute = (props) => {
		if (user.isAuthenticated === true) {
			return <Route {...props} />;
		} else {
			return <Redirect to="/login" />;
		}
	};

	return (
		<div className="App">
			<Router>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/jobs" component={Jobs} />
					<Route exact path="/logout" component={Logout} />
					<Route exact path="/login" component={Login} />
					<ProtectedRoute exact path="/jobs/:id" render={(props) => <Details {...props} />} />
					<Route path="*" component={FourOhFourPage} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
