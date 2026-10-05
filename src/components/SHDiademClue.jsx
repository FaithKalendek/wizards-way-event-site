import { useState } from "react";
import diademImage from "../assets/diadem-placeholder.svg";

const SHDiademClue = () => {
    const [answer, setAnswer] = useState("");
    const [correct, setCorrect] = useState(null);

    const handleSubmit = () => {
        const normalized = answer.trim().toLowerCase();
        if (normalized === "snake" || normalized === "a snake") {
            setCorrect(true);
        } else {
            setCorrect(false);
        }
    };

    return (
        <section className="sh-step sh-clue-page">
            <h2>The Diadem</h2>
            <p className="sh-italic-text">“I have no legs, yet I can run.</p>
            <p className="sh-italic-text">I have no arms, yet I can strike.</p>
            <p className="sh-italic-text">I shed what I no longer need</p>
            <p className="sh-italic-text">and leave no footprints behind.</p>
            <p className="sh-italic-text">What am I?”</p>
            <input value={answer} onChange={(e) => setAnswer(e.target.value)} placeholder="Your answer" />
            <button className="sh-action-button" onClick={handleSubmit}>ENTER</button>

            {correct === false && <p className="error">Not quite. The answer is a creature of the Chamber.</p>}

            {correct === true && (
                <div className="sh-diadem-reveal">
                    <img className="sh-diadem-image" src={diademImage} alt="Diadem artifact placeholder" />
                    <p className="success sh-italic-text">
                        Rowena Ravenclaw was said to prize wit above brute strength. You have recovered her final clue.
                    </p>
                    <p className="sh-italic-text">
                        “A serpent has come to guard the Dark Lord&apos;s secret.
                        His very name.
                        Count the letters of the warning I leave you:
                        VOLDEMORT.
                        The number you seek is hidden there.”
                    </p>
                </div>
            )}
        </section>
    );
};

export default SHDiademClue;
