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
		console.log("----------------------------");
		return (
			<Grid centered>
				<Switch>
					<Route
						exact
						path="/about"
						render={() => {
							return (
								<Transition
									animation={"fade"}
									duration={1750}
									visible={this.state.content}
									transitionOnMount={true}
								>
									<Grid.Row columns={3}>
										<Grid.Column
											style={{ minWidth: "400px", maxWidth: "400px" }}
										>
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
										<Grid.Column
											style={{ minWidth: "800px", maxWidth: "800px" }}
										>
											<Grid.Row style={{ height: "100px" }} />
											<About />
										</Grid.Column>
									</Grid.Row>
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
									animation={"fade"}
									duration={1750}
									visible={this.state.content}
									transitionOnMount={true}
								>
									<Grid.Row columns={3}>
										<Grid.Column
											style={{
												minWidth: "400px",
												maxWidth: "400px"
											}}
										>
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
										<Grid.Column
											style={{
												minWidth: "800px",
												maxWidth: "800px"
											}}
										>
											<Grid.Row style={{ height: "100px" }} />
											<Projects />
										</Grid.Column>
									</Grid.Row>
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
							);
						}}
					/>
				</Switch>
			</Grid>
		);
	}
}

export default withRouter(Home);
