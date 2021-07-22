import React, { useState } from "react";
import LayoutView from './layout-generator'
import './styles.css'
export default function App() {
  const [layoutValue, setLayoutValue] = useState("");
  const setValue = (val: string) => {
    setLayoutValue(val);
  };

  return (
    <div className="App">
      <div className="Layout">
      <input className="Input" onChange={(e) => setValue(e.target.value)} />
      <LayoutView data={layoutValue}/> 
      </div>
    </div>
  );
}
