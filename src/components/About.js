import React from "react";
import { Button, Grid, Transition } from "semantic-ui-react";
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

	let backend = [
		{
			name: "Ruby",
			logo: "https://i.imgur.com/FBctcAX.png",
			height: "50px"
		},
		{
			name: "Rails",
			logo: "https://i.imgur.com/qWSbInD.png",
			height: "50px"
		},
		{
			name: "SQL",
			logo: "https://i.imgur.com/vg62lBx.png",
			height: "75px"
		}
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
				<div
					style={{
						fontSize: "1.5em",
						lineHeight: "1.5",
						marginLeft: "30px",
						marginRight: "30px",
						marginTop: "50px"
					}}
				>
					<div style={{ marginBottom: "25px" }}>
						{"Gene Yoo is a full stack web developer based in Manhattan, NY."}
					</div>
					<div style={{ marginBottom: "25px" }}>
						{
							"Gene's interests are rooted in demystifying technology so that companies can employ new ideas quickly and engage their customers in meaningful ways. With a background in Strategy Consulting and Web Development, he is able to work effectively across both business and engineering teams to deliver tangible results."
						}
					</div>
					<div>{"Gene's technical proficiency includes:"}</div>
					<div style={{ marginTop: "25px", marginBottom: "25px" }}>
						<div style={{ position: "relative", left: "20px" }}>
							<span style={{ fontSize: "0.75em", fontWeight: "bold" }}>
								{"Frontend: "}
							</span>
							{frontend.map(skill => {
								return (
									<div
										style={{
											display: "inline-block",
											margin: "20px"
										}}
										key={skill.name}
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
						<div style={{ position: "relative", left: "20px" }}>
							<span style={{ fontSize: "0.75em", fontWeight: "bold" }}>
								{"Backend: "}
							</span>
							{backend.map(skill => {
								return (
									<div
										style={{
											display: "inline-block",
											margin: "20px"
										}}
										key={skill.name}
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
						{"All inquiries may be directed to: "}
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
