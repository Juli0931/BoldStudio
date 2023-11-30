import { useState } from 'react';
import { useProject } from '../../hooks/useProject'; 

export function FilterWork({ onFilter }) {
  const { projects } = useProject();
  const [filterText, setFilterText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleFilterTextChange = (e) => {
    setFilterText(e.target.value);
    if (typeof onFilter === 'function') {
     onFilter({ text: e.target.value, category: selectedCategory });
    }
   };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    if (typeof onFilter === 'function') {
      onFilter({ text: filterText, category: e.target.value });
    }}

  const filteredProjects = selectedCategory === "all" ? projects : projects.filter(project => project.category === selectedCategory);
  const searchedProjects = filterText === "" ? filteredProjects : filteredProjects.filter(project => project.title.toLowerCase().includes(filterText.toLowerCase()));

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
        <option value="UI Design">UI Design</option>
        <option value="UX Design">UX Design</option>
        <option value="Prototyping">Prototyping</option>
        <option value="Branding">Branding</option>
      </select>
    </div>

      <div>
        {searchedProjects.map(project => (
          <div key={project.id} className='card'>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <p>{project.category}</p>
            <p>{project.project}</p>
            <img src={project.imageUrl}/>
          </div>
        ))}
      </div>
    </>
  );
}
