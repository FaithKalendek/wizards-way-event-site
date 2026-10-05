import Banner from "../components/Banner.jsx";
import "./HomePage.css"

const HomePage = () => {
  return (
    <>
      <Banner
        title="Wizard's Way — Year 5"
        subtitle="The Harry Potter House of Boonsboro MD • Family Fun Fest Charity Event 2026"
        style={{ ['--banner-image']: "url('/banner-candles.jpg')" }}
      />
      <section className="home-section">
        <h3 className="heading-sub">Event Dates & Times</h3>
        <ul>
          <li>Sat Oct 24 — 2:00 PM to 8:00 PM</li>
          <li>Sun Oct 25 — 2:00 PM to 8:00 PM</li>
          <li>Sat Oct 31 — 11:00 AM to 2:00 PM</li>
          <li>Sun Nov 1 — 2:00 PM to 8:00 PM</li>
          <li>Sat Nov 7 — 2:00 PM to 8:00 PM</li>
        </ul>

        <p>Come join us for a magical event full of fun for the whole family! Free to enter, free goody bags for kids, free games and scavenger hunts, and plenty of chances for prizes for our grown-up wizards, witches, and muggles too! Food vendors will be on-site, and donations of goods and funds support our charity partners!</p>

        <p>This year’s theme is Harry Potter and the Order of the Phoenix! We’ll meet Professor Umbridge, Tonks, Luna, Neville, and all the familiar characters from past years. There will be lots of great games and prizes, photo opportunities, and fun for all ages!</p>

        <p className="home-parade-note">Don’t forget to catch us in the Alsatia Mummers Parade on Saturday evening, October 31, in downtown Hagerstown, where the Hogwarts Express will roll through the streets casting spells and spreading the word about Wizard’s Way and our charity partners!</p>
      </section>
    </>
  );
}

export default HomePage;
