import styled from 'styled-components';


const chipCheck =  '/src/assets/icons/check_chip.svg';
const chipClose = '/src/assets/icons/chip_close.png';

const ChipContainer = styled.span`
    display: inline-block;
    height: 3.2rem;

  .chip {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 3.2rem;
    padding: 5px;
    margin: 15px 10px;
    font-size: 1.4rem;
    color: black;
    border-radius: 16px;
    background-color: ${(props) => props.colorBG};
  }

  .chip__text {
    display: inline-block;
    margin: 0 5px;
    line-height: 32px;
    vertical-align: middle;
    
    &.postdetail {
      margin: 0 20px;
    }
  }

  .chip__preppend, .chip__append {
    display: inline-block;
    width: 20px;
    height: 20px;

    &.postdetail {
      display: none;
    }
  }

  .chip__preppend {
    background: url(${chipCheck}) center/cover no-repeat;
  }

  .chip__append {
    background: url(${chipClose}) center/cover no-repeat;
  }

`;

export default ChipContainer;