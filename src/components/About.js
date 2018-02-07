import React from "react";
import { Button, Grid, Transition } from "semantic-ui-react";
import { withRouter } from "react-router-dom";

const About = props => {
	console.log("inside about, render");
	console.log("----------------------------");

	let frontend = [
		{
			name: "HTML",
			color: "rgb(233,50,0)"
		},
		{
			name: "CSS",
			color: "rgb(0,103,138)"
		},
		{
			name: "Javascript",
			color: "rgb(234,152,0)"
		},
		{
			name: "React",
			color: "rgb(0,217,255)"
		},
		{
			name: "Redux",
			color: "rgb(129,47,142)"
		}
	];

	let backend = [
		{
			name: "Ruby",
			color: "rgb(174,0,0)"
		},
		{
			name: "Ruby on Rails",
			color: "rgb(219,0,0)"
		},
		{
			name: "SQL",
			color: "rgb(0,101,153)"
		}
	];

	return (
		<Grid.Row>
			<Button
				onClick={() => {
					props.history.push("/");
				}}
				style={{ display: "block", marginBottom: "1em" }}
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
						marginLeft: "1em",
						marginRight: "1em",
						marginTop: "2em"
					}}
				>
					<div style={{ marginBottom: "1em" }}>
						{"Gene Yoo is a full stack web developer based in Manhattan, NY."}
					</div>
					<div>{"Gene's technical proficiency includes:"}</div>
					<div style={{ marginTop: "1em", marginBottom: "1em" }}>
						<div
							style={{
								position: "relative",
								left: "0.5em"
							}}
						>
							{frontend.map(skill => {
								return (
									<div
										style={{
											display: "inline-block",
											verticalAlign: "middle",
											margin: "0.5em",
											fontWeight: "bold",
											backgroundColor: "#f9fafc",
											border: "1px solid #eaf1f9",
											minWidth: props.mobile ? "175px" : "200px"
										}}
									>
										<div
											style={{
												display: "inline-block",
												width: "2.5em",
												height: "2.5em",
												backgroundColor: "#363c44",
												color: "white",
												textAlign: "center"
											}}
										>
											<div
												style={{
													width: "10px",
													height: "10px",
													backgroundColor: skill.color,
													position: "absolute"
												}}
											/>
											<div style={{ position: "relative", top: "23%" }}>
												{skill.name[0].toUpperCase()}
											</div>
										</div>
										<div
											style={{
												display: "inline-block",
												fontColor: "black",
												height: "2.5em",
												paddingLeft: "0.25em",
												paddingRight: "0.5em"
											}}
										>
											<div style={{ position: "relative", top: "23%" }}>
												{skill.name.slice(1)}
											</div>
										</div>
									</div>
								);
							})}
						</div>
						<div
							style={{
								position: "relative",
								left: "0.5em"
							}}
						>
							{backend.map(skill => {
								return (
									<div
										style={{
											display: "inline-block",
											verticalAlign: "middle",
											margin: "0.5em",
											fontWeight: "bold",
											backgroundColor: "#f9fafc",
											border: "1px solid #eaf1f9",
											minWidth: props.mobile ? "175px" : "200px"
										}}
									>
										<div
											style={{
												display: "inline-block",
												width: "2.5em",
												height: "2.5em",
												backgroundColor: "#363c44",
												color: "white",
												textAlign: "center"
											}}
										>
											<div
												style={{
													width: "10px",
													height: "10px",
													backgroundColor: skill.color,
													position: "absolute"
												}}
											/>
											<div style={{ position: "relative", top: "23%" }}>
												{skill.name[0].toUpperCase()}
											</div>
										</div>
										<div
											style={{
												display: "inline-block",
												fontColor: "black",
												height: "2.5em",
												paddingLeft: "0.25em",
												paddingRight: "0.5em"
											}}
										>
											<div style={{ position: "relative", top: "23%" }}>
												{skill.name.slice(1)}
											</div>
										</div>
									</div>
								);
							})}
						</div>
					</div>
					<div style={{ marginBottom: "1em" }}>
						{
							"Gene's interests are rooted in demystifying technology so that companies can employ new ideas quickly and engage their customers in meaningful ways. With a background in Strategy Consulting and Web Development, he is able to work effectively across both business and engineering teams to deliver tangible results."
						}
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
