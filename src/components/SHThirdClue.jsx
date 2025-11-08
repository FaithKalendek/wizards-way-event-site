import React, { useState } from "react";

// Play video clip of singing egg riddle, hint toggle (hint = "think about what the egg represents")
// No submit/redirect, physically go find the next QR code (at the lake!)
const SHThirdClue = ({ currentTime, setCurrentTime }) => {
	
	const [showHint, setShowHint] = useState(false);

	// Timer is handled centrally by parent ScavengerHuntPage; child should not create its own interval.

	return (
		<section className="sh-step sh-third-clue">
			<h2>Clue 3</h2>
			<p>Listen to the clip and solve the riddle to find the next location.</p>
			<video src="singing-egg-clip.mp4" controls />
			<input type="text" placeholder="Enter answer" />
			<button>Submit</button>
			<button onClick={() => setShowHint(!showHint)}>
				{showHint ? "Hide Hint" : "Show Hint"}
			</button>
			{showHint && <p className="hint">Hint: Think about what the egg represents.</p>}
		</section>
	);
};

export default SHThirdClue;