import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DangNhap from './features/login/DangNhap';
import DangKy from './features/login/Dangky';
import DangKyChu from './features/login/DangKyChu';
// import Navbar from './components/Navbar/header'
import ChiNhanh from './features/ChiNhanh/ChiNhanh'



import Home from './layout/home/homeindex';

import TungChiNhanh from './features/ChiNhanh/TungChiNhanh'
import Trangluongnhanvien from './features/ChiNhanh/Trangluongnhanvien'
import 'bootstrap/dist/css/bootstrap.min.css';
// import VatTu from './features/ChiNhanh/VatTu/VatTu';
import VatTu from './features/ChiNhanh/VatTu/VatTu';

import BanHang from './features/ChiNhanh/BANHANG/navbargiohang'


function App() {
    return (

        <Router>
      
        <Routes>
         
           <Route path='/DangNhap' element={
             <DangNhap></DangNhap>
           }>
           </Route>
           <Route path='/DangKy' element={
             <DangKy></DangKy>
           }>
           </Route>
           <Route path='/ChiNhanh'   element={
             <Home>
             <ChiNhanh></ChiNhanh>
           </Home>
           }>
           </Route>
   
    
      
           <Route path='/TungChiNhanh' element={
             <Home>
             <TungChiNhanh/>
             </Home>
           }>
           </Route>

           <Route path='/Trangluongnhanvien' element={
             <Home>
             <Trangluongnhanvien/>
             </Home>
           }>
           </Route>

           <Route path='/VatTu' element={
             <Home>
             <VatTu/>
             </Home>
           }>
           </Route>

           <Route path='/DangKyChu' element={
           
           <DangKyChu/>
           
         }>
         </Route> 


           <Route path='/BanHang' element={
             <Home>
             <BanHang/>
             </Home>
           }>
           </Route>

      
              
       </Routes> 
       </Router>

    );
}

export default App;