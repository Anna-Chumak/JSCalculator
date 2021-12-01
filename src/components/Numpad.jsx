import React from "react";
import styled from "styled-components";
const NumPadDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  font-size: 36px;
  background-color: #dbb28d;
  color: #363636;
  border-radius: 3px;
`;

export default function Numpad(props) {
  return (
    <NumPadDiv
      id={props.id}
      style={{ gridRow: props.row, gridColumn: props.col }}
      onClick={() => {
        //updating calculation string for display
        let temp = "";
        if (props.currCaclulation !== "0") {
          temp = props.currCaclulation + props.value;
        } else {
          temp += props.value;
        }
        props.setCurrCalculation(temp);

        //updating first or second number
        let tempCalc = props.calculation;
        if (tempCalc.firstNumber === 0) {
          tempCalc.firstNumber += props.value;
        } else if (tempCalc.firstNumberDone === 0) {
          tempCalc.firstNumber += "" + props.value;
        } else if (
          tempCalc.firstNumberDone === 1 &&
          tempCalc.secondNumber === 0
        ) {
          tempCalc.secondNumber += props.value;
        } else {
          tempCalc.secondNumber += "" + props.value;
        }

        tempCalc.lastChar = props.value;
        props.setCalculation(tempCalc);
      }}
    >
      {props.value}
    </NumPadDiv>
  );
}
