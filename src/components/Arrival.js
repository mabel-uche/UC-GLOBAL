import React from 'react';
import styled  from 'styled-components';
import goldcut from '../images/goldcut.png';
import jug from '../images/jug.jpg';
import platecup from '../images/platecup.webp';

const ArrivalContainer = styled.div`
width: 100vw;
height: 100vh;
display: flex;
flex-direction: column;
margin-bottom: 4em;
margin-top: 0;
background: #D3D3D3;
align-items: center;
padding: 10px 0;
margin-bottom: 0;
flex-wrap: wrap-reverse;


@media screen and (max-width: 480px) {
  margin-right: 0;
  }
`;

const ArrivalTitle = styled.h1`
font-size: 2em;
font-weight: bold;
color: #000;
margin-top: 1.5em;

@media screen and (max-width: 768px) {
  font-size: 1.5em;
  margin-top: 3em;
}
`;

const WareContainer = styled.div`
display: flex;
align-items: center;
margin-top: 5px;
margin-left: 1em;
flex-wrap: wrap;
margin-bottom: 0;

@media screen and (max-width: 768px) {
  margin-top: 1.5em;
  margin-right: 0;
  align-items: center;
}
`;

const WareImg = styled.img`
width: 19em;
height: 11em;

@media screen and (max-width: 768px) {
  width: 12em;
  height: 9em;
}
`;

const DepictionContainer = styled.div`
display: flex;
flex-direction: column;
max-width: 60%;
margin-top: -15px;
align-items: center;

@media screen and (max-width: 768px) {
max-width: 40%;
}
`;

const Name = styled.h2`
color: #000;
font-size: 1.8em;
font-weight: 700;
margin-bottom: 6px;
text-align: center;
margin: 5px, 0;

@media screen and (max-width: 768px) {
  font-size: 1em;
  width: 100%;
  }
`;

const Depiction = styled.p`
font-size: 1.02em;
color: #000;
text-align: center;
max-width: 70%;
font-style: italic;

@media screen and (max-width: 768px) {
  font-size: 1em;
  width: 100%;
  }

`;


const Arrival = () => {
  return (
    <ArrivalContainer isReversed>
      <ArrivalTitle>NEW ARRIVAL</ArrivalTitle>
      <WareContainer>
      <DepictionContainer>
        <Name>BOX CUTLERY SET</Name>
        <Depiction>72pcs high quality gold cutlery set with serving 
          spoons. 18/10 stainless steel.
        </Depiction>
    </DepictionContainer>
   
    <WareImg src={goldcut} />

    </WareContainer>

    <WareContainer>
    <WareImg src={jug}/>
      <DepictionContainer>
        <Name>CLASSIC JUG</Name>
        <Depiction>1.0 Liter classic jug for 
          keeping liquids either hot or cold for 16 hours.  </Depiction>
    </DepictionContainer>
   
    </WareContainer>

    <WareContainer>
      <DepictionContainer>
        <Name>DINNER SET</Name>
        <Depiction>10.5 dinner plate x4, 8 dessert plate x4, 7 bowl x4, 120Z mug x1</Depiction>
    </DepictionContainer>
   
    <WareImg src={platecup} />

    </WareContainer>
</ArrivalContainer>


  );
}

export default Arrival;

