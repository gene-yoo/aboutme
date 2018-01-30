import React from "react";
import {
	Button,
	Grid,
	Header,
	Divider,
	Icon,
	Transition
} from "semantic-ui-react";
import { withRouter } from "react-router-dom";

const list = [
	{
		title: "LOOT",
		demo: "https://github.com/gene-yoo/loot-demo",
		frontend: "https://github.com/gene-yoo/loot-frontend",
		backend: "https://github.com/gene-yoo/loot-backend-api-v1",
		screenshot: "https://i.imgur.com/cYohnG9.png",
		description:
			"A cryptocurrency trading platform simulator built on React / Redux / Rails. Market prices are sourced every 30 seconds from the CryptoCompare API. Charts are built on Chart.js."
	},
	{
		title: "HEADLINES",
		demo: "https://head-lines.herokuapp.com/welcome",
		frontend: "https://github.com/gene-yoo/headlines-frontend",
		backend: "https://github.com/gene-yoo/headlines-backend",
		screenshot: "https://i.imgur.com/fI1Uz0y.jpg",
		description:
			"Personal news feed generator from 30 curated sources built on React / Rails. Users can aggregate their favorite news resources into one feed, save articles, and share articles with the Headlines network. All news headlines are sourced from the News API."
	},
	{
		title: "!PICTIONARY",
		demo: "https://www.dropbox.com/s/9x59f1iceoa1kg2/pictionary-demo.mov?dl=0",
		frontend: "https://github.com/gene-yoo/pictionary-frontend",
		backend: "https://github.com/gene-yoo/pictionary-backend",
		screenshot: "https://i.imgur.com/O6vRO2n.png",
		description:
			"Multiplayer Pictionary-based web application built on vanilla Javascript / Rails"
	}
];

const Projects = props => {
	console.log("inside projects, render");
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
			<Transition
				animation={"fade up"}
				duration={1200}
				transitionOnMount={true}
			>
				<div style={{ marginTop: "50px" }}>
					{list.map(project => {
						return (
							<div
								style={{ margin: "30px", width: "725px" }}
								key={project.title}
							>
								<div style={{ marginBottom: "30px" }}>
									<div style={{ marginBottom: "10px" }}>
										<div style={{ display: "inline-block" }}>
											<Header as="h2">{project.title}</Header>
										</div>
										<div style={{ display: "inline-block", float: "right" }}>
											{["Demo", "Frontend", "Backend"].map(repo => {
												return (
													<div
														style={{
															display: "inline-block",
															margin: "0px 20px",
															fontSize: "1.25em",
															cursor: "pointer"
														}}
														key={repo.toLowerCase()}
													>
														<a
															href={project[repo.toLowerCase()]}
															target="_blank"
														>
															<Icon name={"github"} />
															{repo}
														</a>
													</div>
												);
											})}
										</div>
									</div>
									<div style={{ fontSize: "1.25em", lineHeight: "1.25" }}>
										{project.description}
									</div>
									<div
										style={{
											width: "600px",
											height: "350px",
											margin: "15px",
											textAlign: "center"
										}}
									>
										<img
											src={project.screenshot}
											alt={project.title}
											style={{
												maxWidth: "100%",
												maxHeight: "100%",
												border: "2px solid #e3e8ef",
												boxShadow: "5px 5px #e3e8ef"
											}}
										/>
									</div>
								</div>
								<Divider />
							</div>
						);
					})}
				</div>
			</Transition>
		</Grid.Row>
	);
};

export default withRouter(Projects);
