import React, { useState } from "react";
import Upperpart from "./component/Upperpart";
import Imgcounterpast from "./component/Imgcounterpast";
import data from './data';


const App = () => {
  const [datanew ,setdatanew] = useState(data);
  function Removeitems(id){
    const newplace = datanew.filter(abhaynew => abhaynew.id!==id); 
    setdatanew(newplace);
  }
  return (
  <div>
    <Upperpart/>
   <Imgcounterpast abhayprops = {datanew} sabremove = {Removeitems} ></Imgcounterpast>
  </div>
  );
};

export default App;
