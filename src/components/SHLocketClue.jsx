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
    const [assignments, setAssignments] = useState({
        Gryffindor: null,
        Hufflepuff: null,
        Ravenclaw: null,
        Slytherin: null,
    });

    const onDragStart = (relicId) => {
        setDraggedRelic(relicId);
    };

    const onDrop = (founder) => {
        if (!draggedRelic) return;

        setAssignments((prev) => {
            const next = { ...prev };
            Object.keys(next).forEach((key) => {
                if (next[key] === draggedRelic) {
                    next[key] = null;
                }
            });
            next[founder] = draggedRelic;
            return next;
        });
        setDraggedRelic(null);
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
                            className="sh-locket-card"
                            draggable
                            onDragStart={() => onDragStart(relic.id)}
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
                            onDrop={() => onDrop(founder)}
                        >
                            <span className="sh-locket-founder">{founder}</span>
                            <div className="sh-locket-slot-value">
                                {assignments[founder] ? relics.find((relic) => relic.id === assignments[founder])?.name : "Drop relic here"}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {isSolved && (
                <p className="success sh-italic-text">
                    RECORDS RESTORED. <br />
                    Three founders stood together and feasted well, <br />
                    One slinked away. <br />
                    3 — 1
                </p>
            )}
        </section>
    );
};

export default SHLocketClue;
