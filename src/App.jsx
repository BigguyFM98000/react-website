import React from "react";

import Student from "./components/Student.jsx";

function App() {
	return (
		<div className="outta">
			<Student name="Fhatuwani" age={36} isGraduate={true} />
			<Student name="George" age={29} isGraduate={true} />
			<Student name="Anthony" age={26} isGraduate={false} />
		</div>
	);
}

export default App;
