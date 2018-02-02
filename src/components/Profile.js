import React from "react";
import { Grid, Image, Header } from "semantic-ui-react";

const Profile = props => {
	console.log("inside profile, render");
	console.log("----------------------------");

	return (
		<Grid.Row style={{ marginTop: "2em", marginBottom: "1em" }}>
			<Image src="https://i.imgur.com/kzNKPA8.jpg" size="small" circular />
			<Header as="h2" style={{ fontSize: props.fontSize }}>
				{"gene yoo"}
			</Header>
		</Grid.Row>
	);
};

export default Profile;
