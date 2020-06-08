import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import moment from "moment";

export default function Details() {
	const { id } = useParams();
	const [job, setJob] = useState(null);
	const getData = async () => {
		let url = `${process.env.REACT_APP_BACKEND_SERVER_URL}/jobs/${id}`;
		let data = await fetch(url);
		let result = await data.json();
		setJob(result);
	};
	console.log("job here", job);
	useEffect(() => {
		getData();
	}, []);
	if (job === null) {
		return <div>loading...</div>;
	}
	return (
		<div className="container h-100 align-items-center justify-content-center d-flex">
			<div className="bigcard d-flex justify-content-center">
				<div className="d-flex flex-column align-items-center">
					<div className="companyPic">
						<img width="100px" src={`${job.img}`} />
					</div>
					<div>
						{job.tags.map((item, i) => {
							return (
								<span key={i} className="tags badge">
									{item}
								</span>
							);
						})}
					</div>
				</div>
				<div className="flex-column align-items-center border-left card-right">
					<div>
						<h3>{job.title}</h3>
					</div>
					<div>
						{job.benefits.map((item, i) => {
							return (
								<span key={i} className="benefits badge">
									{item}
								</span>
							);
						})}
					</div>
					<div>{moment(job.time).fromNow()}</div>
					<div>
						<span className="money">${job.salary}</span>
					</div>
					<div>
						<i className="fas fa-globe-asia"></i> {job.city}
					</div>
					<div className="description">{job.description}</div>
				</div>
			</div>
		</div>
	);
}
