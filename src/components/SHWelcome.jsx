import { useState } from "react";

// Welcome message, take user's info in form, start timer and display "and you're off!" message when submit button clicked
const SHWelcome = ({ setUserInfo, setCurrentTime, startHunt }) => {
	
	const [email, setEmail] = useState("");
	const [name, setName] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [canPutInDrawing, setCanPutInDrawing] = useState(false);

	const [showInProgress, setShowInProgress] = useState(false);

	// Function to handle form submission -- call parent startHunt, update userInfo state
	const handleSubmit = (e) => {
		e.preventDefault();
		const info = { email, name, phoneNumber, canPutInDrawing };
		setUserInfo(info);
		if (typeof startHunt === 'function') startHunt(info);
		setShowInProgress(true);
	};

	return (
		<section className="sh-step sh-welcome">
			<h2>Welcome to the Scavenger Hunt!</h2>
			<p>Please enter your information below to get started:</p>
			<form onSubmit={handleSubmit}>
				<label>
					Name:
					<input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
				</label>
				<label>
					Email:
					<input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
				</label>
				<label>
					Phone Number:
					<input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
				</label>
				<input type="checkbox" checked={canPutInDrawing} onChange={(e) => setCanPutInDrawing(e.target.checked)} />
				<label>
					I agree to have my contact info entered into a drawing for a prize.
				</label>
				<button type="submit">Start Scavenger Hunt</button>
			</form>
			{showInProgress && <p>Scavenger Hunt in progress! Good luck!</p>}
		</section>
	);
};

export default SHWelcome;
