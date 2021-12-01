import React from "react";
import styled from "styled-components";
const MultPadDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  grid-row: 2;
  grid-column: 4;
  font-size: 36px;
  background-color: #dbb28d;
  color: #363636;
  border-radius: 3px;
`;
export default function Multpad(props) {
  return (
    <MultPadDiv
      id="multiply"
      onClick={() => {
        //updating calculation object
        let tempCalc = props.calculation;
        let tempDisplay = props.currCalculation;
        if (tempCalc.firstNumber !== 0 && tempCalc.secondNumber === 0) {
          tempCalc.firstNumberDone = 1;
          tempCalc.lastChar = "*";
          tempCalc.currOperation = "*";

          tempDisplay = tempCalc.firstNumber + " * ";
        } else if (
          tempCalc.lastChar === "+" ||
          tempCalc.lastChar === "-" ||
          tempCalc.lastChar === "/" ||
          tempCalc.lastChar === "*"
        ) {
          if (tempCalc.lastChar !== tempCalc.currOperation) {
            if (tempCalc.secondNumber === "-") {
              tempCalc.secondNumber = 0;
            }
          }
          tempCalc.lastChar = "*";
          tempCalc.currOperation = "*";
          tempDisplay = tempCalc.firstNumber + " * ";
        } else if (tempCalc.firstNumberDone === 1) {
          const num1 = parseFloat(tempCalc.firstNumber);
          const num2 = parseFloat(tempCalc.secondNumber);
          let total;
          switch (tempCalc.currOperation) {
            case "+":
              total = num1 + num2;
              break;
            case "-":
              total = num1 - num2;
              break;
            case "/":
              if (num2 !== 0) {
                total = num1 / num2;
              }
              break;
            case "*":
              total = num1 * num2;
              break;
            default:
              total = 0;
          }
          tempCalc.currOperation = "*";
          props.setCurrTotal(total);
          tempCalc.secondNumber = 0;
          tempCalc.firstNumber = total;
          tempCalc.firstNumberDone = 1;
          tempCalc.lastChar = "*";
          tempDisplay = tempCalc.firstNumber + " * ";
        }

        props.setCalculation(tempCalc);
        props.setCurrCalculation(tempDisplay);
      }}
    >
      *
    </MultPadDiv>
  );
}
