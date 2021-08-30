import React from 'react';
import ChipContainer from './styles';

function Chip(props) {
  return(
    <ChipContainer 
      colorBG={props.colorBG}
    >
      <span className="chip">
        <span className="chip__preppend"></span>
        <span className="chip__text">
          {props.text}
        </span>
        <span className="chip__append"></span>
      </span>
    </ChipContainer>
  );
}

export default Chip;