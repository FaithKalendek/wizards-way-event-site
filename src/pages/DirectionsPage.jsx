import "./DirectionsPage.css";

/*Google maps embed ⟶ user can click on “Get Directions” button to be redirected to google maps to put in their address to get directions from */

const DirectionsPage = () => {
  return (
    <section>
      <h2 className="text-3xl font-bold">Directions</h2>
      <p>Get directions to the event location.</p>
      {/* Gonna add a google maps embed (or similar) here */}
    </section>
  );
}

export default DirectionsPage;
