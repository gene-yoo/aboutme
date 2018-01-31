import React, { Component } from "react";
import { Grid, Transition } from "semantic-ui-react";
import { withRouter, Switch, Route } from "react-router-dom";
import Profile from "./Profile";
import Menu from "./Menu";
import About from "./About";
import Projects from "./Projects";

class Home extends Component {
	constructor(props) {
		super(props);

		this.state = {
			content: true
		};
	}

	componentDidMount() {
		console.log("inside home, comp did mount");
		console.log("----------------------------");
	}

	render() {
		console.log("inside home, render");
		console.log("state: ", this.state);
		console.log("----------------------------");
		return (
			<Switch>
				<Route
					exact
					path="/about"
					render={() => {
						return (
							<Transition
								animation={"fade"}
								duration={1000}
								transitionOnMount={true}
							>
								<Grid container stackable columns={3}>
									<Grid.Column style={{ width: "30%" }}>
										<Grid.Row style={{ height: "100px" }} />
										<Profile />
										<Menu />
									</Grid.Column>
									<Grid.Column style={{ width: "70%" }}>
										<Grid.Row style={{ height: "100px" }} />
										<About />
									</Grid.Column>
								</Grid>
							</Transition>
						);
					}}
				/>
				<Route
					exact
					path="/projects"
					render={() => {
						return (
							<Transition
								animation={"fade up"}
								duration={1000}
								transitionOnMount={true}
							>
								<Grid container stackable columns={3}>
									<Grid.Column style={{ width: "30%" }}>
										<Grid.Row style={{ height: "100px" }} />
										<div
											style={{
												position: "fixed"
											}}
										>
											<Profile />
											<Menu />
										</div>
									</Grid.Column>

									<Grid.Column style={{ width: "70%" }}>
										<Grid.Row style={{ height: "100px" }} />
										<Projects />
									</Grid.Column>
								</Grid>
							</Transition>
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
							<Transition
								animation={"fade"}
								duration={1200}
								transitionOnMount={true}
							>
								<Grid container columns={2}>
									<Grid.Column>
										<Grid.Row style={{ height: "100px" }} />
										<Profile />
										<Menu />
									</Grid.Column>
								</Grid>
							</Transition>
						);
					}}
				/>
			</Switch>
		);
	}
}

export default withRouter(Home);
