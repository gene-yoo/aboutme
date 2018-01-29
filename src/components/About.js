import React from "react";
import { Button, Grid } from "semantic-ui-react";
import { withRouter } from "react-router-dom";

const About = props => {
	console.log("inside about, render");
	console.log("----------------------------");

	return (
		<Grid.Row>
			<Button
				onClick={() => {
					props.history.push("/");
				}}
				style={{ display: "block", marginBottom: "20px" }}
			>
				Back to Menu
			</Button>
			<div>
				<span
					style={{
						fontSize: "1.75em",
						lineHeight: "1.5"
					}}
				>
					{
						"Gene is a full stack web developer interested in demystifying technology so that companies can employ new ideas quickly and engage their customers in meaningful ways. With a background in Web Development and Strategy Consulting, Gene works effectively amongst both business and engineering teams to deliver tangible results."
					}
					<br />
					<br />
					{"All inquiries may be forwarded to: "}
					<a
						href="mailto:gene.y.yoo@gmail.com?Subject=General%20Inquiry"
						target="_top"
					>
						gene.y.yoo@gmail.com
					</a>
				</span>
			</div>
		</Grid.Row>
	);
};

export default withRouter(About);
