import "./DirectionsPage.css";

/*Google maps embed ⟶ user can click on “Get Directions” button to be redirected to google maps to put in their address to get directions from */

const DirectionsPage = () => {
    return (
        <div className="directions-page-container">
            <h2>Directions</h2>
            <iframe className="directions-iframe" src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d3077.719903243948!2d-77.6520036251594!3d39.52081097159761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x89c9e8d3efc9cf21%3A0x7560227f3a954829!2sLanafield%20Cir%2C%20Boonsboro%2C%20MD%2021713!3m2!1d39.520810999999995!2d-77.6494287!5e0!3m2!1sen!2sus!4v1756681323409!5m2!1sen!2sus" title="Wizard's Way location" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
                <p>Parking available on-site; volunteers will direct traffic on busy days. Yule Ball is Saturday evening (Nov 8) from 6–9pm — music, dancing, costume contest, and special prizes.</p>
                <a
                    href="https://www.google.com/maps/dir//Lanafield+Cir,+Boonsboro,+MD+21713/@39.520811,-77.6520036,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89c9e8d3efc9cf21:0x7560227f3a954829!2m2!1d-77.6494287!2d39.520811?entry=ttu&g_ep=EgoyMDI1MDgyNS4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="get-directions-btn"
                >
                    Get Directions
                </a>
        </div>
    );
}

export default DirectionsPage;
