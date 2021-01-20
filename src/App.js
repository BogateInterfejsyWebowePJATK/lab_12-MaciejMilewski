import './App.css';
import { useState, useRef } from "react";
import NumberForm from "./NumberForm/NumberForm.js";

function App() {
  const [sum, setSum] = useState({ value: 0, amount: 0 });
  const number = useRef();

  const onSubmitAddNumber = e => {
    e.preventDefault();
    setSum({ value: sum.value + parseFloat(number.current.value), amount: ++sum.amount });
  }

  return (
    <>
      <p>Suma: {sum.value}</p>
      <p>Średnia z pobranych {sum.amount} liczb wynosi: {isNaN((sum.value / sum.amount).toFixed(2)) ? 0.00 : (sum.value / sum.amount).toFixed(2)}</p>
      <NumberForm numberReference={number} onSubmit={onSubmitAddNumber} />
    </>
  );
}

export default App;
