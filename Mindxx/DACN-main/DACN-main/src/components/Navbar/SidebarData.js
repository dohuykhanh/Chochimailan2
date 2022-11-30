import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Task',
    path: '/VatTu',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Group',
    path: '/ChiNhanh',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: '--',
    path: '/BanHang',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title: '--',
    path: '/TungChiNhanh',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: '--',
    path: '/Trangluongnhanvien',
    icon: <AiIcons.AiFillDollarCircle />,
    cName: 'nav-text'
  },
  {
    title: 'Đăng Xuất',
    path: '/DangNhap',
    icon: <IoIcons.IoMdArrowBack />,
    cName: 'nav-text'
  }
];
