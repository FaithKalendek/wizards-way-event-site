import ActivityCard from "../components/ActivityCard.jsx";
import "./ActivitiesPage.css"

/* Each card should have:
Title
Small icon/image (thematic but not copyrighted from movies)
Short 2–3 sentence description */

const ActivitiesPage = () => {
  return (
    <section>
      <h2 className="text-3xl font-bold">Activities</h2>
      <div className="grid gap-4 md:grid-cols-2">
        <ActivityCard title="Triwizard Games" description="Try your hand at magical challenges!" />
        <ActivityCard title="Food Trucks" description="Grab a magical bite from local vendors." />
      </div>
    </section>
  );
}

export default ActivitiesPage;
