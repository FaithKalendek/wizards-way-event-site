// ScavengerHuntPage.jsx -- wrapper page that dynamically displays content based on entered scavenger hunt step id in url

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./ScavengerHuntPage.css"
// Import components for each scavenger hunt step/clue
import SHWelcome from "../components/SHWelcome.jsx"; // Info form for certificate and start timer --> redirect to clue 1
import SHFirstClue from "../components/SHFirstClue.jsx"; // Dragons --> dragon area
import SHSecondClue from "../components/SHSecondClue.jsx"; // Myrtle --> redirect to next clue
import SHThirdClue from "../components/SHThirdClue.jsx"; // Egg --> Lake
import SHFourthClue from "../components/SHFourthClue.jsx"; // Music code --> Baggage
import SHFifthClue from "../components/SHFifthClue.jsx"; // Dance Card --> Quidditch
import SHLastClue from "../components/SHLastClue.jsx"; // Moody dialogue --> Moody
import SHEnding from "../components/SHEnding.jsx"; // Generate certificate from collected user info, use time taken

const ScavengerHuntPage = () => {

    const { stepId } = useParams();

    // Global useStates for user info, time to be passed as props to components
    const [userInfo, setUserInfo] = useState({});
    const [currentTime, setCurrentTime] = useState(0); // seconds
    const [timeTaken, setTimeTaken] = useState(0);
    const [huntStarted, setHuntStarted] = useState(false);
    const [showTimer, setShowTimer] = useState(true);

    // Initialize from sessionStorage if a hunt start timestamp exists
    useEffect(() => {
        const start = sessionStorage.getItem('huntStart');
        if (start) {
            const elapsed = Math.floor((Date.now() - Number(start)) / 1000);
            setCurrentTime(elapsed);
            setHuntStarted(true);
        }
        // Restore userInfo if available (so direct visits to /scavengerhunt/7 still show info)
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

    // Central timer: run only in parent so it persists across child changes
    useEffect(() => {
        if (!huntStarted) return undefined;
        const id = setInterval(() => {
            setCurrentTime(prev => prev + 1);
        }, 1000);
        return () => clearInterval(id);
    }, [huntStarted]);

    // function children can call to start the hunt (sets sessionStorage and starts timer)
    const startHunt = (info = {}) => {
        const now = Date.now();
        sessionStorage.setItem('huntStart', String(now));
        const newInfo = { ...userInfo, ...info };
        setUserInfo(newInfo);
        try {
            sessionStorage.setItem('huntUserInfo', JSON.stringify(newInfo));
        } catch (e) { }
        setCurrentTime(0);
        setHuntStarted(true);
    };

    const formatTime = (secs) => {
        const m = Math.floor(secs / 60).toString().padStart(2, '0');
        const s = (secs % 60).toString().padStart(2, '0');
        return `${m}:${s}`;
    };

    // Pair components with step IDs
    const stepComponents = {
        "0": <SHWelcome setUserInfo={setUserInfo} currentTime={currentTime} setCurrentTime={setCurrentTime} startHunt={startHunt} />,
        "1": <SHFirstClue currentTime={currentTime} setCurrentTime={setCurrentTime}/>,
        "2": <SHSecondClue currentTime={currentTime} setCurrentTime={setCurrentTime}/>,
        "3": <SHThirdClue currentTime={currentTime} setCurrentTime={setCurrentTime}/>,
        "4": <SHFourthClue currentTime={currentTime} setCurrentTime={setCurrentTime}/>,
        "5": <SHFifthClue currentTime={currentTime} setCurrentTime={setCurrentTime}/>,
        "6": <SHLastClue currentTime={currentTime} setCurrentTime={setCurrentTime}/>,
        "7": <SHEnding userInfo={userInfo} currentTime={currentTime} setTimeTaken={setTimeTaken} timeTaken={timeTaken} />
    };

    /*
    initial qr code scan on goblet of fire -->  form for scoreboard name/contact info --> redirect to page with first clue and start timer (counting up so they can see how long it took them -- have option to hide if it stresses them out) first clue == dragon --> look for dragons to find next qrcode --> next clue is a gif of moaning myrtle "password please" with slot to enter password, answer is "pine fresh", hint for password is "go ask a prefect" --> redirect to egg riddle -- play clip from movie --> go to black lake for next qr code --> piece of sheet music with notes spelling word "BAGGAGE" --> go to Hogwarts express luggage --> on victor krumm's suitcase --> list of couples at yule ball and locations --> go to only location with couple actually at yule ball -- quidditch pitch --> get last qr code, links to moody audio clip --> final qr code hidden on moody's flask, certificate generator (make a certificate with entered name, record time after final clue submit success) 
    */

    // Render stuff for component specified by url param
    const hideTimerForSteps = stepId === "0" || stepId === "7";

    return (
        <div className="scavenger-hunt-page">
            { !hideTimerForSteps && huntStarted && showTimer && (
                <div className="sh-timer-bar">
                    <span className="sh-timer-label">Time Elapsed:</span>
                    <span className="sh-timer-value">{formatTime(currentTime)}</span>
                    <button className="sh-timer-toggle" onClick={() => setShowTimer(false)}>Hide Timer</button>
                </div>
            )}

            { !hideTimerForSteps && huntStarted && !showTimer && (
                <div className="sh-timer-bar minimized">
                    <button className="sh-timer-toggle" onClick={() => setShowTimer(true)}>Show Timer</button>
                </div>
            )}

            <div className="sh-step-wrapper">
                { stepComponents[stepId] }
            </div>
        </div>
    );

}

export default ScavengerHuntPage;
