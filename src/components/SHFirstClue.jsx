
import React, { useState } from "react";

const SHFirstClue = ({ currentTime, setCurrentTime }) => {

	const [showHint, setShowHint] = useState(false);

	// Timer is handled centrally by parent ScavengerHuntPage; child should not create its own interval.

	return (
		<section className="sh-step sh-first-clue">
			<h2>Clue 1</h2>
			<p>Which dragon did Harry Potter face in the first task of the Triwizard Tournament?</p>
			{ /* No submit/redirect, physically go find the next QR code */}
			<button className="hint" onClick={() => setShowHint(!showHint)}>
				{showHint ? "Hide Hint" : "Show Hint"}
			</button>
			{showHint && <p className="hint">Hint: Go check out the dragon area!</p>}
		</section>
	);
};

export default SHFirstClue;