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
		if (ev.target.className === "ui header") {
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
		let attr = ev.target.innerText.slice(0, -1);

		if (ev.target.className === "ui header") {
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
					duration={500}
					visible={this.state[item.name]}
					key={item.name}
				>
					<Grid.Row style={{ height: "100px" }}>
						<Header
							as="h2"
							style={{
								fontSize: "3em",
								color: this.state.hovered === item.name ? "#C5C1C0" : "black",
								cursor: "pointer"
							}}
							onClick={
								item.type === "external"
									? () => window.open(item.link)
									: this.toggleVisibility
							}
							onMouseOver={this.handleMouseOver}
							onMouseOut={this.handleMouseOut}
						>
							<Icon
								name={item.icon}
								style={{
									marginRight: "20px",
									color: this.state.hovered === item.name ? "#C5C1C0" : "black"
								}}
							/>
							{item.name + "."}
						</Header>
					</Grid.Row>
				</Transition>
			);
		});
	};

	render() {
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
				name: "instagram",
				icon: "instagram",
				type: "external",
				link: "https://www.instagram.com/geneyoo/"
			}
		];

		return <div>{this.renderItems(items)}</div>;
	}
}

export default withRouter(Menu);
