import "./CharitiesPage.css"

const CharitiesPage = () => {
  return (
    <section>
      <h2 className="text-3xl font-bold">Charities</h2>
      <p>We’re proud to support:</p>
      <ul className="list-disc ml-6">
        <li><strong>Katie’s Cupboard</strong> – Local food pantry</li>
        <li><strong>Books from Beau</strong> – Collecting books for sick children</li>
      </ul>
    </section>
  );
}

export default CharitiesPage;
