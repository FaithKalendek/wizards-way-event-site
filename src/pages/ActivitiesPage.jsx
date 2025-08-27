import EventCard from "../components/EventCard.jsx";

const ActivitiesPage = () => {
  return (
    <section>
      <h2 className="text-3xl font-bold">Activities</h2>
      <div className="grid gap-4 md:grid-cols-2">
        <EventCard title="Triwizard Games" description="Try your hand at magical challenges!" />
        <EventCard title="Food Trucks" description="Grab a magical bite from local vendors." />
      </div>
    </section>
  );
}

export default ActivitiesPage;
