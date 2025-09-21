import "./ActivityCard.css"

const ActivityCard = ({ title, description }) => {
  return (
    <div className="card-border">
      <h3 className="card-title">{title}</h3>
      <p className="body-text">{description}</p>
    </div>
  );
}

export default ActivityCard;
