import React, { useState } from "react";

const SHLastClue = ({ currentTime, setCurrentTime }) => {

	// Timer is handled centrally by parent ScavengerHuntPage; child should not create its own interval.

	return (
		<section className="sh-step sh-last-clue">
		<h2>Clue: 6 -- Last Clue</h2>
		<p>Play the final audio clip and follow the instructions to find Moody's flask and the final QR.</p>
	</section>
	);
};

export default SHLastClue;