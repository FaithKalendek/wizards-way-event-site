import "./FAQPage.css"

const FAQPage = () => {
  const faqs = [
    { q: "What should I bring?", a: "Just bring yourselves (costumes encouraged) and some items to donate to our sponsored charities! Food and drinks--some themed!--will be available from food trucks and vendors on-site. See charities page for lists of needed items." },
    { q: "Are kids welcome?", a: "Yes — most activities are family-friendly. Surprises for younger attendees will be available." },
    { q: "Is there parking?", a: "Yes, on-site parking is available. Event is held in a residential neighborhood; please be respectful of private property, lawns, driveways, mailboxes, etc." },
    { q: "What's the Yule Ball?", a: "The Yule Ball is a special ticketed evening event on Saturday Nov 8 from 6–9pm with music, dancing, a costume contest, and special prizes." }
  ]

  return (
    <section className="page-section faq-page">
      <h2 className="section-title">FAQ</h2>
      <div className="faq-list">
        {faqs.map((f, idx) => (
          <details key={idx} className="faq-item">
            <summary>{f.q}</summary>
            <p>{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}

export default FAQPage
