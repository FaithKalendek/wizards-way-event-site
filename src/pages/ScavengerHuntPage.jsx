// ScavengerHuntPage.jsx -- wrapper page that dynamically displays content based on entered scavenger hunt clue slug in url

import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./ScavengerHuntPage.css";

import SHWelcome from "../components/SHWelcome.jsx";
import SHEnding from "../components/SHEnding.jsx";
import SHDiaryClue from "../components/SHDiaryClue.jsx";
import SHRingClue from "../components/SHRingClue.jsx";
import SHLocketClue from "../components/SHLocketClue.jsx";
import SHCupClue from "../components/SHCupClue.jsx";
import SHDiademClue from "../components/SHDiademClue.jsx";
import SHNaginiClue from "../components/SHNaginiClue.jsx";
import SHHarryClue from "../components/SHHarryClue.jsx";

const ScavengerHuntPage = () => {
    const { clueSlug } = useParams();

    const [userInfo, setUserInfo] = useState({});
    const [currentTime, setCurrentTime] = useState(0);
    const [timeTaken, setTimeTaken] = useState(0);
    const [finalTimeCaptured, setFinalTimeCaptured] = useState(null);
    const [huntStarted, setHuntStarted] = useState(false);
    const [showTimer, setShowTimer] = useState(true);

    useEffect(() => {
        const start = sessionStorage.getItem('huntStart');
        if (start) {
            const elapsed = Math.floor((Date.now() - Number(start)) / 1000);
            setCurrentTime(elapsed);
            setHuntStarted(true);
        }

        try {
            const raw = sessionStorage.getItem('huntUserInfo');
            if (raw) {
                const parsed = JSON.parse(raw);
                setUserInfo(parsed);
            }
        } catch (e) {
            // ignore JSON errors
        }
    }, []);

    useEffect(() => {
        if (!huntStarted || clueSlug === 'reward') return undefined;
        const id = setInterval(() => {
            setCurrentTime(prev => prev + 1);
        }, 1000);
        return () => clearInterval(id);
    }, [huntStarted, clueSlug]);

    useEffect(() => {
        if (clueSlug !== 'reward') return;
        if (finalTimeCaptured !== null) return;

        const start = sessionStorage.getItem('huntStart');
        if (start) {
            const elapsed = Math.floor((Date.now() - Number(start)) / 1000);
            setFinalTimeCaptured(elapsed);
            setCurrentTime(elapsed);
            setTimeTaken(elapsed);
            return;
        }

        if (typeof currentTime === 'number' && currentTime > 0) {
            setFinalTimeCaptured(currentTime);
            setCurrentTime(currentTime);
            setTimeTaken(currentTime);
        }
    }, [clueSlug, currentTime, finalTimeCaptured]);

    const startHunt = (info = {}) => {
        const now = Date.now();
        sessionStorage.setItem('huntStart', String(now));
        const newInfo = { ...userInfo, ...info };
        setUserInfo(newInfo);
        try {
            sessionStorage.setItem('huntUserInfo', JSON.stringify(newInfo));
        } catch (e) {
            // ignore JSON errors
        }
        setCurrentTime(0);
        setHuntStarted(true);
    };

    const formatTime = (secs) => {
        const h = Math.floor(secs / 3600);
        const m = Math.floor((secs % 3600) / 60).toString().padStart(2, '0');
        const s = (secs % 60).toString().padStart(2, '0');
        return `${h.toString().padStart(2, '0')}:${m}:${s}`;
    };

    const renderStep = () => {
        const route = clueSlug;

        switch (route) {
            case 'welcome':
                return <SHWelcome setUserInfo={setUserInfo} currentTime={currentTime} setCurrentTime={setCurrentTime} startHunt={startHunt} />;
            case 'diary':
                return <SHDiaryClue />;
            case 'ring':
                return <SHRingClue />;
            case 'locket':
                return <SHLocketClue />;
            case 'cup':
                return <SHCupClue />;
            case 'diadem':
                return <SHDiademClue />;
            case 'nagini':
                return <SHNaginiClue />;
            case 'harry':
                return <SHHarryClue />;
            case 'reward':
                return <SHEnding userInfo={userInfo} currentTime={finalTimeCaptured ?? currentTime} timeTaken={timeTaken} setTimeTaken={setTimeTaken} />;
            default:
                return <SHWelcome setUserInfo={setUserInfo} currentTime={currentTime} setCurrentTime={setCurrentTime} startHunt={startHunt} />;
        }
    };

    const hideTimerForSteps = clueSlug === 'welcome' || clueSlug === 'reward';

    return (
        <div className="scavenger-hunt-page">
            {!hideTimerForSteps && huntStarted && showTimer && (
                <div className="sh-timer-bar">
                    <span className="sh-timer-label">Time Elapsed:</span>
                    <span className="sh-timer-value">{formatTime(currentTime)}</span>
                    <button className="sh-timer-toggle" onClick={() => setShowTimer(false)}>Hide Timer</button>
                </div>
            )}

            {!hideTimerForSteps && huntStarted && !showTimer && (
                <div className="sh-timer-bar minimized">
                    <button className="sh-timer-toggle" onClick={() => setShowTimer(true)}>Show Timer</button>
                </div>
            )}

            <div className="sh-step-wrapper">
                {renderStep()}
            </div>
        </div>
    );
};

export default ScavengerHuntPage;
