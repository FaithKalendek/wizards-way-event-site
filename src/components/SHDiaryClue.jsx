import { useState, useEffect, useRef } from "react";
import hissAudio from "../assets/MoodyAudio.m4a";
import scareImage from "../assets/diary-jumpscare-placeholder.svg";

const SHDiaryClue = () => {
    const [revealed, setRevealed] = useState(false);
    const audioRef = useRef(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            setRevealed(true);
        }, 10000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (!revealed || !audioRef.current) return;

        const audio = audioRef.current;
        audio.currentTime = 0;
        audio.play().catch(() => {});
    }, [revealed]);

    return (
        <section className="sh-step sh-clue-page">
            <h2>The Diary</h2>
            <p className="sh-italic-text">We&apos;ve intercepted a recording that may contain information about one of the objects we&apos;re looking for. This diary belonged to Tom Riddle when he was a student at Hogwarts. Someone has been using it to communicate with students. We don&apos;t know why, but Dumbledore seemed particularly concerned about it.</p>
            <p className="sh-italic-text">If you find it, don&apos;t write in it, don&apos;t even look at it too long or it might just snatch you up like it did Ginny Weasley! I wonder where that poor girl got taken…</p>
            <div className="sh-video-placeholder">VIDEO of diary</div>
            {revealed && (
                <div className="sh-scare-popup" role="alert" aria-live="assertive">
                    <img className="sh-scare-image" src={scareImage} alt="Jumpscare placeholder" />
                    <audio
                        ref={audioRef}
                        className="sh-scare-audio"
                        src={hissAudio}
                        preload="auto"
                        playsInline
                        aria-hidden="true"
                        style={{ display: "none" }}
                    />
                </div>
            )}
        </section>
    );
};

export default SHDiaryClue;
