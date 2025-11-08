import React, { useEffect } from "react";

// Stop time, save user info and finish time to a google sheet and create certificate to display

const SHEnding = ({ userInfo, currentTime, setTimeTaken, timeTaken }) => {

    // On component mount, set time taken
    useEffect(() => {
        setTimeTaken(currentTime);
    }, [currentTime, setTimeTaken]);

    return (
        <section className="sh-step sh-ending">
            { /* Display certificate with user's name and time taken */ }
            <h2>Congratulations, {userInfo.name}!</h2>
            <p>You have completed the scavenger hunt!</p>
            <p>Your time: {Math.floor(timeTaken / 60).toString().padStart(2, '0')}:{(timeTaken % 60).toString().padStart(2, '0')}</p>
            <p>Thank you for participating!</p>
            { userInfo.canPutInDrawing && 
                <p>You have been entered into the prize drawing!</p> 
            }
        </section>
    );
};

export default SHEnding;