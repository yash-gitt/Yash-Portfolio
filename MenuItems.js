import React from 'react'

function MenuItems({menuItem}) {
  return (
    <div className="project-class">
        {
            menuItem.map((item)=>{
                return <div className="projects" key={item.id}>
                    <div className="image-class">
                        <img src={item.image} alt=""/>
                        <ul className="hover-item">
                            <li>
                                <a href={item.link}><button>{item.icon}</button></a>
                            </li>
                        </ul>
                    </div>
                    <h5 className="head">
                        {item.title}
                    </h5>
                    <p>
                        {item.title2}
                    </p>   
                </div>
            })
        }
    </div>
  )
}


export default MenuItems;