import React from 'react';
import styled from 'styled-components';


const Design = styled.div`
#animate1 {animation-timing-function: linear;};
#animate1 {animation-timing-function: linear;};
#animate1 {animation-timing-function: linear;};
#animate1 {animation-timing-function: linear;};
#animate1 {animation-timing-function: linear;};

@keyframes mymove{
  from {left: 0px;}
  to {left: 300px;}
}
`;


const Animation = () => {
  return (
    <Design>
            <animate id="animate1">linear</animate>
            <animate id="animate1">linear</animate>
            <animate id="animate1">linear</animate>
            <animate id="animate1">linear</animate>
            <animate id="animate1">linear</animate>
    </Design>
  );
}

export default Animation;





