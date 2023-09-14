
import styled from "styled-components";

export const HeaderComponnet = styled.div`
padding: 17px;
max-width: 100%;
background: #fff;
z-index: 99999;
box-shadow: 5px 5px 15px -5px #fde4e4;
font-size:14px;
display: flex;
justify-content: space-evenly;
align-items: center;
text-align: center;

& h4{
    color: #000;
    cursor: pointer;
    margin: 0 0.6rem;
    padding: 0 0.5rem;
    z-index: 2;
    position: relative;
    font-size: 1 rem;
    font-weight: 600;
}

& h4:hover{
    transition: transform 0.2s ease-in-out;
    transform: scale(1.2) !important;
}
`

export const NavComponent = styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;
text-align: center;
`
