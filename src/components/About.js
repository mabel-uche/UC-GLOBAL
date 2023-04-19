import React from 'react';
// import { FontAwsomeIcon } from "@fortawsome/react-fontawsome";
import styled  from 'styled-components';
import BackgroundImg from '../images/whitekit.jpg';

const AboutContainer = styled.div`
width: 100vw;
height: 100vh;
padding: 0;
background-image: url(${BackgroundImg});
margin-top: 0;
background-color: #ccccc;
background-repeat: no-repeat;
background-size: cover;
position: relative;
`;

const BackgroundFilter = styled.div`
width: 100vw;
height: 100vh;
align-items: center;
background-color: rgba(55, 55, 55, 0.89);
display: flex;
flex-direction: column;
`;

const TextContainer = styled.div`
  z-index: 99;
	color: #fff;
	position: absolute;
	margin: auto;
	left: 0;
	text-align: center;
	bottom: 0;
	right: 0;
	margin: auto;
	height: auto;
	// text-size-adjust: 80%;
  top: 40%;
`;

const AboutTitle = styled.h2`
font-size: 3em;
font-weight: 700;
margin-bottom: 6px;
`;


const Description = styled.p`
font-size: clamp(1rem, 8vw, 2rem);
font-style: italic;
`;


const About = () => {
  return (
    <AboutContainer>
    <BackgroundFilter>
       <TextContainer>
    <AboutTitle>ABOUT US</AboutTitle>
    <Description>UC Global Venture was established in Nigeria in 2020.</Description>
    <Description>We areimporters of different high quality
      stainless steel kitchen ware and cookware.</Description>
      <Description>Also include mugs, cutleries, dinnerset, dish, gift items and lots more.</Description> 
    </TextContainer>
    </BackgroundFilter>
      </AboutContainer>
  );
}

export default About;
