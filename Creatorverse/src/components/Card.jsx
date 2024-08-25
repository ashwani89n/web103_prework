import PropTypes from 'prop-types';
import './Card.css';
import { Link } from 'react-router-dom';
import InstagramIcon from './insta.png';
import EditIcon from './edit-icon.png';  
import ViewIcon from './view-icon.png'; 

const Card = ({ name, url, description, imageUrl }) => {
  const cardLink = `/view/${name}`;
  const editLink = `/edit/${name}`;

  return (
    <div className="Card">
      <img src={imageUrl} alt={name} className="card-image" />
      <div className="card-content">
        <div className="card-header">
          <div className="card-name">{name}</div>
          <div className="card-actions">
            <Link to={editLink} className="card-action">
              <img src={EditIcon} alt="Edit Icon" className="action-icon" />
            </Link>
            <Link to={cardLink} className="card-action">
              <img src={ViewIcon} alt="View Icon" className="action-icon" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string,
  description: PropTypes.string,
  imageUrl: PropTypes.string,
};

export default Card;
