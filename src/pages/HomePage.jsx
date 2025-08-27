import Banner from "../components/Banner.jsx";

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
