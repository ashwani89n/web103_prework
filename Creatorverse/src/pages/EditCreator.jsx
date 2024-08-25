import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../client';
import './EditCreator.css'; 
import InstagramIcon from './insta.png';


const EditCreator = () => {
  const { name } = useParams();
  const [creator, setCreator] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCreator = async () => {
      try {
        const { data, error } = await supabase
          .from('creators')
          .select('*')
          .eq('name', name)
          .single();

        if (error) {    
          throw error;
        }

        setCreator(data);
      } catch (error) {
        console.error('Error fetching creator:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCreator();
  }, [name]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!creator) {
    return <div>Creator not found</div>;
  }

  return (
    <div className="view-creator">
      <div className="creator-header">
        <img src={creator.imageUrl} alt={creator.name} className="creator-image" />
        <div className="creator-info">
          <h1 className="creator-name">{creator.name}</h1>
          <div className="creator-description">
            <p>{creator.description}</p>
          </div>
          <div className='image_url'>
          <a href={`https://www.instagram.com/${creator.url}`} target="_blank" rel="noopener noreferrer" className="creator-url">
            <img src={InstagramIcon} alt="Instagram Icon" className="instagram-icon" />
            {creator.url}
          </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditCreator;
