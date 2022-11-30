import React, {useEffect, useState} from 'react';
import { Button, Modal} from 'react-bootstrap'
import axios from "axios";
import moment from 'moment';

import TRANG1 from "./TRANG1.js"
import TRANG2 from "./TRANG2.js"
import TRANG3 from "./TRANG3.js"
import TRANG4 from "./TRANG4.js"

import Chinhnh from "../ChiNhanh"
const VatTu = () => {

  const [show, setshow]=useState(false);
  const [show1, setshow1]=useState(false);
  const [show2, setshow2]=useState(false);
  const [show3, setshow3]=useState(false);
  return (
    <div>
       <div style={{marginLeft: '260px'}}>
     <h1>Today Task</h1>
     <span style={{color:"black"}} onClick={() => {setshow(true);setshow1(false);setshow2(false);setshow3(false)}}>
          ALL
        </span>
        <span style={{color:"black"}} onClick={() => {setshow(false);setshow1(true);setshow2(false);setshow3(false)}}>
          Improtant
        </span>
        <span style={{color:"black"}} onClick={() => {setshow(false);setshow1(false);setshow2(true);setshow3(false)}}>
          Notes
        </span>
        <span style={{color:"black"}} onClick={() => {setshow(false);setshow1(false);setshow2(false);setshow3(true)}}>
          Links
        </span>
        </div>


        <div style={{marginLeft: '260px'}}>
    {show && <TRANG1/>}
     {/* <Chinhnh/> */}
     {show1 && <TRANG2/>}
     {show2 && <TRANG3/>}
     {show3 && <TRANG4/>}
    </div>
    </div>
  );
}

export default VatTu;
