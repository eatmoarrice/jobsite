import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export default function Login() {
	const user = useSelector((state) => state.user);
	const dispatch = useDispatch();
	const history = useHistory();
	let email;
	let password;
	const login = (e) => {
		e.preventDefault();
		let tempUser = { email: email, password: password };
		dispatch({ type: "LOGIN", payload: tempUser });
		history.goBack();
	};
	return (
		<div className="login-bg  d-flex align-items-center justify-content-center">
			<Form onSubmit={(e) => login(e)}>
				<h3 className="text-center">
					<img src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_960_720.png" width="50px" />
					Login
				</h3>
				<Form.Group controlId="formBasicEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control type="email" placeholder="Enter email" onChange={(e) => (email = e.target.value)} />
					<Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
				</Form.Group>

				<Form.Group controlId="formBasicPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control type="password" placeholder="Password" onChange={(e) => (password = e.target.value)} />
				</Form.Group>
				<Button variant="primary" type="submit">
					Submit
				</Button>
			</Form>
		</div>
	);
}
