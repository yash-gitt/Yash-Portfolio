import React from 'react';
import MenuItems from '../components/MenuItems';
import Tittle from '../components/Tittle';
import Categories from '../components/Categories';
import ProjectImg from '../components/ProjectImg';
import { useState } from 'react';


function Projects() {

  const [categories, setCategories] = useState(null);
  const [menuItems, setMenuItems] = useState(ProjectImg);
  return (
    <div className="projects-page">
      <div className="title">
        <Tittle title={'Projects'} span={'Projects'} />
      </div>
      <div className="project-data">
        <Categories/>
        <MenuItems menuItem={menuItems}/>

      </div>
    </div>
  )
}



export default Projects;