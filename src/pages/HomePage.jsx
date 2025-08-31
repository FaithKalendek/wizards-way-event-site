import Banner from "../components/Banner.jsx";
import "./HomePage.css"

/*Hero Section: Big banner with event name (“Wizard’s Way”), maybe background image (castle / books / candles).
Quick Links: Buttons to “Directions” + “Explore Activities”
About blurb: 2–3 sentences about what Wizard’s Way is, maybe a pic from last year – Aunt Nicole is going to send about info
Call to Action: “Join us this year!”
Small cards or icons for each charity supported (book drive + food pantry) & little blurb + link to learn more (routes to Charities page) */

const HomePage = () => {
  return (
    <>
      <Banner title="Wizard's Way: Year 4" subtitle="Goblet of Fire Adventure Awaits" />
      <section className="mt-8 text-center">
        <h3 className="text-2xl font-bold">Event Dates</h3>
        <p>September 20–22, 2025</p>
        <p>Free Family Fun | Donations Welcome</p>
      </section>
    </>
  );
}

export default HomePage;
