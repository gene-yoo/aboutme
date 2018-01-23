import React, { Component } from "react";
import "./App.css";
import Home from "./components/Home";
import { withRouter } from "react-router-dom";

class App extends Component {
	render() {
		return <Home />;
	}
}

export default withRouter(App);
