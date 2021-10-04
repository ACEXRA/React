import React from 'react';
import './sidebar.css';
import Image from '../../../Assets/Images/rasheed.jpg';
import {ROUTES} from '../../../Constants/common';


const Sidebar=()=>{
    return(
        <div className='sidebar'>
            <div className='sidebar-header'>
                <img className='sidebar-header-image' src={Image} alt='Pic'/>
                <h5 className='sidebar-header-name'>A RASHEED AHAMED</h5>
                <p className='sidebar-header-mail'>rasheed.786ahamed@gmail.com</p>
            </div>
            <div className='sidebar-content'>
                {ROUTES.map((items)=>{
                    return(
                    <div key={items.id} className='sidebar-items'>
                        <img className='sidebar-items-icon' src={items.icon} alt={`${items.name}`}/>
                        <p>{items.name}</p>
                    </div>
                    )
                })}
            </div>
        </div>
    )
}
export default Sidebar;