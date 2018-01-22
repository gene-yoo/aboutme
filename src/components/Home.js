import React, { Component } from "react";
import { Grid, Header, Image } from "semantic-ui-react";
import Menu from "./Menu";

class Home extends Component {
	render() {
		return (
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
		);
	}
}

export default Home;
