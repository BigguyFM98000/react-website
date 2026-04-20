import shirt from "../assets/bigguy-shirt.jpg";

function Card() {
	return (
		<div className="card">
			<img src={shirt} alt="A picture of Fhatuwani" width={200} height={200} />
			<h2>Fhatuwani Raphalalani</h2>
			<p>Software Engineer</p>
		</div>
	);
}

export default Card;
