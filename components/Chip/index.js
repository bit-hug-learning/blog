import React from 'react';
import ChipContainer from './styles';

function Chip(props) {
  return(
    <ChipContainer 
      colorBG={props.colorBG}
    >
      <span className="chip">
        <span className={`chip__preppend ${props.type == "postdetail" && "postdetail"}`}></span>
        <span className={`chip__text ${props.type == "postdetail" && "postdetail"}`}>
          {props.text}
        </span>
        <span className={`chip__append ${props.type == "postdetail" && "postdetail"}`}></span>
      </span>
    </ChipContainer>
  );
}

export default Chip;