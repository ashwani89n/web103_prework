import { useState, useEffect } from 'react';
import Card from '../components/Card.jsx';
import { supabase } from "../client";
import './ShowCreators.css';

const ShowCreators = () => {
  const [creator, setCreator] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []); 

  const fetchPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('creators')
        .select();

      if (error) {
        console.error('Error fetching creators:', error);
      } else {
        setCreator(data || []);
      }
    } catch (error) {
      console.error('Error fetching creators:', error);
    }
  };

  return (
    <div>
      <div className="header">
        <h1>Creators</h1>
      </div>
      <div className="ReadPosts">
        {
          creator && creator.length > 0 ?
          creator.map((creator) => (
            <Card 
              key={creator.name} 
              name={creator.name} 
              url={creator.url} 
              description={creator.description} 
              imageUrl={creator.imageUrl}
            />
          )) : <h2>No Creators Found 😞</h2>
        }
      </div>  
    </div>
  );
};

export default ShowCreators;
