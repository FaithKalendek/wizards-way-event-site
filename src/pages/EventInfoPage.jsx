import "./EventInfoPage.css"

const EventInfoPage = () => {
  return (
    <section>
      <h2 className="text-3xl font-bold">Event Info</h2>
      <p>📍 Location: [Insert address + Google Maps embed here]</p>
      <p>🕒 Dates: Sept 20–22, 2025</p>
      <h3 className="mt-4 text-2xl">Schedule</h3>
      <ul>
        <li>Friday – Kickoff</li>
        <li>Saturday – Main Events</li>
        <li>Sunday – Closing</li>
      </ul>
    </section>
  );
}

export default EventInfoPage;
