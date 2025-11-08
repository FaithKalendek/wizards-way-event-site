import { useState } from "react";
import { useNavigate } from "react-router-dom";
import myrtleClip from "../assets/MyrtleClip.mp4";

// Moaning myrtle video clip and password input below (password is "pine fresh" -- correct response redirects to next clue), also hint toggle (hint = "ask a prefect")
const SHSecondClue = () => {

	const [showHint, setShowHint] = useState(false);

	const navigate = useNavigate();

	// Timer is handled centrally by parent ScavengerHuntPage; child should not create its own interval.

	// Form submit -- if user entered "pine fresh" (or any variation thereof -- use regex), redirect to next clue page
	const handleSubmit = (e) => {
		e.preventDefault();
		const password = e.target.elements.password.value;
		if (/pine fresh/i.test(password)) {
			navigate("/scavengerhunt/3"); // Redirect to third clue
		} else {
			alert("Incorrect password. Please try again.");
		}
	};

	return (
		<section className="sh-step sh-second-clue">
			<h2>Clue 2</h2>
			<p>What is the password to enter Moaning Myrtle's bathroom?</p>
			<video className="sh-media" src={myrtleClip} controls />
						<form onSubmit={handleSubmit}>
							<input name="password" type="text" placeholder="Enter password" />
							<button type="submit">Submit</button>
						</form>
			<button onClick={() => setShowHint(!showHint)}>
				{showHint ? "Hide Hint" : "Show Hint"}
			</button>
			{showHint && <p className="hint">Hint: Ask a prefect.</p>}
		</section>
	);
};	

export default SHSecondClue;