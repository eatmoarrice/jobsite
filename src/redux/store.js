import React from "react";
import "../index.css";
import { createStore } from "redux";

const initialState = {
	user: { email: "", password: "", isAuthenticated: false }
};

const reducer = (state = initialState, action) => {
	if (action.type === "LOGIN") {
		state.user = action.payload;
		state.user.isAuthenticated = true;
	}

	if (action.type === "LOGOUT") {
		state.user = { email: "", password: "", isAuthenticated: false };
	}

	return state;
};

const store = createStore(reducer);
export default store;
