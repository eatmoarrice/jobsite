import React from "react";
import JobCard from "./JobCard";
import Container from "react-bootstrap/Container";

export default function Jobs(props) {
	let jobs = props.jobs;
	return <Container>{jobs && jobs.map((item) => <JobCard job={item} key={item.id} />)}</Container>;
}
