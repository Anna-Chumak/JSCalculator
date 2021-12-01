import React from "react";
import styled from "styled-components";
import Display from "./Display";
import Numpad from "./Numpad";
import Zeropad from "./Zeropad";
import Addpad from "./Addpad";

import { numpads } from "../utility/numpads";
import Multpad from "./Multpad";
import Subpad from "./Subpad";
import Resultpad from "./Resultpad";
import Clearpad from "./Clearpad";
import Divpad from "./Divpad";
import Dotpad from "./Dotpad";
const StyledCalculatorContainer = styled.div`
  text-align: center;
  padding: 10px;
  width: 400px;
  height: 500px;
  background-color: white;
  border-radius: 5px;
  display: grid;
  grid-gap: 5px;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(6, 1fr);
`;

export default function Calculator(props) {
  return (
    <StyledCalculatorContainer>
      <Display
        currTotal={props.currTotal}
        currCaclulation={props.currCaclulation}
      />
      {numpads.map((pad) => {
        return (
          <Numpad
            currTotal={props.currTotal}
            currCaclulation={props.currCaclulation}
            setCurrCalculation={props.setCurrCalculation}
            calculation={props.calculation}
            setCalculation={props.setCalculation}
            row={pad.row}
            col={pad.col}
            value={pad.value}
            id={pad.id}
            key={pad.value}
          />
        );
      })}
      <Zeropad
        currCalculation={props.currCalculation}
        setCurrCalculation={props.setCurrCalculation}
        calculation={props.calculation}
        setCalculation={props.setCalculation}
      />
      <Addpad
        currTotal={props.currTotal}
        setCurrTotal={props.setCurrTotal}
        currCalculation={props.currCalculation}
        setCurrCalculation={props.setCurrCalculation}
        calculation={props.calculation}
        setCalculation={props.setCalculation}
      />
      <Multpad
        currTotal={props.currTotal}
        setCurrTotal={props.setCurrTotal}
        currCalculation={props.currCalculation}
        setCurrCalculation={props.setCurrCalculation}
        calculation={props.calculation}
        setCalculation={props.setCalculation}
      />
      <Subpad
        currTotal={props.currTotal}
        setCurrTotal={props.setCurrTotal}
        currCalculation={props.currCalculation}
        setCurrCalculation={props.setCurrCalculation}
        calculation={props.calculation}
        setCalculation={props.setCalculation}
      />
      <Resultpad
        currTotal={props.currTotal}
        setCurrTotal={props.setCurrTotal}
        currCalculation={props.currCalculation}
        setCurrCalculation={props.setCurrCalculation}
        calculation={props.calculation}
        setCalculation={props.setCalculation}
      />
      <Clearpad
        setCurrCalculation={props.setCurrCalculation}
        setCalculation={props.setCalculation}
        setCurrTotal={props.setCurrTotal}
      />
      <Divpad
        currTotal={props.currTotal}
        setCurrTotal={props.setCurrTotal}
        currCalculation={props.currCalculation}
        setCurrCalculation={props.setCurrCalculation}
        calculation={props.calculation}
        setCalculation={props.setCalculation}
      />
      <Dotpad
        currCalculation={props.currCalculation}
        setCurrCalculation={props.setCurrCalculation}
        calculation={props.calculation}
        setCalculation={props.setCalculation}
      />
    </StyledCalculatorContainer>
  );
}
