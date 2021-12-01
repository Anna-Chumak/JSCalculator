import React from "react";
import styled from "styled-components";
const ZeroPadDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  grid-row: 6;
  grid-column: 1 / span 2;
  font-size: 36px;
  background-color: #dbb28d;
  color: #363636;
  border-radius: 3px;
`;

export default function Zeropad(props) {
  return (
    <ZeroPadDiv
      id="zero"
      onClick={() => {
        //updating calculation string for display
        let temp = "";
        let tempCalc = props.calculation;
        if (tempCalc.firstNumber !== 0 && tempCalc.firstNumberDone !== 1) {
          tempCalc.firstNumber += "0";
          temp = tempCalc.firstNumber;
        } else if (
          tempCalc.firstNumber !== 0 &&
          tempCalc.firstNumberDone === 1
        ) {
          if (tempCalc.secondNumber !== 0) {
            tempCalc.secondNumber += "0";
          } else {
            tempCalc.secondNumber = 0;
          }
          temp =
            tempCalc.firstNumber +
            tempCalc.currOperation +
            tempCalc.secondNumber;
        } else {
          tempCalc.firstNumber = 0;
          temp = "0";
        }
        props.setCurrCalculation(temp);
        tempCalc.lastChar = "0";
        props.setCalculation(tempCalc);
      }}
    >
      0
    </ZeroPadDiv>
  );
}
