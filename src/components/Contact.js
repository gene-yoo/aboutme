import React from "react";
import { Button } from "semantic-ui-react";
import { withRouter } from "react-router-dom";

const Contact = props => {
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
				{"Please email all inquiries / questions to gene.y.yoo@gmail.com"}
			</span>
		</div>
	);
};

export default withRouter(Contact);
