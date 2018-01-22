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
			mouseFocus: ""
		};
	}

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
						<Header
							as="h2"
							style={{ fontSize: "3em" }}
							onClick={this.toggleVisibility}
						>
							<Icon name={item.icon} style={{ marginRight: "20px" }} />
							{item.name + "."}
						</Header>
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
