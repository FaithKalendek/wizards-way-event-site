import "./Banner.css"

const Banner = ({ title, subtitle }) => {
  return (
    <section className="banner">
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </section>
  );
}

export default Banner;
