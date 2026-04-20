import React from "react";

function Greeting(props) {
	let { name = "Guest" } = props;
	return <h1>Good Morning, {name}!</h1>;
}

export default Greeting;
