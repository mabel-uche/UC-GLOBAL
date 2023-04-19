import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import styled, { keyframes } from 'styled-components';
import {Link} from 'react-router-dom';
import {FaFacebook, FaInstagram, FaYoutube, FaTwitter} 
from 'react-icons/fa';
// import styled,  from 'styled-components';
import { bounce } from 'react-animations';

const FooterContainer = styled.footer`
background-color: #1f1f1f;
margin-bottom: 0;
height: 100vh;

@media only screen and (max-width: 768px) {
  // height: -90vh;
  }
`;

const FooterWrap = styled.div`
// padding: 100px 24px;
padding-top: 100px;
padding-bottom: 0;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
max-width: 1100px;
margin: 0 auto;
`;

const FooterLinksContainer = styled.div`
diplay: flex;
justify-content: center;
 
@media screen and (max-width: 768px) {
    padding: 32px;
}
`;

const FooterLinksWrapper = styled.div`
display: flex;

`;

const FooterLinkItems = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
margin: 16px;
text-align: left;
width: 150px;
box-sizing: border-box;
color: #fff;

@media screen and (max-width: 768px) {
   margin: 0;
   padding: 10px;
   width: 100%;
}
`;

const FooterLinkTitle = styled.h1`
font-size: 1em;
margin-bottom: 16px;
`;

const FooterLink = styled(Link)`
color: #fff;
text-decoration: none;
margin-bottom: 0.5rem;
font-size: 0.5em

&:hover {
    color: #01bf71;
    transition: 0.3s ease-out;
}
`;
const SocialMedia = styled.section`
max-width: 1000px;
width: 100%;
`;

const SocialMediaWrap = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
max-width: 1100px;
margin: 40px auto 0 auto;

@media screen and (max-width: 768px) {
  flex-direction: column;
}
`;

const AnimationContainer = styled.div`
width: 50vw;
height: 20vh;
display: flex;
`;

const SloganContainer = styled.div`
// width: 100px;
// height: 50px;
font-weight: bold;
position: absolute;
// animation: mymove 5s infinite;
color: #fff;
margin-top:100px;

@media screen and (max-width: 768px) {
  margin-right: 4em;
  display: block;
  font-size: small;
  // text-align: justify;
  // margin: 1em; 
}
`;

// .Bounce .h1 {
//   font-size: clamp(1rem, 8vw, 2rem);
//   font-weight: 700;
//   text-transform: uppercase;
//   text-shadow: 0px 0px 20px rgba(0,0,0,0.4);
//   text-align: left;
//   margin-bottom: 0.8rem;
// }


// @keyframes mymove {
// 	from {left: 0px;}
// 	to {left: 200px;}
// }
	

const Bounce = styled.div`
animation: 2s ${keyframes`${bounce}`} infinite;
`;


const bounceAnimation = keyframes`
${bounce} infinite;
`;

const BouncyDiv = styled.div`
animation: 2s ${bounceAnimation};
font-style: italic;
color: #cd853f;
`;

const Line = styled.span`
min-width: 100%;
min-height: 1px;
margin-bottom: -3em;
background-color: #cdcdcd;
display: flex;
margin-top: 13em;

@media screen and (max-width: 768px) {
  margin-top: 9em;
}
`;


const SocialLogo = styled(Link)`
color: #FAFAD2;
justify-self: start;
cursor: pointer;
text-decoration: none;
font-weight: 900;
display: flex;
align-items: center;
margin-bottom: 16px;
font-style: italic;
padding: 1rem 0;
`;

const WebsiteRights = styled.small`
color: #fff;
margin-bottom: 16px;
`;

const SocialIcons = styled.div`
display: flex;
justify-content: space-between;
align-iems: center;
width: 240px
`;

const SocialIconLink = styled.a`
color: #cd853f;
font-size: 24px;
`;




const Footer = () => {

  const toggleHome = () => {
    scroll.scrollToTop();
  };
  
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>

            <FooterLinksWrapper>
                <FooterLinkItems>
                    <FooterLinkTitle>More About us</FooterLinkTitle>
                        <FooterLink to="/contactus">How we supply</FooterLink>
                        <FooterLink to="/contactus">Charges</FooterLink>
                </FooterLinkItems>
               

                
                <FooterLinkItems>
                    <FooterLinkTitle>Contact Us</FooterLinkTitle>
                        <FooterLink to="/contactus">Contact</FooterLink>
                        <FooterLink to="/contactus">Sponsorship</FooterLink>
                </FooterLinkItems>
               

             
                <FooterLinkItems>
                    <FooterLinkTitle>Social Media</FooterLinkTitle>
                        <FooterLink to="/contactus">Instagram</FooterLink>
                        <FooterLink to="/contactus">Twitter</FooterLink>
                        <FooterLink to="/contactus">Facebook</FooterLink>
                </FooterLinkItems>
            </FooterLinksWrapper>

        </FooterLinksContainer>
        <AnimationContainer>
          <SloganContainer>
            <BouncyDiv>
         <Bounce><h1>Authentic cookware 
          for authentic dishes.....</h1></Bounce>
          </BouncyDiv>
          </SloganContainer>
        </AnimationContainer>
        <Line />
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/'onClick={toggleHome}>
              UCGLV
            </SocialLogo>
            <WebsiteRights>UCGLV © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="//chrisslinkers.com" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>

              <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>

              <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                <FaYoutube />
              </SocialIconLink>

              <SocialIconLink href="//www.twitter.com/@Christo24531998" target="_blank" aria-label="Twitter">
                <FaTwitter />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
}

export default Footer;
