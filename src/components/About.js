import React from "react";
import { Transition } from "semantic-ui-react";

const About = () => {
	const bio = (
		<span style={{ fontSize: "2em", lineHeight: "1.5" }}>
			{
				"Gene is a full stack web developer interested in demystifying technology so that companies can employ new ideas quickly and engage their customers in meaningful ways. With a background in Web Development and Strategy Consulting, Gene works effectively amongst both business and engineering teams to deliver tangible results."
			}
		</span>
	);

	return bio;
};

export default About;
