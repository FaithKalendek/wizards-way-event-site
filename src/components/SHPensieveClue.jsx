import howlerVideo from "../assets/dumbeldore howler.mp4";

const SHPensieveClue = () => {
    return (
        <section className="sh-step sh-clue-page sh-pensieve-page">
            <video
                className="sh-pensieve-video"
                src={howlerVideo}
                autoPlay
                controls
                playsInline
            />
            <p>No number, proceed to the Library.</p>
        </section>
    );
};

export default SHPensieveClue;
