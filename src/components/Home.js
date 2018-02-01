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
								<Grid
									container
									centered
									stackable
									columns={3}
									padded={"vertically"}
								>
									<Grid.Column style={{ width: "30%" }}>
										<div
											style={{
												position: "fixed",
												paddingTop: "50px"
											}}
										>
											<Profile />
											<Menu />
										</div>
									</Grid.Column>
									<Grid.Column style={{ width: "70%" }}>
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
								<Grid
									container
									centered
									stackable
									columns={3}
									padded={"vertically"}
								>
									<Grid.Column style={{ width: "30%" }}>
										<div
											style={{
												position: "fixed",
												paddingTop: "50px"
											}}
										>
											<Profile />
											<Menu />
										</div>
									</Grid.Column>

									<Grid.Column style={{ width: "70%" }}>
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
								<Grid
									centered
									container
									columns={2}
									verticalAlign={"middle"}
									padded="vertically"
								>
									<Grid.Column>
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
