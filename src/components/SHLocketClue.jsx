import { useState } from "react";

const founders = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];
const relics = [
    { id: "sword", name: "Sword" },
    { id: "cup", name: "Cup" },
    { id: "diadem", name: "Diadem" },
    { id: "locket", name: "Locket" },
];

const solution = {
    sword: "Gryffindor",
    cup: "Hufflepuff",
    diadem: "Ravenclaw",
    locket: "Slytherin",
};

const SHLocketClue = () => {
    const [draggedRelic, setDraggedRelic] = useState(null);
    const [selectedRelic, setSelectedRelic] = useState(null);
    const [assignments, setAssignments] = useState({
        Gryffindor: null,
        Hufflepuff: null,
        Ravenclaw: null,
        Slytherin: null,
    });

    const onDragStart = (relicId) => {
        setDraggedRelic(relicId);
    };

    const placeRelic = (founder) => {
        const relicToPlace = draggedRelic || selectedRelic;
        if (!relicToPlace) return;

        setAssignments((prev) => {
            const next = { ...prev };
            Object.keys(next).forEach((key) => {
                if (next[key] === relicToPlace) {
                    next[key] = null;
                }
            });
            next[founder] = relicToPlace;
            return next;
        });
        setDraggedRelic(null);
        setSelectedRelic(null);
    };

    const isSolved = founders.every((founder) => assignments[founder] && assignments[founder] === Object.entries(solution).find(([, owner]) => owner === founder)?.[0]);

    const availableRelics = relics.filter((relic) => !Object.values(assignments).includes(relic.id));

    return (
        <section className="sh-step sh-clue-page">
            <h2>INTELLIGENCE RECOVERED — THE LOCKET</h2>
            <p className="sh-italic-text">We found another record belonging to Dumbledore.</p>
            <p className="sh-italic-text">Four objects were once treasured by the founders of Hogwarts. We believe one of them is connected to the object you&apos;re looking for.</p>
            <p className="sh-italic-text">Unfortunately, our records are scrambled.</p>
            <p className="sh-italic-text"><strong>Match each relic to the founder who once owned it.</strong></p>

            <div className="sh-locket-game">
                <div className="sh-locket-pool">
                    {availableRelics.map((relic) => (
                        <div
                            key={relic.id}
                            className={`sh-locket-card ${selectedRelic === relic.id ? "is-selected" : ""}`}
                            draggable
                            onDragStart={() => onDragStart(relic.id)}
                            onClick={() => setSelectedRelic(relic.id)}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => {
                                if (e.key === "Enter" || e.key === " ") {
                                    e.preventDefault();
                                    setSelectedRelic(relic.id);
                                }
                            }}
                        >
                            {relic.name}
                        </div>
                    ))}
                </div>

                <div className="sh-locket-slots">
                    {founders.map((founder) => (
                        <div
                            key={founder}
                            className="sh-locket-slot"
                            onDragOver={(e) => e.preventDefault()}
                            onDrop={() => placeRelic(founder)}
                            onClick={() => placeRelic(founder)}
                        >
                            <span className="sh-locket-founder">{founder}</span>
                            <div className="sh-locket-slot-value">
                                {assignments[founder] ? relics.find((relic) => relic.id === assignments[founder])?.name : "Drop relic here"}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <p className="hint sh-italic-text">On mobile: tap a relic, then tap a founder to place it.</p>

            {isSolved && (
                <>
                <p className="success sh-italic-text">
                    RECORDS RESTORED. <br />
                    Three founders stood together and feasted well, <br />
                    One slinked away. <br />
                    3 — 1
                </p>
                <p>Number: 31, Proceed to the seating area.</p>
                </>
            )}
        </section>
    );
};

export default SHLocketClue;
