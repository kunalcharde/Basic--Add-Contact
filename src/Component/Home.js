import React from "react";
import { useState } from "react";
import './Home.css'
const Home = () => {
  const [namevalue, setnamevalue] = useState("");
  const [phoneno, setphoneno] = useState('');
  const [Data, setData] = useState([]);
  function handledata() {
    if(namevalue!=="" && phoneno!=="") {
      setData([
        ...Data,
        {
          name: namevalue,
          phone: phoneno,
        },
      ]);
      setnamevalue("");
      setphoneno("");
    }
    else{
      window.alert("Filds Are Requird")
    }
  }
  function handlechangename(e) {
    setnamevalue(e.target.value);
  }
  function handlechangephone(e) {
    setphoneno(e.target.value);
  }
  return (
    <div className="container">
      <h2>Phone Book</h2>
      <div className="input-tag">
        <div>
          <input type="text" value={namevalue} onChange={handlechangename} /> &nbsp; &nbsp;
          <label>Enter The Name</label>
        </div>
      </div>
      <br></br>
      <div className="input-tag">
        <div>
          <input type="text" value={phoneno} onChange={handlechangephone} /> &nbsp; &nbsp;
          <label>Enter Phone No</label>
        </div>
        
      </div>
      <br></br>
      <button onClick={handledata} className="btn">Add Contact</button>
      <div>
          {Data.length?<h3>Data You Enterd</h3>:""}
        <ol>
          {Data?.map((item, idx) => {
            return (
              <>
              <li key={idx}>
              {item.name} - {item.phone}
              </li>
              </> 
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default Home;
