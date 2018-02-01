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
								{this.state.mobile ? (
									<Grid
										container
										centered
										stackable
										columns={2}
										padded={"vertically"}
									>
										<Grid.Column style={{ width: "100%" }}>
											<About />
										</Grid.Column>
									</Grid>
								) : (
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
													position: "fixed"
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
								)}
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
								{this.state.mobile ? (
									<Grid
										container
										centered
										stackable
										columns={3}
										padded={"vertically"}
									>
										<Grid.Column style={{ width: "100%" }}>
											<Projects />
										</Grid.Column>
									</Grid>
								) : (
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
													position: "fixed"
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
								)}
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
								visibility={this.state.content}
							>
								<Grid
									centered
									container
									columns={2}
									verticalAlign={"middle"}
									padded="vertically"
								>
									{this.state.mobile ? (
										<Grid.Column style={{ width: "100%" }}>
											<Profile />
											<Menu />
										</Grid.Column>
									) : (
										<Grid.Column style={{ width: "30%" }}>
											<Profile />
											<Menu />
										</Grid.Column>
									)}
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
