import styled from "styled-components";
import { NavLink } from "react-router-dom";
export const StyledNav = styled.nav`
background: #5736A3; 
box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
margin-bottom: 20px; `
export const NavList = styled.ul`
display: flex;
flx-direction: row;
align-items: center;
justify-content: center;
gap: 20px;
padding-top: 20px;
padding-bottom: 20px;`
export const Link = styled(NavLink)`
display: flex;
flx-direction: row;
align-items: center;
justify-content: center;
gap:5px;
font-family: 'Montserrat';
font-weight: 600;
font-size: 18px;
line-height: 22px;
color: #373737;
&.active{
    color: white;
}
`