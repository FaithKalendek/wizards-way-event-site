import "./Banner.css"

const Banner = ({ title, subtitle }) => {
  return (
    <section className="banner">
      <h2>{title}</h2>
      <p className="subtitle">{subtitle}</p>
    </section>
  );
}

export default Banner;
