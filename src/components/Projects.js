import React from "react";
import { Button, Grid, Header, Divider, Transition } from "semantic-ui-react";
import { withRouter } from "react-router-dom";

const list = [
	{
		title: "Project Title 1",
		demo: "Link to Demo",
		github: "Link to Github",
		screenshot: "Test Screenshot",
		description:
			'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'
	},
	{
		title: "Project Title 2",
		demo: "Link to Demo",
		github: "Link to Github",
		screenshot: "Test Screenshot",
		description:
			'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'
	}
];

const Projects = props => {
	return (
		<Grid.Row
			style={{
				overflowY: "scroll",
				height: "800px"
			}}
		>
			<Button
				onClick={() => {
					props.history.push("/");
				}}
				style={{ display: "block", marginBottom: "20px" }}
			>
				Back to Menu
			</Button>
			<Transition.Group animation={"fly left"} duration={2000}>
				{list.map(project => {
					return (
						<div style={{ marginBottom: "25px" }} key={project.title}>
							<div style={{ marginBottom: "25px" }}>
								<Header as="h2">{project.title}</Header>
								<span style={{ marginRight: "25px" }}>{project.demo}</span>
								<span>{project.github}</span>
								<div
									style={{
										backgroundColor: "yellow",
										width: "600px",
										height: "350px",
										margin: "15px"
									}}
								>
									{project.screenshot}
								</div>
								<span>{project.description}</span>
							</div>
							<Divider />
						</div>
					);
				})}
			</Transition.Group>
		</Grid.Row>
	);
};

export default withRouter(Projects);
