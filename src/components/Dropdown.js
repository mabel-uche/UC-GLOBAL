import React from 'react';
import styled from 'styled-components';
// import { menuData } from '../data/MenuData';
import { Button } from './Button';
import {Link as LinkS} from 'react-router-dom';
import {FaTimes} from 'react-icons/fa';

const DropdownContainer = styled.div`
position: fixed;
z-index: 999;
width: 100%;
height: 100%;
background: #cd853f;
display: grid;
align-items: center;
top: 0;
left: 0;
transition: 0.3s ease-in-out;
opacity: ${({isOpen}) => (isOpen ? '1' : '0')};
top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
`;


const Icon = styled.div`
position: absolute;
top: 1.2rem;
right: 1.5rem;
background: transparent;
font-size: 2rem;
cursor: pointer;
outline: none;

@media screen and (max-width: 768px) {
  right: 2.5rem;
}
`;
const CloseIcon = styled(FaTimes)`
color: #4B0082;

`;
const DropdownWrapper = styled.div`
`;
const DropdownMenu = styled.div`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(4, 50px);
text-align: center;
margin-bottom: 4rem;

@media screen and (max-width: 768px) {
  grid-template-rows: repeat(4, 30px);
}
`;
const DropdownLink = styled(LinkS)`
display: flex;
align-items: center;
justify-content: center;
color: #FAFAD2;
font-size: 1.5rem;
text-decoration: none;
list-style: none;
cursor: pointer;
transition: 0.2s ease-in-out;

&:hover{
  color: #4B0082;
}
`;
const BtnWrap = styled.div`
display: flex;
justify-content: center;
`;

const Dropdown = ({isOpen, toggle}) => {
  return (
    
    <DropdownContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <DropdownWrapper>
        <DropdownMenu>
          <DropdownLink to='ourservices' onClick={toggle}>Our Services</DropdownLink>
          <DropdownLink to='arrival' onClick={toggle}>Arrival</DropdownLink>
          <DropdownLink to='about' onClick={toggle}>About</DropdownLink>
        </DropdownMenu>
        <BtnWrap>
          <Button primary="true" round="true" to="/contactus">
            Contact Us
          </Button>
        </BtnWrap>
      </DropdownWrapper>
    </DropdownContainer>
  );
}

export default Dropdown;
