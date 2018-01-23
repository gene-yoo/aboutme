import React from "react";
import { Button } from "semantic-ui-react";
import { withRouter } from "react-router-dom";

const Projects = props => {
	return (
		<div>
			<Button
				onClick={() => {
					props.history.push("/");
				}}
				style={{ display: "block", marginBottom: "20px" }}
			>
				Back to Menu
			</Button>
			<span style={{ fontSize: "1.75em", lineHeight: "1.5" }}>
				{"work in progress."}
			</span>
		</div>
	);
};

export default withRouter(Projects);
