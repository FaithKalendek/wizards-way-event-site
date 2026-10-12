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
      a: "Absolutely! Wizard’s Way is designed as a family-friendly event with free goody bags for kids, scavenger hunts, games, and lots of magical fun for all ages! Any minors must have an adult on the premises with them at all times. Children under 10 must have an adult with them at the stations and throughout the event. No child is to be left unsupervised at any time."
    },
    {
      q: "When and where is the event?",
      a: "The event runs on Sat Oct 24 from 2:00 PM to 8:00 PM, Sun Oct 25 from 2:00 PM to 8:00 PM, Sat Oct 31 from 11:00 AM to 2:00 PM, Sun Nov 1 from 2:00 PM to 8:00 PM, and Sat Nov 7 from 2:00 PM to 8:00 PM! We’re based in Boonsboro, Maryland, and the Hogwarts Express will also be part of the Alsatia Mummers Parade in downtown Hagerstown on Saturday evening, October 31!"
    },
    {
      q: "What are the parking rules?",
      a: "Parking is available along the street and adjacent streets in the neighborhood. Please be respectful of people’s homes, lawns, driveways, and animals. This is a residential area and all vehicles must park legally and considerately. Any rude or disrespectful behavior toward our neighbors or their property will be reported to the police. If you’d prefer not to deal with neighborhood parking, an Uber or rideshare is a great option."
    },
    {
      q: "What is the code of conduct?",
      a: "This is a family-friendly event. Respectful, appropriate behavior is expected at all times. If someone cannot follow that standard, we may issue a verbal warning, ask them to leave the premises, or involve local law enforcement if necessary. Rude, crude, threatening, or otherwise unnecessary behavior is a strict violation of our event rules and is grounds for removal from the event. In short: don’t be a jerk."
    },
    {
      q: "Are there costume contests?",
      a: "Yes! This year we are adding two costume contests every day! We’ll award prizes for one adult costume and one child costume at noon and 6:00 PM each day. Any wizard, witch, magic, or fantasy-themed costume is welcome, as are homemade creations. Dress to impress and show us your best magical look!"
    },
    {
      q: "How do the raffles work?",
      a: "We’ll have raffle prize packs this year with themed merchandise and more. Tickets are $1 each, $3 for 5 tickets, or $5 for 10 tickets. Proceeds support event expenses and our partner organizations. Raffle tickets may be purchased ahead of time as well, and you do not have to be present on any particular day to win."
    },
    {
      q: "When are prizes announced?",
      a: "Some prizes are awarded the day of the event, such as kids’ goody bags and costume contest awards. Other prizes, including raffles and scavenger hunt winners, will be drawn live when possible and published on our Facebook and Instagram pages within a week of the final day of the event. A specific date will be announced on social media and this website, and winners will be contacted using the information they provided on their entry form or ticket purchase. If prizes are not claimed within a week of the drawing, a new winner will be selected."
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
