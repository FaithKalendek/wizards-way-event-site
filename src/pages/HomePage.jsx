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
      <Banner
        title="Wizard's Way — Year 4"
        subtitle="November 7–9, 2025 — Free family fun (suggested donation to benefit local charities)"
        style={{ ['--banner-image']: "url('/banner-candles.jpg')" }}
      />
      <section className="home-section">
        <h3 className="heading-sub">Event Dates & Times</h3>
        <p>Friday, November 7 — 6:00 PM to 9:00 PM</p>
        <p>Saturday, November 8 — 1:00 PM to 4:00 PM (Yule Ball 6:00 PM to 9:00 PM)</p>
        <p>Sunday, November 9 — 1:00 PM to 6:00 PM</p>
        <p className="muted">No admission charge. Suggested donation: $10 per person / $20 per family to benefit our partner charities.</p>
      </section>
    </>
  );
}

export default HomePage;
