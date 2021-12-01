import React from "react";
import styled from "styled-components";
const ResPadDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  grid-row: 5 / span 2;
  grid-column: 4;
  font-size: 36px;
  background-color: #9ddb8d;
  color: #363636;
  border-radius: 3px;
`;
export default function Resultpad(props) {
  return (
    <ResPadDiv
      id="equals"
      onClick={() => {
        //updating calculation object
        let tempCalc = props.calculation;
        let tempDisplay = props.currCalculation;

        if (
          tempCalc.lastChar !== "+" &&
          tempCalc.lastChar !== "-" &&
          tempCalc.lastChar !== "/" &&
          tempCalc.lastChar !== "*"
        ) {
          console.log(tempCalc.firstNumber);
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
              total = num1;
          }
          console.log(total);
          props.setCurrTotal(total);
          props.setCurrCalculation(total);

          if (tempCalc.firstNumberDone === 1 && tempCalc.secondNumber !== 0) {
            tempCalc.firstNumberDone = 1;
            tempCalc.lastChar = "_";

            tempCalc.currOperation = "_";
            tempCalc.secondNumber = 0;
            tempCalc.firstNumber = total;
          } else {
            tempDisplay = num1 + "=" + total;
            tempCalc.firstNumberDone = 1;
            tempCalc.lastChar = "_";
            tempCalc.currOperation = "_";
            tempCalc.secondNumber = 0;
            tempCalc.firstNumber = total;
            props.setCurrCalculation(tempDisplay);
          }
        }

        props.setCalculation(tempCalc);
      }}
    >
      =
    </ResPadDiv>
  );
}
