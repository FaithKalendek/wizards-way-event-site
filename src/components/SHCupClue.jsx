import { useState } from "react";

const houses = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];
const seats = ["Seat 1", "Seat 2", "Seat 3", "Seat 4"];

const correctOrder = ["Hufflepuff", "Ravenclaw", "Gryffindor", "Slytherin"];

const SHCupClue = () => {
    const [draggedHouse, setDraggedHouse] = useState(null);
    const [assignments, setAssignments] = useState({
        "Seat 1": null,
        "Seat 2": null,
        "Seat 3": null,
        "Seat 4": null,
    });

    const onDragStart = (house) => {
        setDraggedHouse(house);
    };

    const onDrop = (seat) => {
        if (!draggedHouse) return;

        setAssignments((prev) => {
            const next = { ...prev };
            Object.keys(next).forEach((key) => {
                if (next[key] === draggedHouse) {
                    next[key] = null;
                }
            });
            next[seat] = draggedHouse;
            return next;
        });
        setDraggedHouse(null);
    };

    const isSolved = seats.every((seat, index) => assignments[seat] === correctOrder[index]);
    const availableHouses = houses.filter((house) => !Object.values(assignments).includes(house));

    return (
        <section className="sh-step sh-clue-page">
            <h2>The Cup</h2>
            <p className="sh-italic-text">“Four students were seen carrying information about one of the objects we&apos;re looking for. Unfortunately, the seating chart has been scrambled and we can&apos;t find them. We know four students were involved. One from each house. Place each student in the correct seat. Every correct placement will reveal a piece of the rumor surrounding the object.”</p>
            <p className="sh-italic-text"><strong>Seat 1 (H) — Seat 2 (R) — Seat 3 (G) — Seat 4 (S)</strong></p>
            <ul className="sh-italic-text">
                <li>1. The Ravenclaw was sitting at neither end of the table.</li>
                <li>2. The Ravenclaw was sitting somewhere to the left of Gryffindor.</li>
                <li>3. The Slytherin was sitting immediately to the right of the Gryffindor.</li>
                <li>4. The Gryffindor was not sitting beside the Hufflepuff.</li>
                <li>5. The Hufflepuff was sitting closer to the left end of the table than the Slytherin.</li>
            </ul>
            <p className="sh-italic-text">Gryffindor student: “I heard the object was made of gold.”</p>
            <p className="sh-italic-text">Hufflepuff student: “My friend says it once belonged to one of the four founders.”</p>
            <p className="sh-italic-text">Ravenclaw student: “Someone mentioned that its owner valued hard work above everything else.”</p>
            <p className="sh-italic-text">Slytherin student: “Tom Riddle eventually became interested in it.”</p>

            <div className="sh-locket-game">
                <div className="sh-locket-pool">
                    {availableHouses.map((house) => (
                        <div
                            key={house}
                            className="sh-locket-card"
                            draggable
                            onDragStart={() => onDragStart(house)}
                        >
                            {house}
                        </div>
                    ))}
                </div>

                <div className="sh-locket-slots">
                    {seats.map((seat) => (
                        <div
                            key={seat}
                            className="sh-locket-slot"
                            onDragOver={(e) => e.preventDefault()}
                            onDrop={() => onDrop(seat)}
                        >
                            <span className="sh-locket-founder">{seat}</span>
                            <div className="sh-locket-slot-value">
                                {assignments[seat] || "Drop house here"}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {isSolved && (
                <p className="success sh-italic-text">
                    OBJECT IDENTIFIED: HELGA HUFFLEPUFF&apos;S CUP.
                </p>
            )}
        </section>
    );
};

export default SHCupClue;
