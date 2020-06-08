import React from "react";
import { useHistory } from "react-router-dom";
import Badge from "react-bootstrap/Badge";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import moment from "moment";

export default function JobCard(props) {
	let history = useHistory();
	let job = props.job;
	const jobSelect = () => {
		history.push(`/jobs/${job.id}`);
	};

	return (
		<div className="job-content border jobcard" onClick={() => jobSelect()}>
			<Row>
				<Col>
					<div className="jobcard-logo">
						<img src={job.img} className="logo" width="100px" />
					</div>
				</Col>
				<Col xs={8}>
					<div className="jobcard-descriptions">
						<h2 className="jobcard-title">{job.title}</h2>
						<div>$ {job.salary}</div>
						<div>
							<ul className="benefit-list">
								{job.benefits.map((benefit) => (
									<li>{benefit}</li>
								))}
							</ul>
						</div>
						<div>
							{job.tags.map((tag) => (
								<Badge variant="secondary" className="badge-style category">
									{tag}
								</Badge>
							))}
						</div>
					</div>
				</Col>
				<Col>
					<div className="date-location-box">
						{job.isHotjob ? <div className="hotjob-label">Hot Job</div> : <div></div>}

						<div className="jobcard-location">
							<div>{job.city}</div>
							<div>District {job.district}</div>
						</div>
						<div className="job-time">{moment(job.time).fromNow()}</div>
					</div>
				</Col>
			</Row>
		</div>
	);
}
