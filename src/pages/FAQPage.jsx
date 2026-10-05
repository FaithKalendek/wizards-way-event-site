import "./FAQPage.css"

const FAQPage = () => {
  const faqs = [
    {
      q: "What should I bring?",
      a: "Bring yourselves and your family, and feel free to dress in costume or Hogwarts-inspired fashion! We welcome donations for Katie’s Cupboard and Books From Beau, as well as St. Baldrick’s fundraising support. Suggested items include food staples, cleaning supplies, personal hygiene products, feminine hygiene items, diapers, adult incontinence products, and books in any condition — especially children’s books and YA titles!"
    },
    {
      q: "What is this year’s theme?",
      a: "This year’s theme is Harry Potter and the Order of the Phoenix! Expect familiar faces from past years, special character appearances, games, scavenger hunts, photo opportunities, and plenty of fun for all ages!"
    },
    {
      q: "Are kids welcome?",
      a: "Absolutely! Wizard’s Way is designed as a family-friendly event with free goody bags for kids, scavenger hunts, games, and lots of magical fun for all ages!"
    },
    {
      q: "When and where is the event?",
      a: "The event runs on Sat Oct 24 from 2:00 PM to 8:00 PM, Sun Oct 25 from 2:00 PM to 8:00 PM, Sat Oct 31 from 11:00 AM to 2:00 PM, Sun Nov 1 from 2:00 PM to 8:00 PM, and Sat Nov 7 from 2:00 PM to 8:00 PM! We’re based in Boonsboro, Maryland, and the Hogwarts Express will also be part of the Alsatia Mummers Parade in downtown Hagerstown on Saturday evening, October 31!"
    },
    {
      q: "How can I get involved?",
      a: "You can volunteer, become part of the cast, help with event setup, serve as a food vendor, or sponsor the event! You can also donate directly to our charities or text 301-302-3152 for more information."
    }
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
