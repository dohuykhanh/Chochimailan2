import React, { useState, useEffect,useRef } from "react";
// import  "./cartcss.css" 
import { Button, Modal} from 'react-bootstrap'
import axios from "axios";
import moment from 'moment';
import ReactToPrint, { useReactToPrint } from 'react-to-print';
const logo  = require('./1.png');
// import "./Viewxemhoadon.css"



const Viewxchaomung = ({ closemodal}) => {


            
  return (
   
<div className="modalBackground" style={{position:"absolute", top:"100px"}}>
   
   <img src={logo}/>
            <div className={"nut"}>
            <button  onClick={() => closemodal(false)}> X </button>
            </div> 
            
            </div>
            




  );
};

export default Viewxchaomung;



