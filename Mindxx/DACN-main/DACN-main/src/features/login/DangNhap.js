import React, { useState } from "react";
import styles from './DangNhap.module.css'
import images from '../../images/Final_logo.png'
// import images from '../../images/background.jpg'
import { useNavigate } from "react-router-dom";
import Viewxchaomung from "./Viewchaomung";
import axios from "axios";
function DangNhap() {
  const [email, setName] = useState("");
  const [Data, setData] = useState([]);
  const [password, setPassword] =useState("");
  const navigate = useNavigate();
  const [isToggledd, setisToggledd]=useState(false);
  // const [Tontai, setTontai]=useState(false);
  var date = new Date().getDate(); //To get the Current Date
  var month = new Date().getMonth() + 1; //To get the Current Month
  var year = new Date().getFullYear(); //To get the Current Year
  var hours = new Date().getHours(); //To get the Current Hours
  var min = new Date().getMinutes(); //To get the Current Minutes
  var Ditre = 0;
  
  console.log("Dang nhap nhat dep trai", hours)
  console.log("Dang nhap nhat dep trai2",year)
  console.log("Dang nhap nhat dep trai3", month)
  console.log("Dang nhap nhat dep trai4", date)
  var Tontai =false;
  


  
  const onchangename= (event) => {
    setName(event.target.value);
  }
  const onchangepassword= (event) => {
    setPassword(event.target.value);
  }
  const submitform= async (e)=>{
    e.preventDefault();
    // console.log("Name", Name);
    // console.log("Password", Password);
    const data={
      email,
      password,
    };
    const url = "http://localhost:5001/Login";
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    response.json().then((val)=>{
      // console.log("giatri",val);
      // console.log("ten",val.Name);
      // console.log("pass",val.Password);
      // console.log("vaitro",val.VaiTro);
      if(val.role==="user"){
        navigate(`/ChiNhanh`);
      }
      if(val.role==="admin"){
        navigate(`/ChiNhanh`);
      }
      if(val.VaiTro==="NhanVien"){
  
       
        navigate(`/BanHang`);
      }
      if(val.VaiTro==="QuanLy"){
        navigate(`/TungChiNhanh`);
      }
      // localStorage.setItem("Vaitro", val.VaiTro);
      // localStorage.setItem("TenChiNhanh", val.ChiNhanh);
      // localStorage.setItem("NguoiNhanTin", val.Name);
      localStorage.setItem("Idchu", val._id);
      console.log("Idchu",val._id);
      // localStorage.setItem("TenChiNhanhh", val.ChiNhanhh)
    })
    console.log("danhap", response.json());
   
      
    
  }
  return (
    <div className={styles.container} >
      {/* <img src={images} alt='images'/> */}
      <form>
        <div className={styles.formInner}>
          <h2>Đăng Nhập</h2>

          <div className={styles.formGroup}>
            <label htmlFor="name">Tên email</label>
            <input type="text" name="name" id="name" onChange={onchangename}/>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password">Mật khẩu</label>
            <input type="password" name="password" id="password" onChange={onchangepassword}/>
          </div>
          <input onClick={submitform} type="submit" value="Đăng Nhập " />
          <input  style={{marginLeft: '6px'}} onClick={() => {navigate(`/DangKy`)}} type="submit" value="Đăng Ký " />
     
          
        </div>

        <div className={styles.images}>
          <img src={images} alt='images' style={{width:"150px",height:"150px" }}/>
          <h2>APP ToDo By Team 1</h2>
        </div>
      </form>


{/* <div>
  {isToggledd && <Viewxchaomung  closemodal={setisToggledd}/>}
</div> */}
    </div>
  );
}

export default DangNhap;
