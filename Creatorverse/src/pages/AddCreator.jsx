import { supabase } from "../client";
import { useState } from "react";
import './AddCreator.css';

const AddCreator = () => {
    const [creator, setCreator] = useState({
        name: '',
        url: '',
        description: '',
        imageUrl: '',
    });
    const [updateSuccess, setUpdateSuccess] = useState(false);

    const addCreator = async (event) => {
        console.log("Form submitted");
        event.preventDefault();
        

        try {
            const { data, error } = await supabase
                .from('creators')
                .insert([creator]);

            console.log("Insertion result:", { data, error });

            if (error) {
                throw error;
            }

            setCreator({
                name: '',
                url: '',
                description: '',
                imageUrl: '',
            });

            setUpdateSuccess(true);
            setTimeout(() => setUpdateSuccess(false), 5000);

        } catch (error) {
            console.error("Error during insertion:", error);
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setCreator({ ...creator, [name]: value });
    };

    return (
        <div className="createPost">
            <h2>Showcase a New Creator!</h2>
            {updateSuccess && (
                <div className="alert success">
                    <p>Success!!</p>
                </div>
            )}
            <form onSubmit={addCreator}>
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
                        maxLength={1000}
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
                <button type="submit">Create New Post</button>
            </form>
        </div>
    );
};

export default AddCreator;
