import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import { withRouter, Switch, Route } from "react-router-dom";
import Profile from "./Profile";
import Menu from "./Menu";
import About from "./About";
import Projects from "./Projects";

class Home extends Component {
	constructor(props) {
		super(props);

		this.state = {
			content: true,
			mobile: false
		};
	}

	componentDidMount() {
		console.log("inside home, comp did mount");
		console.log("----------------------------");
		this.checkMobileDisplay();
		window.addEventListener("resize", this.checkMobileDisplay);
	}

	componentWillUnmount() {
		console.log("inside home, comp will unmount");
		console.log("----------------------------");
		window.removeEventListener("resize", this.checkMobileDisplay);
	}

	checkMobileDisplay = () => {
		console.log("inside home, check mobile display");
		console.log("state: ", this.state);
		console.log("----------------------------");

		if (window.innerWidth <= 800) {
			this.setState({ mobile: true });
		} else {
			this.setState({ mobile: false });
		}
	};

	render() {
		console.log("inside home, render");
		console.log("state: ", this.state);
		console.log("----------------------------");
		return (
			<Grid
				container
				centered
				stackable
				columns={2}
				style={{ marginTop: "2%" }}
			>
				<Switch>
					<Route
						exact
						path="/about"
						render={() => {
							return this.state.mobile ? (
								<Grid.Column style={{ width: "100%" }}>
									<About mobile={this.state.mobile} />
								</Grid.Column>
							) : (
								<Grid.Row>
									<Grid.Column style={{ width: "30%" }}>
										<Profile fontSize={"3em"} mobile={this.state.mobile} />
										<Menu fontSize={"3em"} />
									</Grid.Column>
									<Grid.Column style={{ width: "70%" }}>
										<About mobile={this.state.mobile} />
									</Grid.Column>
								</Grid.Row>
							);
						}}
					/>
					<Route
						exact
						path="/projects"
						render={() => {
							return this.state.mobile ? (
								<Grid.Column style={{ width: "100%" }}>
									<Projects mobile={this.state.mobile} />
								</Grid.Column>
							) : (
								<Grid.Row>
									<Grid.Column style={{ width: "30%" }}>
										<Profile fontSize={"3em"} mobile={this.state.mobile} />
										<Menu fontSize={"3em"} />
									</Grid.Column>

									<Grid.Column style={{ width: "70%" }}>
										<Projects mobile={this.state.mobile} />
									</Grid.Column>
								</Grid.Row>
							);
						}}
					/>
					<Route
						exact
						path="/"
						render={() => {
							console.log("inside switch /root, render");
							console.log("----------------------------");

							return (
								<Grid.Column>
									<Grid.Row>
										<Profile
											fontSize={this.state.mobile ? "2em" : "3em"}
											mobile={this.state.mobile}
										/>
										<Menu fontSize={this.state.mobile ? "2em" : "3em"} />
									</Grid.Row>
								</Grid.Column>
							);
						}}
					/>
				</Switch>
			</Grid>
		);
	}
}

export default withRouter(Home);
