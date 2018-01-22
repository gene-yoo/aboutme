import React, { Component } from "react";
import { Grid, Header, Transition, Icon, Image } from "semantic-ui-react";

class Home extends Component {
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

		this.setState(
			{
				[attr]: !this.state[attr]
			},
			() => console.log("state: ", this.state)
		);
	};

	render() {
		return (
			<Grid centered columns={2}>
				<Grid.Column style={{ minWidth: "400px", width: "25%" }}>
					<Grid.Row style={{ height: "100px" }} />

					<Grid.Row style={{ height: "275px", marginBottom: "10px" }}>
						<Image
							src="https://i.imgur.com/kzNKPA8.jpg"
							size="small"
							circular
						/>
						<Header as="h2" style={{ fontSize: "3em" }}>
							{"gene yoo"}
						</Header>
					</Grid.Row>

					<Transition
						animation={"pulse"}
						duration={500}
						visible={this.state.about}
					>
						<Grid.Row style={{ height: "100px" }}>
							<Header
								as="h2"
								style={{ fontSize: "3em" }}
								onClick={this.toggleVisibility}
							>
								<Icon name="bookmark" style={{ marginRight: "20px" }} />
								{"about."}
							</Header>
						</Grid.Row>
					</Transition>

					<Transition
						animation={"pulse"}
						duration={500}
						visible={this.state.projects}
					>
						<Grid.Row style={{ height: "100px" }}>
							<Header
								as="h2"
								style={{ fontSize: "3em" }}
								onClick={this.toggleVisibility}
							>
								<Icon name="code" style={{ marginRight: "20px" }} />
								{"projects."}
							</Header>
						</Grid.Row>
					</Transition>

					<Transition
						animation={"pulse"}
						duration={500}
						visible={this.state.photography}
					>
						<Grid.Row style={{ height: "100px" }}>
							<Header
								as="h2"
								style={{ fontSize: "3em" }}
								onClick={this.toggleVisibility}
							>
								<Icon name="camera retro" style={{ marginRight: "20px" }} />
								{"photography."}
							</Header>
						</Grid.Row>
					</Transition>

					<Transition
						animation={"pulse"}
						duration={500}
						visible={this.state.contact}
					>
						<Grid.Row style={{ height: "100px" }}>
							<Header
								as="h2"
								style={{ fontSize: "3em" }}
								onClick={this.toggleVisibility}
							>
								<Icon name="question" style={{ marginRight: "20px" }} />
								{"contact."}
							</Header>
						</Grid.Row>
					</Transition>
				</Grid.Column>
			</Grid>
		);
	}
}

export default Home;
