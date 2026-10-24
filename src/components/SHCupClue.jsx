import { useState } from "react";

const houses = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];
const seats = ["Seat 1", "Seat 2", "Seat 3", "Seat 4"];
const correctOrder = ["Hufflepuff", "Ravenclaw", "Gryffindor", "Slytherin"];

const houseClues = {
    Gryffindor: "I heard the object was made of gold.",
    Hufflepuff: "My friend says it once belonged to one of the four founders.",
    Ravenclaw: "Someone mentioned that its owner valued hard work above everything else.",
    Slytherin: "Tom Riddle eventually became interested in it.",
};

const createEmptyAssignments = () => ({
    "Seat 1": null,
    "Seat 2": null,
    "Seat 3": null,
    "Seat 4": null,
});

const SHCupClue = () => {
    const [draggedHouse, setDraggedHouse] = useState(null);
    const [selectedHouse, setSelectedHouse] = useState(null);
    const [assignments, setAssignments] = useState(createEmptyAssignments());

    const onDragStart = (house) => {
        setDraggedHouse(house);
    };

    const placeHouseInSeat = (seat) => {
        const houseToPlace = draggedHouse || selectedHouse;
        if (!houseToPlace) return;

        setAssignments((prev) => {
            const next = { ...prev };
            Object.keys(next).forEach((key) => {
                if (next[key] === houseToPlace) {
                    next[key] = null;
                }
            });
            next[seat] = houseToPlace;
            return next;
        });
        setDraggedHouse(null);
        setSelectedHouse(null);
    };

    const resetBoard = () => {
        setAssignments(createEmptyAssignments());
        setDraggedHouse(null);
        setSelectedHouse(null);
    };

    const isSolved = seats.every((seat, index) => assignments[seat] === correctOrder[index]);
    const availableHouses = houses.filter((house) => !Object.values(assignments).includes(house));

    return (
        <section className="sh-step sh-clue-page">
            <h2>The Cup</h2>
            <p className="sh-italic-text">“Four students were seen carrying information about one of the objects we&apos;re looking for. Unfortunately, the seating chart has been scrambled and we can&apos;t find them. We know four students were involved. One from each house. Place each student in the correct seat. Every correct placement will reveal a piece of the rumor surrounding the object.”</p>
            <ul className="sh-italic-text">
                <li>1. The Ravenclaw was sitting at neither end of the table.</li>
                <li>2. The Ravenclaw was sitting somewhere to the left of Gryffindor.</li>
                <li>3. The Slytherin was sitting immediately to the right of the Gryffindor.</li>
                <li>4. The Gryffindor was not sitting beside the Hufflepuff.</li>
                <li>5. The Hufflepuff was sitting closer to the left end of the table than the Slytherin.</li>
            </ul>

            <div className="sh-cup-controls">
                <div className="sh-cup-seat-legend" aria-label="Seating chart from left to right">
                    <span className="sh-cup-table-edge">Left end</span>
                    {seats.map((seat) => (
                        <span key={seat} className="sh-cup-seat-tag">{seat}</span>
                    ))}
                    <span className="sh-cup-table-edge">Right end</span>
                </div>
                <button type="button" className="sh-cup-reset-btn" onClick={resetBoard}>Reset seating chart</button>
            </div>

            <div className="sh-locket-game">
                <div className="sh-locket-pool">
                    {availableHouses.map((house) => (
                        <div
                            key={house}
                            className={`sh-locket-card ${selectedHouse === house ? "is-selected" : ""}`}
                            draggable
                            onDragStart={() => onDragStart(house)}
                            onClick={() => setSelectedHouse(house)}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => {
                                if (e.key === "Enter" || e.key === " ") {
                                    e.preventDefault();
                                    setSelectedHouse(house);
                                }
                            }}
                        >
                            {house}
                        </div>
                    ))}
                </div>

                <div className="sh-locket-slots">
                    {seats.map((seat) => {
                        const house = assignments[seat];
                        const isCorrect = house === correctOrder[seats.indexOf(seat)];

                        return (
                            <div
                                key={seat}
                                className={`sh-locket-slot ${isCorrect ? "is-correct" : ""}`}
                                onDragOver={(e) => e.preventDefault()}
                                onDrop={() => placeHouseInSeat(seat)}
                                onClick={() => placeHouseInSeat(seat)}
                            >
                                <span className="sh-locket-founder">
                                    {seat}
                                    {seat === "Seat 1" ? " (left)" : seat === "Seat 4" ? " (right)" : ""}
                                </span>
                                <div className="sh-locket-slot-value">
                                    {house || "Drop house here"}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <p className="hint sh-italic-text">On mobile: tap a house, then tap a seat to place it.</p>

            <div className="sh-cup-clue-list">
                {seats.map((seat) => {
                    const house = assignments[seat];
                    const isCorrect = house === correctOrder[seats.indexOf(seat)];

                    if (!isCorrect || !house) {
                        return null;
                    }

                    return (
                        <div key={seat} className="sh-cup-clue-reveal">
                            <p className="sh-italic-text"><strong>{house} student:</strong> “{houseClues[house]}”</p>
                        </div>
                    );
                })}
            </div>

            {isSolved && (
                <p className="success sh-italic-text">
                    OBJECT IDENTIFIED: HELGA HUFFLEPUFF&apos;S CUP, #1 House, found under the seat of Luna Lovegood who states: “I was looking for the diadem, I think I&apos;ll try the whomping willow next.”
                </p>
            )}
        </section>
    );
};

export default SHCupClue;
