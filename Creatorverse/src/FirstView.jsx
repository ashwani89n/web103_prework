import './FirstView.css';
import { Link } from 'react-router-dom';

const FirstView = () => {
  return (
    <>
      <div className='overview-container'>
        <div className='heading'>Creatoverse</div>
        <div className='forbuttons'>
            <Link to="/showall"> <button className="sign-button">View all Creators</button></Link>
            <Link to="/create"><button className="sign-button">Add a Creator</button></Link>
        </div>
      </div>
    </>
  );
};

export default FirstView;
