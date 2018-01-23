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

	renderInternalItems = items => {
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
							onClick={this.toggleVisibility}
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

	renderExternalItems = items => {
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
							onMouseOver={this.handleMouseOver}
							onMouseOut={this.handleMouseOut}
						>
							<Icon
								name={item.icon}
								style={{
									marginRight: "20px",
									display: "inline-block",
									color: this.state.hovered === item.name ? "#C5C1C0" : "black"
								}}
							/>
							<a
								href={item.link}
								target="_blank"
								style={{
									color: this.state.hovered === item.name ? "#C5C1C0" : "black",
									display: "inline-block"
								}}
							>
								{item.name + "."}
							</a>
						</Header>
					</Grid.Row>
				</Transition>
			);
		});
	};

	render() {
		const internal = [
			{ name: "about", icon: "bookmark" },
			{ name: "projects", icon: "code" }
		];

		const external = [
			{ name: "github", icon: "github", link: "https://github.com/gene-yoo" },
			{
				name: "instagram",
				icon: "instagram",
				link: "https://www.instagram.com/geneyoo/"
			}
		];

		return (
			<div>
				{this.renderInternalItems(internal)}
				{this.renderExternalItems(external)}
			</div>
		);
	}
}

export default withRouter(Menu);
