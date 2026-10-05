import "./CharitiesPage.css"

const CharitiesPage = () => {
  return (
    <section className="page-section">
      <h2 className="section-title">Charities</h2>
      <p>We’re proud to support these local organizations — please bring donations to the event or visit their sites to learn more and help us spread some extra magic!</p>

      <div className="charity-list">
        <div>
          <h3>Katie’s Cupboard</h3>
          <p>Katie’s Cupboard is a nonprofit food, household, and hygiene pantry serving residents of Boonsboro and surrounding zip codes of Washington County, Maryland, twice monthly. They provide food staples, dairy products, meats, cleaning items, personal health and hygiene items like toilet paper, toothpaste, shampoo, deodorant, feminine hygiene products, and occasionally diapers and adult incontinence products. They also provide household necessities like trash bags, cleaners, laundry detergent, dish soap, and more. Katie’s Cupboard is funded by the generosity of Benevola United Methodist Church and private donations, and they accept monetary contributions as well as donations of food or household and hygiene items.</p>
        </div>

        <div>
          <h3>Books From Beau</h3>
          <p>Books From Beau helps children and families by providing books to pediatric patients and young readers. Over the past couple of years, our events have helped collect more than 2,000 books for this cause. We welcome books in any condition, with a special preference for children’s books from toddler board books through YA novels, graphic novels, and other age-appropriate reads.</p>
        </div>

        <div>
          <h3>St. Baldrick’s</h3>
          <p>This year, our dear friends the Armstrong family joins us to raise awareness and funds for St. Baldrick’s, an organization deeply connected to their family. We are grateful for their participation and for their voice for children battling cancer and their families. St. Baldrick’s is committed to funding childhood cancer research and bringing hope to families across the country. Their mission is rooted in the reality that childhood cancer remains one of the deadliest diseases affecting children, and they work tirelessly to support research that can improve treatment and save lives.</p>
          <p>Meet 2026 Ambassador Laurel, a six-year-old whose story reflects strength, joy, and resilience. After being diagnosed with B-cell acute lymphoblastic leukemia at just three years old, Laurel faced more than two years of treatment, hospital stays, and intense medical care. Today she is in remission and inspiring others with her courage, laughter, and determination to keep living a full and joyful childhood. Her family’s connection to St. Baldrick’s is personal and powerful, and we are honored to stand with them in support of childhood cancer research.</p>
          <p><a href="https://www.stbaldricks.org/" target="_blank" rel="noreferrer">Learn more about St. Baldrick’s</a></p>
        </div>
      </div>

      <h3>Suggested Donation Items</h3>
      <ul className="charity-list">
        <li>Non-perishable food items</li>
        <li>Canned meats, soups, and vegetables</li>
        <li>Cereal, snacks, peanut butter, and shelf-stable staples</li>
        <li>Toilet paper, toothpaste, shampoo, deodorant, soap, and feminine hygiene products</li>
        <li>Diapers, wipes, pull-ups, and adult incontinence products</li>
        <li>Trash bags, cleaners, laundry detergent, dish soap, and household essentials</li>
        <li>Books in any condition, especially children’s books, graphic novels, and YA titles</li>
      </ul>

      <p>St. Baldrick’s donations can be made through their link at the event, and there will also be merchandise for sale to help raise funds and awareness. Every contribution helps support research and families affected by childhood cancer.</p>
    </section>
  );
}

export default CharitiesPage;
