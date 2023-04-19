 import React, {useState, useEffect} from 'react';
 import styled, {css } from 'styled-components/macro';
 import { Link } from 'react-router-dom';
//  import { Link as LinkS } from 'react-scroll';
// import { menuData } from '../data/MenuData';
import { Button } from './Button';
// import Bars from '../images/bars.svg';
import { FaBars } from 'react-icons/fa';
import {IconContext} from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';



const Nav = styled.nav`
height: 80px;
display: flex;
justify-content: space-between;
padding: 1rem 2rem;
z-index: 100;
position: fixed;
width: 100%;
background: ${({ scrollNav }) => ( scrollNav ? '#cd853f' : 'transparent')};

// @media screen and (max-width: 768px) {
//   background: ${({ scrollNav }) => (scrollNav ? '#cd853f' : 'transparent')};
// }
`;

const NavLink = css`
color: #FAFAD2;
display: flex;
align-items: center;
padding: 0 1rem;
height: 100%;
cursor: pointer;
text-decoration: none;
`;

const LogoContainer = styled.div`
display: flex;
flex-direction: column;
`;

const Logo = styled(Link)`
${NavLink}
font-style: italic;
font-weight: 900;
color: #FAFAD2;
`;

const LogoText = styled.h1`
display: flex;
flex-direction: column;
margin-top: 0.5px;
font-size: 30px;
font-weight: 900;
color: #4B0082;
@media screen and (max-width: 768px) {
font-size: 1.5em;
}
`;

const MenuBars = styled(FaBars)`
display: none;

@media screen and (max-width: 768px) {
  display:block;
  background-image: url(${FaBars});
  background-size: contain;
  height: 40px;
  width: 30px;
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 1.8rem;
  transform: translate(-50%, 25%);
  color: #fff;
}
`;

const NavMenu = styled.div`
display: flex;
align-items: centre;
margin-right: -48px;

@media screen and (max-width: 768px) {
  display: none;
}
`;

const NavMenuLinks = styled(Link)`

color: FAFAD2;
${NavLink}

&.active {
  border-bottom: 3px solid #fff;
}

@media only screen and (max-width:820px) {
  margin-right: 60px;
     }
`;

const NavBtn = styled.nav`
display: flex;
align-item: center;
margin-right: 24px;
@media screen and (max-width: 768px) {
  display: none;
}
`;


 const Navbar = ({ toggle }) => {
const [scrollNav, setScrollNav] = useState(false)

const changeNav = ()=> {
  if(window.scrollY >=80) {
    setScrollNav(true)
  }else{
    setScrollNav(false)
  }
} 

useEffect(() => {
  window.addEventListener('scroll', changeNav)
}, []);

const toggleHome = () => {
  scroll.scrollToTop();
};


   return (
    <>
    <IconContext.Provider value={{ color: '#4B0082'}}>
     <Nav scrollNav={scrollNav}>
      <LogoContainer>
      <Logo to='/' onClick={toggleHome}>UCGLV</Logo>
      <LogoText>UC GLOBAL VENTURE</LogoText>
      </LogoContainer>
      <MenuBars onClick={toggle}/>
      <NavMenu>
      <NavMenuLinks to='/ourservices' 
      // smooth={"true"} 
      // duration={500} 
      // spy={"true"}
      // exact='true' 
      // offset={-80}
      >Our Services</NavMenuLinks>

      <NavMenuLinks to='/arrival'
          // smooth={"true"} 
          // duration={500} 
          // spy={"true"} 
          // exact='true' 
          // offset={-80}
          >Arrival</NavMenuLinks>
          
          <NavMenuLinks to='/about'
          // smooth={"true"} 
          // duration={500} 
          // spy={"true"} 
          // exact='true' 
          // offset={-80}
          >About</NavMenuLinks>
          </NavMenu>

     
      <NavBtn>
        <Button to="/contactus" primary='true'>
          Contact us
        </Button>
      </NavBtn>
     </Nav>
     </IconContext.Provider>
     </>
   );
 };
 
 export default Navbar;
 