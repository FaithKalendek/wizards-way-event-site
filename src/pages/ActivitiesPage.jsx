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
      <p>Step into the magic of Harry Potter and the Order of the Phoenix! This year’s event features character encounters, magical games, scavenger hunts, photo moments, and surprises for all ages. Costumes are encouraged and plenty of fun is waiting around every corner!</p>

      <div className="card-grid">
        <ActivityCard title="Order of the Phoenix Adventures" description="Explore a year of magical mischief, mystery, and mayhem inspired by the fifth book and movie adventure." />
        <ActivityCard title="Strolling Characters" description="Meet Professor Umbridge, Tonks, Luna, Neville, and other familiar faces for photos and magical interactions." />
        <ActivityCard title="Food Trucks & Vendors" description="Enjoy food, drinks, and treats from local vendors while you wander through the spellbound fun." />
        <ActivityCard title="Scavenger Hunts & Prizes" description="Follow the clues, unlock hidden surprises, and win fun prizes as you explore the grounds." />
        <ActivityCard title="Costume Contests" description="NEW THIS YEAR! We’ll have two costume contests every day, with one adult costume and one child costume awarded at noon and 6:00 PM each day. Dress to impress and show us your best magical look!" />
        <ActivityCard title="Raffles & Prize Packs" description="We’ll have raffle prize packs with themed merchandise and more. Tickets are $1 each, $3 for 5 tickets, or $5 for 10 tickets, and proceeds support event expenses and our partner organizations." />
      </div>
    </section>
  );
}

export default ActivitiesPage;
