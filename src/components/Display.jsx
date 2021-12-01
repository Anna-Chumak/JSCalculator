import React from "react";
import styled from "styled-components";

const DisplayDiv = styled.div`
  text-align: right;
  background-color: black;
  color: orange;
  border-radius: 3px;
  grid-column-start: 1;
  grid-column-end: 5;
  grid-row: 1;
  padding: 5px 10px;
`;
export default function Display(props) {
  return (
    <DisplayDiv>
      <p id="display">{props.currCaclulation}</p>
      <p>{props.currTotal}</p>
    </DisplayDiv>
  );
}
