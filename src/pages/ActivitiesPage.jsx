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
      <div className="card-grid">
        <ActivityCard title="Triwizard Games" description="Try your hand at magical challenges!" />
        <ActivityCard title="Food Trucks" description="Grab a magical bite from local vendors." />
      </div>
    </section>
  );
}

export default ActivitiesPage;
