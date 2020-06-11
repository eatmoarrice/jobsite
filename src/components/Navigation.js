import React from "react";
import { Row, Col, Button, Container, Navbar, Nav, Form, Spinner } from "react-bootstrap";
import { useHistory, useLocation, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export default function Navigation() {
	const user = useSelector((state) => state.user);
	return (
		<div>
			<Navbar
				style={{
					display: "flex",
					flexDirection: "column",
					backgroundColor: "black"
				}}
				variant="dark"
			>
				<Row
					// className="mb-5"
					style={{
						width: "100%",
						alignItems: "center",
						justifyContent: "space-between"
					}}
				>
					<Navbar.Brand href="/" style={{ minHeight: "50px" }}></Navbar.Brand>
					<Nav style={{ color: "white", fontWeight: "500" }}>
						<Link to="/jobs" style={{ textDecoration: "none", color: "gray", marginRight: "20px" }}>
							Jobs
						</Link>
						{user.isAuthenticated ? (
							<Link to="/logout" style={{ textDecoration: "none", color: "gray" }}>
								Log out
							</Link>
						) : (
							<Link to="/login" style={{ textDecoration: "none", color: "gray" }}>
								Log in
							</Link>
						)}
					</Nav>
				</Row>
			</Navbar>
		</div>
	);
}
