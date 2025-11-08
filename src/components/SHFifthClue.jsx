import React, { useState } from "react";

const SHFifthClue = ({ currentTime, setCurrentTime }) => {

	// Timer is handled centrally by parent ScavengerHuntPage; child should not create its own interval.

	return (
		<section className="sh-step sh-fifth-clue">
			<h2>Clue: 5</h2>
			<p>Find the only location that matches the couples list to get the next QR.</p>
		</section>
	);
};

export default SHFifthClue;