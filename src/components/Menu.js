import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Grid, Header, Transition, Icon } from "semantic-ui-react";

class Menu extends Component {
	constructor(props) {
		super(props);

		this.state = {
			about: true,
			projects: true,
			photography: true,
			contact: true,
			github: true,
			instagram: true,
			hovered: ""
		};
	}

	handleMouseOver = ev => {
		if (ev.target.className === "menuItem") {
			let hovered = ev.target.innerText.slice(0, -1);

			this.setState({
				hovered
			});
		}
	};

	handleMouseOut = ev => {
		this.setState({
			hovered: ""
		});
	};

	toggleVisibility = ev => {
		if (ev.target.className === "menuItem") {
			let attr = ev.target.innerText.slice(0, -1);
			this.setState(
				{
					[attr]: !this.state[attr]
				},
				() => this.props.history.push(`/${attr}`)
			);
		}
	};

	renderItems = items => {
		return items.map(item => {
			return (
				<Transition
					animation={"pulse"}
					duration={300}
					visible={this.state[item.name]}
					key={item.name}
				>
					<Grid.Row style={{ height: "100px" }}>
						<div
							style={{
								fontSize: "3em"
							}}
							className="menuItem"
							onClick={
								item.type === "external"
									? () => window.open(item.link)
									: this.toggleVisibility
							}
							onMouseOver={this.handleMouseOver}
							onMouseOut={this.handleMouseOut}
						>
							<div
								style={{
									display: "inline-block"
								}}
							>
								<Icon
									name={item.icon}
									style={{
										marginRight: "20px",
										color:
											this.state.hovered === item.name ||
											this.props.location.pathname === `/${item.name}`
												? "#C5C1C0"
												: "black"
									}}
								/>
							</div>
							<div
								style={{
									display: "inline-block",
									cursor: "pointer",
									color:
										this.state.hovered === item.name ||
										this.props.location.pathname === `/${item.name}`
											? "#C5C1C0"
											: "black"
								}}
								className="menuItem"
							>
								{item.name + "."}
							</div>
						</div>
					</Grid.Row>
				</Transition>
			);
		});
	};

	render() {
		console.log("inside menu, render");
		console.log("props: ", this.props);
		console.log("state: ", this.state);
		console.log("----------------------------");

		const items = [
			{ name: "about", icon: "bookmark", type: "internal" },
			{ name: "projects", icon: "code", type: "internal" },
			{
				name: "github",
				icon: "github",
				type: "external",
				link: "https://github.com/gene-yoo"
			},
			{
				name: "linkedin",
				icon: "linkedin",
				type: "external",
				link: "https://www.linkedin.com/in/geneyyoo/"
			},
			{
				name: "instagram",
				icon: "instagram",
				type: "external",
				link: "https://www.instagram.com/geneyoo/"
			}
		];

		return <Grid.Row>{this.renderItems(items)}</Grid.Row>;
	}
}

export default withRouter(Menu);
