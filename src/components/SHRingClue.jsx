import { useState } from "react";
import ringRevealVideo from "../assets/ring opening - qr good.mp4";
import runningWaterAudio from "../assets/official running water.mp4";
import parseltongueAudio from "../assets/official parseltongue.mp4";
import spellClashAudio from "../assets/official spell clash sound.mp4";
import stoneSoundAudio from "../assets/official stone sound.mp4";
import hissAudio from "../assets/official hiss sound.mp4";
import screamAudio from "../assets/official scream sound.mp4";
import soundSequenceAudio from "../assets/sound sequence answer.mp3";

const SHRingClue = () => {
    const [sequence, setSequence] = useState([]);
    const [solved, setSolved] = useState(false);

    const finalSequence = [
        "water",
        "parseltongue",
        "scraping",
        "hiss",
        "hiss",
        "scream",
        "spell",
        "scraping",
        "water",
        "parseltongue",
    ];

    const tones = [
        "water",
        "parseltongue",
        "scraping",
        "hiss",
        "scream",
        "spell",
    ];

    const toneAudioMap = {
        water: runningWaterAudio,
        parseltongue: parseltongueAudio,
        scraping: stoneSoundAudio,
        hiss: hissAudio,
        scream: screamAudio,
        spell: spellClashAudio,
    };

    const handleTone = (tone) => {
        if (solved) return;

        const next = [...sequence, tone];
        const trimmed = next.slice(-finalSequence.length);
        setSequence(trimmed);

        const audio = toneAudioMap[tone];
        if (audio) {
            const sound = new Audio(audio);
            sound.play().catch(() => {});
        }

        if (trimmed.length === finalSequence.length && trimmed.every((value, index) => value === finalSequence[index])) {
            setSolved(true);
        }
    };

    const handlePlaySequence = () => {
        const audio = new Audio(soundSequenceAudio);
        audio.play().catch(() => {});
    };

    const resetSequence = () => {
        setSequence([]);
        setSolved(false);
    };

    return (
        <section className="sh-step sh-clue-page">
            <h2>The Ring</h2>
            <div className="sh-sequence-actions">
                <button className="sh-sequence-play-button" onClick={handlePlaySequence}>Play sound sequence</button>
            </div>
            <div className="sh-sequence-controls">
                {tones.map((tone) => (
                    <button key={tone} className={`sh-sequence-sound-button sh-sound-${tone}`} onClick={() => handleTone(tone)}>
                        {tone}
                    </button>
                ))}
            </div>
            <p className="sh-sequence-readout">Entered sequence: {sequence.length ? sequence.join(" → ") : "Nothing yet..."}</p>
            {!solved && <p className="hint sh-italic-text">Listen closely. The sound pattern is hidden in the clues.</p>}
            <button className="sh-reset-button" onClick={resetSequence}>Reset entered sequence</button>

            {solved && (
                <div className="sh-ring-reveal">
                    <div className="sh-chamber" aria-live="polite">
                        <div className="sh-chamber-panel sh-chamber-panel-left" />
                        <div className="sh-chamber-panel sh-chamber-panel-right" />
                        <video className="sh-media" src={ringRevealVideo} autoPlay playsInline controls />
                    </div>
                    <div className="sh-ring-copy sh-italic-text">
                        <p>The Gaunt family claimed descent from Salazar Slytherin. They were obsessed with bloodlines, old magic, and objects that proved their ancestry. This ring appears to have belonged to Marvolo Gaunt.</p>
                        <p>The box is damaged, though. Someone&apos;s left a note inside the lid.</p>
                        <p><strong>R.A.B.</strong> — 7</p>
                        <p>Proceed to the Black Lake.</p>
                    </div>
                </div>
            )}
        </section>
    );
};

export default SHRingClue;
