const SHReward = ({ userInfo, currentTime }) => {
    const personName = userInfo?.name || 'Wizard';
    const displaySeconds = Number.isFinite(currentTime) && currentTime > 0 ? currentTime : 0;
    const formatTime = (secs) => {
        const h = Math.floor(secs / 3600);
        const m = Math.floor((secs % 3600) / 60).toString().padStart(2, '0');
        const s = (secs % 60).toString().padStart(2, '0');
        return `${h.toString().padStart(2, '0')}:${m}:${s}`;
    };

    return (
        <section className="sh-step sh-reward-page">
            <h2>Victory!</h2>
            <p>Congratulations, {personName}! You solved the code and unlocked the final reward.</p>
            <div className="sh-reward-video-placeholder">
                <p>Victory video goes here</p>
            </div>
            <p>You&apos;re now entered into the raffle.</p>
            <p>Time completed: {formatTime(displaySeconds)}</p>
        </section>
    );
};

export default SHReward;
