import React from "react";
import { Grid, Image } from "semantic-ui-react";

const Profile = props => {
	console.log("inside profile, render");
	console.log("----------------------------");

	return (
		<Grid.Row style={{ marginBottom: "1.75em", textAlign: "center" }}>
			<Image
				src="https://i.imgur.com/kzNKPA8.jpg"
				style={{
					minWidth: "15%",
					maxWidth: "200px",
					width: props.mobile ? "30%" : "50%"
				}}
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
