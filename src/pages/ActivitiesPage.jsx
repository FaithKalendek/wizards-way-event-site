import ActivityCard from "../components/ActivityCard.jsx";
import "./ActivitiesPage.css"

/* Each card should have:
Title
Small icon/image (thematic but not copyrighted from movies)
Short 2–3 sentence description */

const ActivitiesPage = () => {
  return (
    <section className="page-section">
      <h2 className="section-title">Activities</h2>
      <p>Recreated iconic places, strolling characters, games & challenges inspired by the Goblet of Fire, scavenger hunts with prizes, and surprises for younger attendees. Costumes encouraged — plenty of photo ops!</p>
      <div className="card-grid">
        <ActivityCard title="Triwizard-style Challenges" description="Try your hand at friendly magical games and win prizes." />
        <ActivityCard title="Scavenger Hunts" description="Follow clues around the event for small prizes and surprises." />
        <ActivityCard title="Strolling Characters" description="Meet costumed characters stationed around the grounds for photos and interactions." />
        <ActivityCard title="Food Trucks & Vendors" description="Food and drinks available for purchase; water and snacks provided." />
      </div>
    </section>
  );
}

export default ActivitiesPage;
