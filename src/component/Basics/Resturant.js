import React, { useState } from 'react'
import "./style.css";
import Menu from './menuApi';
import MenuCard from "./MenuCard"

const Resturant = () => {
  const [menuData,setMenuData]=useState(Menu)// usestate hooks return array of two element....holding data of menu
  // useState ka data is the current data which is Menu
  //console.log(menuData);
  const filterItem=(category)=>{
    const updatedList=Menu.filter((curElem)=>{
return curElem.category===category
    })
    setMenuData(updatedList);
  };
  return (
    <>
    <nav className='navbar'>
      <div className='btn-group'>
        <button className='btn-group__item'
          onClick={()=>filterItem('breakfast')}>
          BreakFast</button>
        <button className='btn-group__item'
                                 onClick={()=>filterItem('lunch')}      >
        Lunch</button>
        <button className='btn-group__item'     
         onClick={()=>filterItem('evening')}     >
          Evening Snacks</button>
        <button className='btn-group__item'
         onClick={()=>filterItem('dinner')}   
        >Dinner</button>
        <button className='btn-group__item' onClick={()=>setMenuData(Menu)}>All</button>
      </div>
    </nav>
< MenuCard  menuData={menuData}/>
{/* passing data PROPS  data is always transfered from parent to child from top to bottom */}
    </>
  )
}

export default Resturant
