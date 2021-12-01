import "./App.css";
import Calculator from "./components/Calculator";
import { useState, useEffect } from "react";

function App() {
  const [currTotal, setCurrTotal] = useState("");
  const [currCaclulation, setCurrCalculation] = useState("");
  const [calculation, setCalculation] = useState({});
  useEffect(() => {
    const temp = {
      lastChar: "_",
      firstNumber: 0,
      secondNumber: 0,
      lastOperation: "_",
      firstNumberDone: 0,
      currOperation: "_",
    };
    setCurrTotal(0);
    setCurrCalculation("0");
    setCalculation(temp);
  }, []);
  return (
    <div className="App">
      <Calculator
        currTotal={currTotal}
        currCaclulation={currCaclulation}
        setCurrTotal={setCurrTotal}
        setCurrCalculation={setCurrCalculation}
        calculation={calculation}
        setCalculation={setCalculation}
      />
    </div>
  );
}

export default App;
