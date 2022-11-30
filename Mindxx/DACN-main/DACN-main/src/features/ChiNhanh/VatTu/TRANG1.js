import React from "react";
import usersCollectionRef from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import DataTable from "react-data-table-component"

import axios from 'axios'
function TRANG1() {
  const [Data, setData] = useState([]);
  const [TimKiem, setTimKiem] = useState("");
  const [loading, setLoading] = useState(false)

  var idd=localStorage.getItem("Idchu")
  console.log("Trang 1 ",idd)

  const Getgruop = async () => {

    const url = `http://localhost:5001/Gruop/${idd}`
    axios.get(url)
              .then(response => {
                  const result = response.data;
                  const { status, message, data } = result;
                  if (status !== 'SUCCESS') {
                      alert(message, status)
                  }
                  else {
                      setData(data)
                      console.log("Trang ",data)
                  }
              })
              .catch(err => {
                  console.log(err)
              })
            }

            useEffect(() => {
             
              Getgruop();
            });

  const columns = [
    {
        // name: <div style={{fontSize:"18px"}}>Tên </div>,
      selector: (row) => row.name,
     
    }
    // {
    //   name:<div style={{fontSize:"18px"}}>Số Điện Thoại</div>,
    //   selector: (row) => row.sdt,
    // },
    // {
    //     name:<div style={{fontSize:"18px"}}>Hoá Đơn Bán Được</div>,
    //     selector: (row) => row.SoLuongHD,
      
    // },
//     {
//       name:<div style={{fontSize:"18px"}}>Action</div>,
//       cell: (row) =>{
//         return(
//           <>
//           <div style={{fontSize:"12px"}}>
//                 <Button size='sm'  variant='primary' onClick={() => { handleViewShoww();setId(row._id) }}>View</Button>|,
//                 <Button size='sm' variant='warning' onClick={()=> {handleEditShow(SetRowData(row),setsdt(row.sdt),sethoten(row.hoten),setId(row._id))}}>Edit</Button>|,
//                 <Button size='sm' variant='danger' onClick={() => {handleViewShow(SetRowData(row),setId(row._id), setDelete(true))}}>Delete</Button>|,
//                 <Button size='sm' variant='warning' onClick={()=> {handleMoveShow(SetRowData(row),setId(row._id),setsdt(row.sdt),sethoten(row.hoten),setidtb(row._id))}}>Move-To</Button>|
//             </div>

// </>
//         )
//       }
      
      
//   },


  ]

  // data={search(Data)}

  function search(rows){
   
    
    return rows.filter(row => row.name.toLowerCase().indexOf(TimKiem)> -1)
    
  }
  return (
    <>
    <input  style={{border:"1px solid",borderRadius: '5px!important',margin:"5px",position:"relative",top:"20px",left:"50px"}} placeholder="Tìm Kiếm" value={TimKiem} onChange={(a)=> setTimKiem(a.target.value)} ></input>
    <h1>trang 1</h1>
    
     
    <DataTable
                             
                             columns={columns}
                             data={Data}
                             progressPending={loading}
                             fixedHeader
                             fixedHeaderScrollHeight='400px'
                             highlightOnHover
                             pagination
                             
                             />
      
    </>
  );
}
// export  {isToggled};
export default TRANG1;

