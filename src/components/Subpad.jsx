import React from "react";
import styled from "styled-components";
const SubPadDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  grid-row: 3;
  grid-column: 4;
  font-size: 36px;
  background-color: #dbb28d;
  color: #363636;
  border-radius: 3px;
`;
export default function Subpad(props) {
  return (
    <SubPadDiv
      id="subtract"
      onClick={() => {
        //updating calculation object
        let tempCalc = props.calculation;
        let tempDisplay = props.currCalculation;
        //if the first number if not set then minus is a sign of negative
        if (tempCalc.firstNumber === 0) {
          tempCalc.firstNumber = "-";
          tempCalc.lastChar = "-";
          tempDisplay = " - ";
        }
        //if the first number is not zero, but the second one is and the currentOperation is set
        if (
          tempCalc.firstNumber !== 0 &&
          tempCalc.secondNumber === 0 &&
          (tempCalc.currOperation === "+" ||
            tempCalc.currOperation === "-" ||
            tempCalc.currOperation === "/" ||
            tempCalc.currOperation === "*")
        ) {
          tempCalc.firstNumberDone = 1;
          tempCalc.lastChar = "-";
          tempCalc.secondNumber = "-";
          tempDisplay = tempCalc.firstNumber + tempCalc.currOperation + " - ";
        }
        //if the first number is done and the second is zero then set the operation to -
        else if (
          tempCalc.firstNumber !== 0 &&
          tempCalc.lastChar !== "+" &&
          tempCalc.lastChar !== "-" &&
          tempCalc.lastChar !== "/" &&
          tempCalc.lastChar !== "*" &&
          tempCalc.secondNumber === 0
        ) {
          tempCalc.firstNumberDone = 1;
          tempCalc.lastChar = "-";
          tempCalc.currOperation = "-";
          tempDisplay = tempCalc.firstNumber + " - ";
        } else {
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
          tempCalc.currOperation = "-";
          props.setCurrTotal(total);
          tempCalc.secondNumber = 0;
          tempCalc.firstNumber = total;
          tempCalc.firstNumberDone = 1;
          tempCalc.lastChar = "-";
          tempDisplay = tempCalc.firstNumber + " - ";
        }

        props.setCalculation(tempCalc);
        props.setCurrCalculation(tempDisplay);
      }}
    >
      -
    </SubPadDiv>
  );
}
