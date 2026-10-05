import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SHWelcome = ({ setUserInfo, startHunt }) => {
	const [email, setEmail] = useState("");
	const [name, setName] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [house, setHouse] = useState("Gryffindor");
	const [swearOath, setSwearOath] = useState(false);
	const [canPutInDrawing, setCanPutInDrawing] = useState(false);
	const [finalCode, setFinalCode] = useState("");
	const [codeMessage, setCodeMessage] = useState("");
	const [isFlipped, setIsFlipped] = useState(false);
	const [showInProgress, setShowInProgress] = useState(false);

	const navigate = useNavigate();

	const handleSignupSubmit = (e) => {
		e.preventDefault();
		const info = { email, name, phoneNumber, house, canPutInDrawing, swearOath };
		if (typeof setUserInfo === 'function') {
			setUserInfo(info);
		}
		if (typeof startHunt === 'function') {
			startHunt(info);
		}
		setShowInProgress(true);
		setTimeout(() => {
			navigate("/scavengerhunt/diary");
		}, 1200);
	};

	const handleCodeChange = (value) => {
		const digitsOnly = value.replace(/[^0-9]/g, "").slice(0, 8);
		const formatted = digitsOnly.match(/.{1,2}/g)?.join("-") || "";
		setFinalCode(formatted);
	};

	const handleCodeSubmit = (e) => {
		e.preventDefault();
		const normalized = finalCode.replace(/[^0-9]/g, "");
		if (normalized === "07311980") {
			setCodeMessage("Correct code!");
			navigate("/scavengerhunt/reward");
			return;
		}
		setCodeMessage("Wrong code.");
	};

	return (
		<section className="sh-step sh-welcome">
			<div className="sh-signup-intro">
				<div className={`sh-coin-card ${isFlipped ? "flipped" : ""}`} onClick={() => setIsFlipped(!isFlipped)} role="button" tabIndex={0} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setIsFlipped(!isFlipped); } }}>
					<div className="sh-coin-face sh-coin-front">
						<div className="sh-coin-art">Coin</div>
					</div>
					<div className="sh-coin-face sh-coin-back">
						<div className="sh-intro-video-placeholder">
							<p>Intro video goes here</p>
						</div>
					</div>
				</div>
			</div>

			<h2>JOIN DUMBLEDORE&apos;S ARMY</h2>

			<form onSubmit={handleSignupSubmit} className="sh-signup-form">
				<div className="form-row">
					<label>
						Name:
						<input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
					</label>
				</div>
				<div className="form-row">
					<label>
						Email:
						<input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
					</label>
				</div>
				<div className="form-row">
					<label>
						Phone Number:
						<input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="(555) 123-4567" required />
					</label>
				</div>
				<div className="form-row">
					<label>
						House:
						<select value={house} onChange={(e) => setHouse(e.target.value)}>
							<option value="Gryffindor">Gryffindor</option>
							<option value="Hufflepuff">Hufflepuff</option>
							<option value="Ravenclaw">Ravenclaw</option>
							<option value="Slytherin">Slytherin</option>
						</select>
					</label>
				</div>
				<div className="form-row checkbox-row">
					<label>
						<input type="checkbox" checked={swearOath} onChange={(e) => setSwearOath(e.target.checked)} />
						I solemnly swear that I am joining Dumbledore&apos;s Army for the purpose of defending myself and others against dark magic, resisting unjust authority, and preventing Umbridge from damaging our school.
					</label>
				</div>
				<div className="form-row checkbox-row">
					<label>
						<input type="checkbox" checked={canPutInDrawing} onChange={(e) => setCanPutInDrawing(e.target.checked)} />
						If I complete the scavenger hunt, I want to be entered into the prize raffle.
					</label>
				</div>
				<button type="submit">I AGREE</button>
			</form>

			<form onSubmit={handleCodeSubmit} className="sh-code-form">
				<p className="sh-code-instructions">Once you&apos;ve solved the clues, come back here and enter the code you found.</p>
				<label className="sh-code-label">CODE:</label>
				<input
					type="text"
					value={finalCode}
					onChange={(e) => handleCodeChange(e.target.value)}
					placeholder="##-##-##-##"
					maxLength={11}
				/>
				<button type="submit">Submit Code</button>
				{codeMessage && <p className={codeMessage === "Correct code!" ? "success" : "error"}>{codeMessage}</p>}
			</form>

			{showInProgress && <p className="success">Scavenger Hunt in progress! Good luck!</p>}
		</section>
	);
};

export default SHWelcome;
