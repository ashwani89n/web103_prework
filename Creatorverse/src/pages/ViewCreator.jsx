import { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom'; // Import useNavigate
import { supabase } from "../client";
import './ViewCreator.css';
import './AddCreator.css';

const ViewCreator = () => {
    const { name } = useParams(); 
    const navigate = useNavigate(); // Initialize useNavigate
    const [updateSuccess, setUpdateSuccess] = useState(false);
    const [deleteSuccess, setDeleteSuccess] = useState(false);
    const [creator, setCreator] = useState({
        name: '',
        url: '',
        description: '',
        imageUrl: '',
    });

    useEffect(() => {
        const fetchCreatorDetails = async () => {
            try {
                const { data, error } = await supabase
                    .from('creators')
                    .select('*')
                    .eq('name', name) 
                    .single(); 

                if (error) {
                    console.error('Error fetching creator:', error);
                } else {
                    setCreator(data);
                }
            } catch (error) {
                console.error('Error fetching creator:', error);
            }
        };

        fetchCreatorDetails();
    }, [name]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setCreator({ ...creator, [name]: value });
    };

    const handleUpdate = async (event) => {
        event.preventDefault();
        
        await supabase
            .from('creators')
            .update({ name: creator.name, url: creator.url, description: creator.description, imageUrl: creator.imageUrl })
            .eq('name', name);
      
        setCreator({
            name: '',
            url: '',
            description: '',
            imageUrl: '',
        });
        setUpdateSuccess(true);
      
        setTimeout(() => {
            setUpdateSuccess(false);
        }, 5000); // Reduced timeout for clarity, adjust as needed

        navigate("/showall"); // Navigate to ShowAll creators
    };

    const handleDelete = async (event) => {
        event.preventDefault();
        
        await supabase
          .from('creators')
          .delete()
          .eq('name', name); 
  
        setCreator({
            name: '',
            url: '',
            description: '',
            imageUrl: '',
        });
    
        setDeleteSuccess(true);
    
        setTimeout(() => {
          setDeleteSuccess(false); 
        }, 5000); // Reduced timeout for clarity, adjust as needed

        navigate("/showall"); // Navigate to ShowAll creators
    };

    return (
        <div className="createPost">
            <h2>Revise your profile in one go!</h2>
            <form>
                <div className="form-group">
                    <label className="titlecss" htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={creator.name}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label className="titlecss" htmlFor="url">URL</label>
                    <div className="titlecsssub">Provide creator's Instagram Page link (without the @)</div>
                    <input
                        type="text"
                        id="url"
                        name="url"
                        value={creator.url}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label className="titlecss" htmlFor="description">Description</label>
                    <div className="titlecsssub">Provide a description of the creator. Who are they? What makes them interesting?</div>
                    <textarea
                        rows={8}
                        id="description"
                        name="description"
                        required
                        maxLength={100}
                        value={creator.description}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label className="titlecss" htmlFor="imageUrl">Image URL</label>
                    <div className="titlecsssub">Provide a link to an image of your creator. Be sure to include http://</div>
                    <input
                        type="text"
                        id="imageUrl"
                        name="imageUrl"
                        value={creator.imageUrl}
                        onChange={handleInputChange}
                    />
                </div>
                <button type="button" onClick={handleUpdate}>Update Creator</button>
                <button type="button" onClick={handleDelete}>Delete Creator</button>
            </form>
        </div>
    );
};

export default ViewCreator;
