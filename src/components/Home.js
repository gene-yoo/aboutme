import React, { Component } from "react";
import { Grid, Header, Image, Transition, Divider } from "semantic-ui-react";
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

	render() {
		return (
			<Grid centered>
				<Switch>
					<Route
						exact
						path="/about"
						render={() => (
							<Transition
								animation={"fade"}
								duration={1750}
								visible={this.state.content}
								transitionOnMount={true}
							>
								<Grid.Row columns={3}>
									<Grid.Column style={{ minWidth: "400px", maxWidth: "400px" }}>
										<Grid.Row style={{ height: "100px" }} />
										<Profile />
										<Menu />
									</Grid.Column>
									<Grid.Column style={{ minWidth: "400px", maxWidth: "800px" }}>
										<Grid.Row style={{ height: "100px" }} />
										<About />
									</Grid.Column>
								</Grid.Row>
							</Transition>
						)}
					/>
					<Route
						exact
						path="/projects"
						render={() => (
							<Transition
								animation={"fade"}
								duration={1750}
								visible={this.state.content}
								transitionOnMount={true}
							>
								<Grid.Row columns={3}>
									<Grid.Column style={{ minWidth: "400px", maxWidth: "400px" }}>
										<Grid.Row style={{ height: "100px" }} />
										<div>
											<Profile />
											<Menu />
										</div>
									</Grid.Column>
									<Grid.Column style={{ minWidth: "400px", maxWidth: "800px" }}>
										<Grid.Row style={{ height: "100px" }} />
										<Projects />
									</Grid.Column>
								</Grid.Row>
							</Transition>
						)}
					/>
					<Route
						exact
						path="/"
						render={() => (
							<Transition
								animation={"fade"}
								duration={1750}
								visible={this.state.content}
								transitionOnMount={true}
							>
								<Grid.Column style={{ minWidth: "400px", width: "25%" }}>
									<Grid.Row style={{ height: "100px" }} />
									<Profile />
									<Menu />
								</Grid.Column>
							</Transition>
						)}
					/>
				</Switch>
			</Grid>
		);
	}
}

export default withRouter(Home);
