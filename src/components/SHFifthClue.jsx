import { useState } from "react";
import danceCard from "../assets/DanceCard.png";

const SHFifthClue = () => {

	// Timer is handled centrally by parent ScavengerHuntPage; child should not create its own interval.

	const [showHint, setShowHint] = useState(false);

	return (
		<section className="sh-step sh-fifth-clue">
			<h2>Clue: 5</h2>
			<img className="sh-image" src={danceCard} alt="Dance card clue" />
			<button onClick={() => setShowHint(!showHint)}>
				{showHint ? "Hide Hint" : "Show Hint"}
			</button>
			{showHint && <p className="hint">Find the only location that matches the couples list.</p>}
		</section>
	);
};

export default SHFifthClue;