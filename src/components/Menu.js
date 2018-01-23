import React, { Component } from "react";
import { Grid, Header, Transition, Icon } from "semantic-ui-react";

class Menu extends Component {
	constructor(props) {
		super(props);

		this.state = {
			about: true,
			projects: true,
			photography: true,
			contact: true,
			hovered: ""
		};
	}

	handleMouseOver = ev => {
		if (ev.target.className === "ui header") {
			console.log("hovering: ", ev.target.innerText.slice(0, -1));
			let hovered = ev.target.innerText.slice(0, -1);

			this.setState(
				{
					hovered
				},
				() => console.log("state: ", this.state)
			);
		}
	};

	handleMouseOut = ev => {
		this.setState(
			{
				hovered: ""
			},
			() => console.log("state: ", this.state)
		);
	};

	toggleVisibility = ev => {
		let attr = ev.target.innerText.slice(0, -1);

		if (ev.target.className === "ui header") {
			this.setState(
				{
					[attr]: !this.state[attr]
				},
				() => console.log("state: ", this.state)
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
						{this.state.hovered === item.name ? (
							<Header
								as="h2"
								style={{ fontSize: "3em", color: "#C5C1C0" }}
								onClick={this.toggleVisibility}
								onMouseOver={this.handleMouseOver}
								onMouseOut={this.handleMouseOut}
							>
								<Icon
									name={item.icon}
									style={{ marginRight: "20px", color: "#C5C1C0" }}
								/>
								{item.name + "."}
							</Header>
						) : (
							<Header
								as="h2"
								style={{ fontSize: "3em" }}
								onClick={this.toggleVisibility}
								onMouseOver={this.handleMouseOver}
								onMouseOut={this.handleMouseOut}
							>
								<Icon name={item.icon} style={{ marginRight: "20px" }} />
								{item.name + "."}
							</Header>
						)}
					</Grid.Row>
				</Transition>
			);
		});
	};

	render() {
		const items = [
			{ name: "about", icon: "bookmark" },
			{ name: "projects", icon: "code" },
			{ name: "photography", icon: "camera retro" },
			{ name: "contact", icon: "question" }
		];

		return <div>{this.renderItems(items)}</div>;
	}
}

export default Menu;
