import React from "react";
import { Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";

export default function Logout() {
	// const user = useSelector((state) => state.user);
	const dispatch = useDispatch();
	dispatch({ type: "LOGOUT" });

	return <Redirect to="/jobs" />;
}
