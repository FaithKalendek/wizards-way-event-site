import "./StyleTest.css";

export default function StyleTest() {
  return (
    <div className="style-test-container">
      {/* Heading Section */}
      <section>
        <h1 className="heading-main">Wizard’s Way</h1>
        <h2 className="heading-sub">Subheading</h2>
        <p className="body-text">
          This is normal body text. White by default for readability.
        </p>
      </section>

      {/* Buttons */}
      <section>
        <h2 className="section-title">Buttons</h2>
        <div className="button-row">
          <button className="btn-primary">Primary Button</button>
          <button className="btn-secondary">Secondary Button</button>
        </div>
      </section>

      {/* Cards */}
      <section>
        <h2 className="section-title">Cards</h2>
        <div className="card-grid">
          <div className="card-border">
            <h3 className="card-title">Charity Name</h3>
            <p>Helping kids through books and food donations…</p>
          </div>
          <div className="card-border">
            <h3 className="card-title">Activity Name</h3>
            <p>Try out this magical adventure activity…</p>
          </div>
        </div>
      </section>
    </div>
  );
}
