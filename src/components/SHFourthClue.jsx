import React, { useState } from "react";
import musicClueImg from "../assets/MusicClue.png";


const SHFourthClue = () => {

	const [showHint, setShowHint] = useState(false);

	// Timer is handled centrally by parent ScavengerHuntPage; child should not create its own interval.

	return (
		<section className="sh-step sh-fourth-clue">
			<h2>Clue: 4</h2>
			<img className="sh-image" src={musicClueImg} alt="Music clue" />
			{showHint && <p>Hint: Where would you find this item?</p>}
			<button onClick={() => setShowHint(!showHint)}>
				{showHint ? "Hide Hint" : "Show Hint"}
			</button>
		</section>
	);
};

export default SHFourthClue;