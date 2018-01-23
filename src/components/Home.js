import React, { Component } from "react";
import { Grid, Header, Image, Transition } from "semantic-ui-react";
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
			<Transition
				animation={"fade"}
				duration={1750}
				visible={this.state.content}
				transitionOnMount={true}
			>
				<Grid centered>
					<Switch>
						<Route
							exact
							path="/about"
							render={() => (
								<Grid.Column style={{ minWidth: "400px", width: "25%" }}>
									<Grid.Row style={{ height: "100px" }} />
									<About />
								</Grid.Column>
							)}
						/>
						<Route
							exact
							path="/projects"
							render={() => (
								<Grid.Column style={{ minWidth: "400px", width: "25%" }}>
									<Grid.Row style={{ height: "100px" }} />
									<Projects />
								</Grid.Column>
							)}
						/>
						<Route
							exact
							path="/"
							render={() => (
								<Grid.Column style={{ minWidth: "400px", width: "25%" }}>
									<Grid.Row style={{ height: "100px" }} />
									<Profile />
									<Menu />
								</Grid.Column>
							)}
						/>
					</Switch>
				</Grid>
			</Transition>
		);
	}
}

export default withRouter(Home);
