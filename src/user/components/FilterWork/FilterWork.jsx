import { useState } from 'react';
import { useProject } from '../../hooks/useProject'; 

export function FilterWork({ onFilter }) {
  const { projects } = useProject();
  const [filterText, setFilterText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleFilterTextChange = (e) => {
    setFilterText(e.target.value);
    onFilter({ text: e.target.value, category: selectedCategory });
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    onFilter({ text: filterText, category: e.target.value });
  };

  return (
    <>
    <div className='filterContainer'>
      <input
        type="text"
        placeholder="Search names, projects or categories"
        value={filterText}
        onChange={handleFilterTextChange}
      />
      <select value={selectedCategory} onChange={handleCategoryChange}>
        <option value="all">All</option>
        <option value="App / Web Development">App / Web Development</option>
        <option value="UI design">UI Design</option>
        <option value="UX design">UX Design</option>
        <option value="Prototyping">Prototyping</option>
        <option value="Branding">Branding</option>
      </select>
    </div>
    <div>

    </div>
      
      <div>
        {projects.map(project => (
          <div key={project.id} className='card'>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <p>{project.category}</p>
            <p>{project.project}</p>
            <img src={project.imageUrl} alt="" />
          </div>
        ))}
      </div>
    </>
  );
}
