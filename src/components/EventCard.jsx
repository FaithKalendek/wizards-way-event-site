import "./EventCard.css"

const EventCard = ({ title, description }) => {
  return (
    <div className="p-4 bg-white rounded-2xl shadow-md">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}

export default EventCard;
