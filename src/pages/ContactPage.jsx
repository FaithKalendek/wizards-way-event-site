import "./ContactPage.css"

/*Contact info and/or an embedded google form or typeform to collect responses (wouldn’t be helpful or practical in this scenario to store responses in a database via a backend that I would write) */

const ContactPage = () => {
  return (
    <section className="page-section contact-info">
      <h2 className="section-title">Contact</h2>
      <p>Email: WizardsWayBoonsboro@gmail.com</p>
      <p>Follow us on <a href="https://www.facebook.com/profile.php?id=100088512242872">Facebook</a> & <a href="https://www.instagram.com/wizardswayboonsboromd">Instagram</a>!</p>
    </section>
  );
}

export default ContactPage;
