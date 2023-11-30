import { useState } from "react";
import { db } from "../../../firebase/firebase.config";
import { collection, addDoc } from "firebase/firestore";
import "firebase/firestore";

export function FormAdmin({ onFormSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [project, setProject] = useState("");
  const [miniature, setMiniature] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleProject = (e) => {
    setProject(e.target.value);
  };

  const handleMiniature = (e) => {
    setMiniature(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   
    try {
     const projectsCollection = collection(db, 'projects');
     await addDoc(projectsCollection, { title, description, category, project, miniature});

     setTitle("");
      setDescription("");
      setCategory("");
      setProject("");
      setMiniature("")
      setShowSuccessModal(true);

    } catch (error) {
     console.error("Error al enviar datos a Firebase:", error);
    }
   };

  const closeModal = () => {
    setShowSuccessModal(false);
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => handleTitleChange(e)}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <input
            type="text"
            value={description}
            onChange={(e) => handleDescriptionChange(e)}
            required
          />
        </div>
        <div>
          <label>Category:</label>
          <select value={category} onChange={(e) => handleCategoryChange(e)} required>
            <option value="">Select a category</option>
            <option value="App / Web Development">App / Web Development</option>
            <option value="UI Design">UI Design</option>
            <option value="UX Design">UX Design</option>
            <option value="Prototyping">Prototyping</option>
            <option value="Branding">Branding</option>
          </select>
        </div>
        <div>
          <label>Project link:</label>
          <input
            type="text"
            value={project}
            onChange={(e) => handleProject(e)}
            required
          />
        </div>
        <div>
          <label>Miniature link:</label>
          <input
            type="text"
            value={miniature}
            onChange={(e) => handleMiniature(e)}
            required
          />
        </div>
        <button type="submit">Publish</button>
      </form>

      {showSuccessModal && (
        <div className="modal">
          <div className="modal-content">
            <p>New project created!</p>
            <button onClick={closeModal}>Ok</button>
          </div>
        </div>
      )}
    </div>
  );
}
