import React, { Component } from "react";
import { Grid, Header, Image, Transition } from "semantic-ui-react";
import Menu from "./Menu";

class Home extends Component {
	constructor(props) {
		super(props);

		this.state = {
			content: false
		};
	}

	componentDidMount() {
		this.setState(
			{
				content: true
			},
			() => console.log("inside comp did mount, state: ", this.state)
		);
	}

	render() {
		return (
			<Transition
				animation={"fade"}
				duration={1750}
				visible={this.state.content}
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

						<Menu />
					</Grid.Column>
				</Grid>
			</Transition>
		);
	}
}

export default Home;
