import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row, Col, Button, Container, Navbar, Nav, Form, Spinner } from "react-bootstrap";
import Moment from "react-moment";
import { useHistory, useLocation, Link } from "react-router-dom";
import JobCard from "./JobCard";
import { useDispatch, useSelector } from "react-redux";
const QUERYSTR_PREFIX = "q";
function useQuery() {
	return new URLSearchParams(useLocation().search);
}
let originalList = [];
export default function Jobs() {
	const user = useSelector((state) => state.user);
	let history = useHistory();
	let query = useQuery();
	const [jobList, setJobList] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	let [keyword, setKeyword] = useState(query.get(QUERYSTR_PREFIX));

	const handleSearch = (e) => {
		setIsLoading(true);
		let filteredJobs = [];
		if (e) {
			e.preventDefault();
			history.push(`/jobs/?${QUERYSTR_PREFIX}=${encodeURIComponent(keyword)}`);
		}

		if (keyword) {
			if (jobList.length === 0) {
				setJobList(originalList);
			}
			setKeyword(keyword);
			filteredJobs = originalList.filter((job) => job.title.toLowerCase().includes(keyword.toLowerCase()));
			setJobList(filteredJobs);
		}
		setTimeout(() => setIsLoading(false), 1000);
	};

	const handleOnChange = (e) => {
		if (e.target.value === "") {
			setIsLoading(true);
			if (originalList.length !== 0) {
				setJobList(originalList);
			}

			history.replace("/jobs/");
			setTimeout(() => setIsLoading(false), 1000);
		}
		setKeyword(e.target.value);
	};

	useEffect(() => {
		axios.get(`${process.env.REACT_APP_BACKEND_SERVER_URL}/jobs`).then((res) => {
			const jobs = res.data;
			originalList = jobs;
			setJobList(jobs);
			handleSearch();
		});
		setTimeout(() => setIsLoading(false), 1000);
	}, []);

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
					<Form className="darkNav" onSubmit={handleSearch} inline>
						<div className="form-group">
							<input value={keyword} onChange={(e) => handleOnChange(e)} type="text" placeholder="Enter keywords" className="form-control"></input>
						</div>
						<Button className="ml-3" type="submit" variant="danger" style={{ height: "40px", width: "100px", fontWeight: "bolder" }}>
							Search
						</Button>
					</Form>
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
			{isLoading ? (
				<div style={{ display: "flex", justifyContent: "center" }}>
					<Spinner className="mt-5" animation="border" role="status">
						<span className="sr-only"></span>
					</Spinner>
				</div>
			) : (
				<Container>
					{jobList.map((item) => (
						<JobCard job={item} key={item.id} />
					))}
				</Container>
			)}
		</div>
	);
}
