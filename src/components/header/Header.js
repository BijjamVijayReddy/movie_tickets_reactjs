
import React from 'react';
import { HeaderComponnet,NavComponent } from "./Header.css";
import { Avatar, Grid } from "@mui/material";
import mainLogo from "../../assests/mainlogo.png"
import { NavLink } from 'react-router-dom';


const nav_links = [
  {
    display:"Home",
    path:"/"
  },
  {
    display:"Now Showing ",
    path:"/nowShowing"
  },
  {
    display:"Comming Soon",
    path:"/comingSoon"
  },
  {
    display:"Private Booking",
    path:"/privateBooking"
  }, {
    display:"About Us",
    path:"/aboutUs"
  },
]


const Header = () => {

  return (
    <HeaderComponnet>
          <img src={mainLogo} alt='Logo' height="50px"/>
           <NavComponent>
            {nav_links.map((item ,index) => (
              <NavLink
              to={item.path}
              key={index}
            >
              <h4 className='header_componnet'>{item.display}</h4>
              </NavLink>
            ))}
           </NavComponent>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
    </HeaderComponnet>
  )
}

export default Header