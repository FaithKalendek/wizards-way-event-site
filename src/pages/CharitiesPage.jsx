import "./CharitiesPage.css"

/*Just info about each of the charities, what’s needed, how to donate, maybe some pics */

const CharitiesPage = () => {
  return (
    <section className="page-section">
      <h2 className="section-title">Charities</h2>
      <p>We’re proud to support these local organizations — please bring donations to the event or visit their sites to learn more.</p>
      <ul className="charity-list">
        <li><strong>Katie’s Cupboard</strong> – Local food pantry (items needed: non-perishable foods, canned meats, soups, cereal, snacks, laundry/dish soap, paper products, personal hygiene items)</li>
        <li><strong>Books From Beau</strong> – Book donations for children and YA readers (new or used kids/YA books welcome)</li>
      </ul>
      <p>Other requested items: feminine hygiene products, baby diapers/wipes/pull-ups, incontinence products.</p>
    </section>
  );
}

export default CharitiesPage;
