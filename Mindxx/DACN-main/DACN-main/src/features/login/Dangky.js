import {React, useState} from "react";
import styles from './DangNhap.module.css'
import images from '../../images/Final_logo.png'
import axios from "axios";
// import images from '../../images/background.jpg'
import { useNavigate } from "react-router-dom";
function DangKy() {
  const navigate = useNavigate();
  var Tenchinhanh= localStorage.getItem("TenChiNhanh");
  console.log("chinhanh",Tenchinhanh)
  var Chutk= localStorage.getItem("Chutk");
  let Idchu=Chutk;

  console.log("chu thang tak",Chutk)
  const [isToggledd, setisToggledd] =useState(false);
  const [Data, setData] = useState([]);
  const [RowData, SetRowData] = useState([])

  const [ViewShow, SetViewShow] = useState(false)
  const handleViewShow = () => { SetViewShow(true) }
  const hanldeViewClose = () => { SetViewShow(false) }

    //FOr Delete Model
  const [ViewDelete, SetDeleteShow] = useState(false)
  const handleDeleteShow = () => { SetDeleteShow(true) }
  const hanldeDeleteClose = () => { SetDeleteShow(false) }
   //FOr Add New Data Model
   const [ViewPost, SetPostShow] = useState(false)
   const handlePostShow = () => { SetPostShow(true) }
   const hanldePostClose = () => { SetPostShow(false) }
  
  
     //Define here local state that store the form Data
     const [password, setpassword] = useState("")
    //  const [VaiTro, setvaitro] = useState("")
    //  const [ChiNhanh, setchinhanh] = useState("")
     const [username, setName] = useState("")
    //  const [role, setrole] = useState("")
     const [email, setemail] = useState("")
     const [DateOfBirth, setDateOfBirth] = useState("")
     const [profession, setprofession] = useState("")
     var ChiNhanh=Tenchinhanh;
     var VaiTro="NhanVien"
   
     
     const [cn, setcn] = useState("")
    //Id for update record and Delete
    const [id,setId] = useState("");
    const [Delete,setDelete] = useState(false)



  const handleSubmite = () => {
    if(password==""  && username=="")
    {
      alert("Vui long nhap thong tin")
    }else if(password==""|| username==""){
      alert("Vui long nhap thong tin")
    }else{
  
      console.log("khanh",VaiTro)
      console.log("khanh",ChiNhanh)
      const url = 'http://localhost:5001/TaiKhoan'
      let role = "admin";
    
      const Credentials = { password,role,username,email,DateOfBirth,profession }
      axios.post(url, Credentials)
          .then(response => {
              const result = response.data;
              const { status, message, data } = result;
              if (status !== 'SUCCESS') {
                  alert(message, status)
              }
              else {
                  alert(message)
                  window.location.reload()
              }
          })
          .catch(err => {
              console.log(err)
          })
          navigate(`/DangNhap`);
    }
    
}
  return (
    <div className={styles.container} >
      {/* <img src={images} alt='images'/> */}
      <form>
        <div className={styles.formInner}>
          <h2>Tạo Tài Khoản</h2>

          <div className={styles.formGroup}>
            <label htmlFor="name">Tên đăng nhập</label>
            <input type="text" name="name" id="name"  onChange={(e) => setName(e.target.value)}/>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="password">Mật khẩu</label>
            <input type="password" name="password" id="password" onChange={(e) => setpassword(e.target.value)}/>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="name">email</label>
            <input type="text" name="name" id="name"  onChange={(e) => setemail(e.target.value)}/>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="name">Date of Birth</label>
            <input type="text" name="name" id="name"  onChange={(e) => setDateOfBirth(e.target.value)}/>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="name">profession</label>
            <input type="text" name="name" id="name"  onChange={(e) => setprofession(e.target.value)}/>
          </div>
     
          
        

           
          <input onClick={handleSubmite} type="submit" value="Tạo Tài Khoản" />
        </div>

        <div className={styles.images}>
          <img src={images} alt='images' style={{width:"150px",height:"150px" }}/>
          <h2>APP ToDo By Team 1</h2>
        </div>
      </form>



    </div>
  );
}

export default DangKy;
