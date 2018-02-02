import React from "react";
import { Grid, Image, Header, Transition } from "semantic-ui-react";

const Profile = props => {
	console.log("inside profile, render");
	console.log("----------------------------");

	return (
		<Grid.Row style={{ marginBottom: "1.5em", textAlign: "center" }}>
			<Image
				src="https://i.imgur.com/kzNKPA8.jpg"
				style={{ minWidth: "15%", maxWidth: "20%", width: "18%" }}
				circular
				centered
			/>
			<div
				style={{
					margin: "0.5em",
					fontSize: props.fontSize,
					fontWeight: "bold"
				}}
			>
				{"gene yoo"}
			</div>
		</Grid.Row>
	);
};

export default Profile;
