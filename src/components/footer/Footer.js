
import React from 'react';
import { FooterComponet } from "./Footer.css.js"
import { Avatar } from '@mui/material';
import mainLogo from "../../assests/mainlogo.png"

function Footer() {
    return (
        <FooterComponet>
            <img src={mainLogo} alt='Logo' height="50px" />


            <h4>Home</h4>


            <h4>Now showing </h4>


            <h4>Comming soon</h4>

            <h4> Private Booking</h4>



            <h4>About us</h4>


            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />


        </FooterComponet>
    )
}

export default Footer