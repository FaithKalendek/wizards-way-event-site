import React, { useState } from "react";


const SHFourthClue = ({ currentTime, setCurrentTime }) => {

	const [showHint, setShowHint] = useState(false);

	// Timer is handled centrally by parent ScavengerHuntPage; child should not create its own interval.

	return (
		<section className="sh-step sh-fourth-clue">
			<h2>Clue: 4</h2>
			<p>Follow the highlighted notes to spell the next keyword and find the QR code.</p>
			{showHint && <p>Hint: Think about the Hogwarts Express!</p>}
			<button onClick={() => setShowHint(!showHint)}>
				{showHint ? "Hide Hint" : "Show Hint"}
			</button>
		</section>
	);
};

export default SHFourthClue;