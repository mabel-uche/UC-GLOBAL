import { CarouselProvider, DotGroup, Slide, Slider } from 'pure-react-carousel';
import React from 'react';
import styled from 'styled-components/macro';
import "pure-react-carousel/dist/react-carousel.es.css";
import BackgroundImg from '../images/jug3.jpg';
import { useMediaQuery } from 'react-responsive';

const ServicesContainer = styled.div`
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
background-color: darkred;
`;

const ServicesTitle = styled.h1`
font-size: 2em;
font-weight: bold;
color: #fff;
margin-top: 3em;
`;

const BoxContainer = styled.div`
width: 320px;
height: 500px;
background-image: url(${BackgroundImg});
box-shadow: 0px 0px 7px rgba(17, 17, 17d, 0.2);
border-radius: 3px;
margin: 5px 0;

@media only screen and (max-width: 768px)  {
  margin: 15px;
   }
`;

const BackgroundFilter = styled.div`
width: 320px;
height: 500px;
align-items: center;
background-color: rgba(55, 55, 55, 0.89);
display: flex;
flex-direction: column;
`;

const CarouselText = styled.h2`
text-align: left;
display: flex;
// font-size: clamp(1rem, 2vw, 2rem);
font-size: 1.5rem;
color: #fff;
font-style: italic;
margin-right: 2em;
margin-top: 40%;

// @media only screen and (max-width: 768px) {
// //  text-align: left;
//  display: flex;
// }
`;

const StyledCarouselProvider = styled(CarouselProvider)`
width: 50%;

@media only screen and (max-width: 768px)  {
   width: 100%;
    }
`;

const StyledSlide = styled(Slide)`
.carousel_inner-slide {
  display: flex;
  justify-content: center;
}
`; 
const StyledDotGroup = styled(DotGroup)`
button {
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background-color: #e4e4e4;
  border: none;
  outline: none;
  margin-top: 3px;
 justify-content: center;
  &:not (:last-of-type) {
    margin-right: 3px;
  }
}

.carousel__dot--selected {
  background-color: #cd853f;
}
`;

const OurServices = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)"});
  return (
    <ServicesContainer>
        <ServicesTitle>OUR SERVICES</ServicesTitle>
        <StyledCarouselProvider 
        naturalSlideWidth={200} 
        naturalSlideHeight={isMobile ? 240 : 250} 
        totalSlides={4} 
        visibleSlides={isMobile ? 1 : 2}
        dragEnabled={false}
        >

        <Slider>
          <StyledSlide index={0}>
          <BoxContainer>
            <BackgroundFilter>
              <CarouselText>Product Custmization: 
                Customers can personalize a product according to their needs and preferences.</CarouselText>
            </BackgroundFilter>
          </BoxContainer>
          </StyledSlide>

          <StyledSlide index={1}>
          <BoxContainer>
            <BackgroundFilter>
              <CarouselText>Exploring the World: We supply the right quantity of product in good condition at the right time . </CarouselText>
            </BackgroundFilter>
          </BoxContainer>
          </StyledSlide>

          <StyledSlide index={2}>
          <BoxContainer>
            <BackgroundFilter>
              <CarouselText>Delivery Services: 
                Goods are delivered at your doorstep as quickly as possible across the nation.</CarouselText>
            </BackgroundFilter>
          </BoxContainer>
          </StyledSlide>

          <StyledSlide index={3}>
          <BoxContainer>
            <BackgroundFilter>
              <CarouselText>Customer Care Services: <br></br>
                We deliver excellent customer service by meeting customers' expectations.</CarouselText>
            </BackgroundFilter>
          </BoxContainer>
          </StyledSlide>
           </Slider>

           <StyledDotGroup />
        </StyledCarouselProvider>
    </ServicesContainer>
  );
}

export default OurServices;
