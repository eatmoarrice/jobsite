import React from 'react'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";

export default function FilterByKeyword() {

    const searchByKeyword = (e) => {
        e.preventDefault();
        
    }
    return (
        <div>
            <Navbar bg="light" expand="lg">
				<Navbar.Brand href="/">JobMe</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					{/* <Nav className="mr-auto">
						<Nav.Link href="/">Home</Nav.Link>
						<Nav.Link href="/eatmoarrice/QuickFix/issues">QF</Nav.Link>
						<Nav.Link href="/facebook/react/issues">Facebook-React</Nav.Link>
						<Nav.Link href="/apple/swift/issues">Apple-Swift</Nav.Link>
					</Nav> */}
					<Form inline onSubmit={submitHandler}>
						<FormControl
							type="text"
							placeholder=":owner/:repo"
							className="mr-sm-2"
							onChange={(e) => {
								searchByKeyword(e);
							}}
						/>
						<Button variant="outline-success" onClick={() => startSearch()}>
							Search
						</Button>
					</Form>
				</Navbar.Collapse>
			</Navbar>
        </div>
    )
}
