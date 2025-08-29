import "./Banner.css"

const Banner = ({ title, subtitle }) => {
  return (
    <section className="text-center py-12 bg-gradient-to-b from-purple-700 to-indigo-900 text-white rounded-2xl shadow-lg">
      <h2 className="text-4xl font-bold">{title}</h2>
      <p className="mt-2 text-xl">{subtitle}</p>
    </section>
  );
}

export default Banner;
