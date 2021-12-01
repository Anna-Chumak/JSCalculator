import React from "react";
import styled from "styled-components";
const ClearPadDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  grid-row: 2;
  grid-column: 1 / span 2;
  font-size: 36px;
  background-color: #fc8a67;
  color: #363636;
  border-radius: 3px;
`;
export default function Clearpad(props) {
  return (
    <ClearPadDiv
      id="clear"
      onClick={() => {
        props.setCurrCalculation("0");
        const temp = {
          lastChar: "_",
          firstNumber: 0,
          secondNumber: 0,
          lastOperation: "_",
          firstNumberDone: 0,
        };
        props.setCalculation(temp);
        props.setCurrTotal(0);
      }}
    >
      AC
    </ClearPadDiv>
  );
}
