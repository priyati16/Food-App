import React,{useState} from 'react'
import "./style.css"
import Menu from "./menuApi"
import MenuCard from './MenuCard'

const Resturant = () => {
    const[menuData,setMenuData] =useState(Menu)
    const filertItem = (category)=>{
      const updatedList = Menu.filter((curElem)=>{
        return curElem.category===category
      });
      setMenuData(updatedList);
    
    };
    return (
        <>
        <nav className="navbar">
            <div className="btn-group">
                <button className="btn-group__item"
                onClick={()=>filertItem("Breakfast")}>Breakfast</button>
                <button className="btn-group__item"
                onClick={()=>filertItem("lunch")}>Lunch</button>
                <button className="btn-group__item"
                onClick={()=>filertItem("Dinner")}>Dinner</button>
                <button className="btn-group__item"
                onClick={()=>setMenuData(Menu)}>All Items</button>
            </div>
        </nav>
        <MenuCard menuData={menuData}/>
        </>
    )
}

export default Resturant
