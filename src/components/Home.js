import React, { Component } from "react";
import { Grid, Header, Image, Transition } from "semantic-ui-react";
import { withRouter, Switch, Route } from "react-router-dom";
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
				<Grid centered columns={2}>
					<Grid.Column style={{ minWidth: "400px", width: "25%" }}>
						<Grid.Row style={{ height: "100px" }} />

						<Grid.Row style={{ height: "275px", marginBottom: "10px" }}>
							<Image
								src="https://i.imgur.com/kzNKPA8.jpg"
								size="small"
								circular
							/>
							<Header as="h2" style={{ fontSize: "3em" }}>
								{"gene yoo"}
							</Header>
						</Grid.Row>

						<Switch>
							<Route
								exact
								path="/about"
								render={() => (
									<div>
										<About />
									</div>
								)}
							/>
							<Route
								exact
								path="/projects"
								render={() => (
									<div>
										<Projects />
									</div>
								)}
							/>
							<Route exact path="/" render={() => <Menu />} />
						</Switch>
					</Grid.Column>
				</Grid>
			</Transition>
		);
	}
}

export default withRouter(Home);
