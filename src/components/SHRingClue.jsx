import { useState } from "react";
import ringImage from "../assets/ring-placeholder.svg";

const SHRingClue = () => {
    const [sequence, setSequence] = useState([]);
    const [solved, setSolved] = useState(false);

    const tones = ["running water", "parseltongue", "magical spell", "stone scraping", "something slithering", "a girl screaming"];

    const handleTone = (tone) => {
        const next = [...sequence, tone];
        const trimmed = next.slice(-6);
        setSequence(trimmed);

        if (trimmed.length >= 3 && trimmed[0] === "running water" && trimmed[1] === "parseltongue" && trimmed[2] === "magical spell") {
            setSolved(true);
        }
    };

    const resetSequence = () => {
        setSequence([]);
        setSolved(false);
    };

    return (
        <section className="sh-step sh-clue-page">
            <h2>The Ring</h2>
            <p className="sh-italic-text"><strong>🔴 🔵 🔴 🔵 🔴 🔵</strong></p>
            <p className="sh-callout sh-italic-text">REPEAT SOUND SEQUENCE</p>
            <div className="sh-sequence-controls">
                {tones.map((tone) => (
                    <button key={tone} className="sh-action-button" onClick={() => handleTone(tone)}>
                        {tone}
                    </button>
                ))}
            </div>
            <p className="sh-sequence-readout">Sequence: {sequence.length ? sequence.join(" → ") : "waiting..."}</p>
            {!solved && <p className="hint sh-italic-text">Listen closely. The sound pattern is hidden in the clues.</p>}
            <button className="sh-secondary-button" onClick={resetSequence}>Reset</button>

            {solved && (
                <div className="sh-ring-reveal">
                    <div className="sh-chamber" aria-live="polite">
                        <div className="sh-chamber-panel sh-chamber-panel-left" />
                        <div className="sh-chamber-panel sh-chamber-panel-right" />
                        <img className="sh-ring-image" src={ringImage} alt="Ring artifact placeholder" />
                    </div>
                    <div className="sh-ring-copy sh-italic-text">
                        <p>The Gaunt family claimed descent from Salazar Slytherin. They were obsessed with bloodlines, old magic, and objects that proved their ancestry. This ring appears to have belonged to Marvolo Gaunt.</p>
                        <p>The box is damaged, though. Someone&apos;s left a note inside the lid.</p>
                        <p><strong>R.A.B.</strong> — 7</p>
                    </div>
                </div>
            )}
        </section>
    );
};

export default SHRingClue;
