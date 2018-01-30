import React from "react";
import { Button, Grid, Transition, Image } from "semantic-ui-react";
import { withRouter } from "react-router-dom";

const About = props => {
	console.log("inside about, render");
	console.log("----------------------------");

	let frontend = [
		{
			name: "HTML-CSS-JS",
			logo: "https://i.imgur.com/4MEztSg.png",
			height: "75px"
		},
		{ name: "React", logo: "https://i.imgur.com/3W9ogTR.png", height: "55px" },
		{ name: "Redux", logo: "https://i.imgur.com/8r8hjWk.png", height: "50px" }
	];

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
			<Transition
				animation={"fade up"}
				duration={1200}
				transitionOnMount={true}
			>
				<div style={{ fontSize: "1.75em", lineHeight: "1.5" }}>
					<div style={{ marginBottom: "25px" }}>
						{
							"Gene is a full stack web developer interested in demystifying technology so that companies can employ new ideas quickly and engage their customers in meaningful ways. With a background in Web Development and Strategy Consulting, Gene works effectively amongst both business and engineering teams to deliver tangible results."
						}
					</div>
					<div style={{ marginBottom: "25px" }}>
						<div>
							{frontend.map(skill => {
								return (
									<div
										style={{
											display: "inline-block",
											margin: "20px"
										}}
									>
										<img
											src={skill.logo}
											style={{
												maxHeight: skill.height,
												verticalAlign: "middle"
											}}
											alt={skill.name}
										/>
									</div>
								);
							})}
						</div>
					</div>
					<div>
						{"All inquiries may be forwarded to: "}
						<a
							href="mailto:gene.y.yoo@gmail.com?Subject=General%20Inquiry"
							target="_top"
						>
							gene.y.yoo@gmail.com
						</a>
					</div>
				</div>
			</Transition>
		</Grid.Row>
	);
};

export default withRouter(About);
