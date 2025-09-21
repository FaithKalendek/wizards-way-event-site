import "./CharitiesPage.css"

/*Just info about each of the charities, what’s needed, how to donate, maybe some pics */

const CharitiesPage = () => {
  return (
    <section className="page-section">
      <h2 className="section-title">Charities</h2>
      <p>We’re proud to support:</p>
      <ul className="charity-list">
        <li><strong>Katie’s Cupboard</strong> – Local food pantry</li>
        <li><strong>Books from Beau</strong> – Collecting books for sick children</li>
      </ul>
    </section>
  );
}

export default CharitiesPage;
