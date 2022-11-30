import React, {useEffect, useState} from 'react';
import { Button, Modal} from 'react-bootstrap'


import {useNavigate} from 'react-router-dom';

import axios from "axios";

import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';

import {Route, Link, Routes, useLocation} from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
const header = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [sidebar, setSidebar] = useState(false);
 // eslint-disable-next-line react-hooks/rules-of-hooks
  const showSidebar = () => setSidebar(!sidebar);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigate = useNavigate();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [show, setshow]=useState(true);
   // eslint-disable-next-line react-hooks/rules-of-hooks
  const [cart, setCart]=useState([]);
   // eslint-disable-next-line react-hooks/rules-of-hooks
  const [ViewPost, SetPostShow] = useState(false)
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [ViewPosttt, SetPostShowww] = useState(false)
   // eslint-disable-next-line react-hooks/rules-of-hooks
   const [isToggledd, setisToggledd] =useState(false);
 
    // eslint-disable-next-line react-hooks/rules-of-hooks
   const [Data, setData] = useState([]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [Data1, setData1] = useState([]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
   const [RowData, SetRowData] = useState([])
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [DK, SetDK] = useState(false)
   // eslint-disable-next-line react-hooks/rules-of-hooks
   const [id,setId] = useState("");
   // eslint-disable-next-line react-hooks/rules-of-hooks
   const [idd,setIdd] = useState("");
   // eslint-disable-next-line react-hooks/rules-of-hooks
   const [cn, setcn] = useState("")
    // eslint-disable-next-line react-hooks/rules-of-hooks
 const handlePostShow = () => { SetPostShow(true) }
 // eslint-disable-next-line react-hooks/rules-of-hooks
 const handleShow = () => { SetDK(false) }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const handleShowT = () => { SetDK(true) }
 // eslint-disable-next-line react-hooks/rules-of-hooks
 const handlePostShowww = () => { SetPostShowww(true) }
  // eslint-disable-next-line react-hooks/rules-of-hooks
 const hanldePostClose = () => { SetPostShow(false) }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const phanquyen = localStorage.getItem("Vaitro")
  const Dieukien = localStorage.getItem("DieuKien")
  console.log("phanquya", phanquyen);
  var b=JSON.stringify(phanquyen);
  var k ="QuanLy"
  var Xep=false;
  var kho=false;
  
  if(phanquyen==="Chu"){
    Xep=true;
  }
  if(phanquyen==="QuanLyKho"){
    kho=true;
  }
  // var setDK=(item) =>{
  //   DK=item;
  // }
  console.log("dieu kien show chuc mung ", Dieukien);
  // if(Dieukien=="true"){
  //   SetDK(true);
    
  // }
  const Rerun =()=>{
    if(Dieukien=="true"){
      SetDK(true);
      
    }
  }
//   DK=false;







 // eslint-disable-next-line react-hooks/rules-of-hooks
            useEffect(() => {
           
              showSidebar();
          }, [])



          
          
          
 // eslint-disable-next-line react-hooks/rules-of-hooks
  return (
    <>
       <div className='navbarngang'> 
 
      <header>
        <nav 
        // ref={navRef}
        >
         { Xep && <p onClick={() => {}}></p>}
         { Xep &&<p onClick={() => {}}> </p>}
          { Xep &&<p onClick={() => {}}></p>}
          { Xep &&<p onClick={() => {}}></p>}
          { kho && <p onClick={() => {}}></p>}
          { kho &&<p onClick={() => {}}> </p>}
        </nav>
{/* // cho hien thong bao */}
        { Xep &&
        <div className="cart" onClick={() => { handlePostShow() }} style={{position:"relative",left:"410px"}}>
          <span >
       
      
          </span>
        
        </div>
}

{/* { kho &&
        <div className="cart" onClick={() => { handlePostShowww() }} style={{position:"relative",left:"520px"}}>
          <span>
       
       <i className="fa fa-bell"></i>
          </span>
          <span>{Data1.length}</span>
        </div>
} */}

      </header>
     



      
     
     
     



      <div>

</div>
    
        </div>
    <IconContext.Provider value={{ color: '#fff' }}>
      
          <div className='navbar'>
          
            <Link to='#' className='menu-bars'>
            
               {/* <img src={images} alt='images' style={{width:"80px",height:"65px" }} onClick={showSidebar}/> */}
              {/* {HDblock1 && <img src={images} alt='images' style={{width:"80px",height:"65px" }} />} */}
            </Link>
          </div>
          <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul >
              <li className='navbar-toggle'>
                {/* <Link to='#' className='menu-bars'>
                  <AiIcons.AiOutlineClose />
                </Link> */}
              </li>

              
              {SidebarData.map((item, index) => {
                
                return (
                 
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                    <div style={{marginLeft: '-90px'}}>
                      {item.icon}
                      <span>{item.title}</span>
                      </div>
                    </Link>
                  </li>
                 
                );
              })}


              
            </ul>
          </nav>
        </IconContext.Provider>
    </>

  );
}

export default header;
