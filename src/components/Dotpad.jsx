import React from "react";
import styled from "styled-components";
const DotPadDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  grid-row: 6;
  grid-column: 3;
  font-size: 36px;
  background-color: #dbb28d;
  color: #363636;
  border-radius: 3px;
`;

export default function Dotpad(props) {
  return (
    <DotPadDiv
      id="decimal"
      onClick={() => {
        //updating calculation string for display

        function hasDecimal(num) {
          return !!(num % 1);
        }

        //updating first or second number
        let tempCalc = props.calculation;
        let temp = "";
        if (
          (tempCalc.firstNumberDone === 0 &&
            hasDecimal(parseFloat(tempCalc.firstNumber))) ||
          tempCalc.lastChar === "."
        ) {
          return;
        } else if (tempCalc.firstNumberDone === 0) {
          tempCalc.firstNumber += ".";
          temp = tempCalc.firstNumber;
        } else if (
          tempCalc.firstNumber !== 0 &&
          tempCalc.firstNumberDone === 1 &&
          !hasDecimal(parseFloat(tempCalc.secondNumber))
        ) {
          tempCalc.secondNumber += ".";
          temp =
            tempCalc.firstNumber +
            " " +
            tempCalc.currOperation +
            " " +
            tempCalc.secondNumber;
        }

        tempCalc.lastChar = ".";

        props.setCurrCalculation(temp);
        props.setCalculation(tempCalc);
      }}
    >
      .
    </DotPadDiv>
  );
}
