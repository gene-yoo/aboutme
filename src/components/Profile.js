import React from "react";
import { Grid, Image, Header, Transition } from "semantic-ui-react";

const Profile = props => {
	console.log("inside profile, render");
	console.log("----------------------------");

	return (
		<Grid.Row style={{ height: "275px", marginBottom: "10px" }}>
			<Image src="https://i.imgur.com/kzNKPA8.jpg" size="small" circular />
			<Header as="h2" style={{ fontSize: "3em" }}>
				{"gene yoo"}
			</Header>
		</Grid.Row>
	);
};

export default Profile;
