import React, { useState } from "react";
import moodyAudio from "../assets/MoodyAudio.m4a";

const SHLastClue = () => {

	// Timer is handled centrally by parent ScavengerHuntPage; child should not create its own interval.

	const [showHint, setShowHint] = useState(false);

	return (
		<section className="sh-step sh-last-clue">
		<h2>Clue: 6 -- Last Clue</h2>
		<audio className="sh-media" src={moodyAudio} controls />
		<button onClick={() => setShowHint(!showHint)}>
			{showHint ? "Hide Hint" : "Show Hint"}
		</button>
		{showHint && <p className="hint">Hint: Who said this?</p>}
	</section>
	);
};

export default SHLastClue;