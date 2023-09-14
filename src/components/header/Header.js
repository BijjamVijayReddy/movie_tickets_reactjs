
import React from 'react';
import { HeaderComponnet,NavComponent } from "./Header.css";
import { Avatar, Grid } from "@mui/material";
import mainLogo from "../../assests/mainlogo.png"


const nav_links = [
  {
    display:"Home",
    path:"/home"
  },
  {
    display:"Now showing ",
    path:"/nowShowing "
  },
  {
    display:"Comming soon",
    path:"/commingSoon"
  },
  {
    display:"Private Booking",
    path:"/privateBooking"
  }, {
    display:"About us",
    path:"/aboutUs"
  },
]


const Header = () => {

  return (
    <HeaderComponnet>
          <img src={mainLogo} alt='Logo' height="50px"/>
           <NavComponent>
            {nav_links.map((item) => (
              <h4 className='header_componnet'>{item.display}</h4>
            ))}
           </NavComponent>
           {/* <h4>Home</h4>
             <h4>Now showing </h4>
               <h4>Comming soon</h4>
             <h4> Private Booking</h4>
           <h4>About us</h4> */}
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
    </HeaderComponnet>
  )
}

export default Header