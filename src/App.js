import React, { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from "react-router-dom";
import Home from "./components/Home";
import Jobs from "./components/Jobs";
import Login from "./components/Login";
import Details from "./components/Details";

function App() {
	const [jobs, setJobs] = useState(null);
	const getData = async () => {
		let url = `${process.env.REACT_APP_BACKEND_SERVER_URL}/jobs`;
		let data = await fetch(url);
		let result = await data.json();
		setJobs(result);
	};
	console.log(jobs);
	useEffect(() => {
		getData();
	}, []);

	const FourOhFourPage = () => {
		return (
			<div className="four04">
				<h1>404 Not Found</h1>
				<img className="img-fluid" src="https://cdn.pixabay.com/photo/2017/04/06/21/55/confused-snail-2209386_960_720.png" alt="confused snail" />
			</div>
		);
	};

	const ProtectedRoute = (props) => {
		let user = true;
		if (user === true) {
			return <Route {...props} />;
		} else {
			return <Redirect to="/login" />;
		}
	};

	if (jobs === null) {
		return <div>loading</div>;
	}
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/jobs" render={(props) => <Jobs {...props} jobs={jobs} />} />
					<Route exact path="/login" component={Login} />
					<ProtectedRoute exact path="/jobs/:id" render={(props) => <Details {...props} />} />
					<Route path="*" component={FourOhFourPage} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
