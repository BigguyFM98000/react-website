import PropTypes from "prop-types";

function Student(props) {
	return (
		<div>
			<p>Name: {props.name}</p>
			<p>Age: {props.age}</p>
			<p>Graduate: {props.isGraduate ? "Yes" : "No"}</p>
		</div>
	);
}

Student.PropTypes = {
	name: PropTypes.string,
	age: PropTypes.number,
	isGraduate: PropTypes.bool,
};

export default Student;
