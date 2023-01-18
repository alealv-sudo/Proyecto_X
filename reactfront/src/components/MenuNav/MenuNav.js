import React, { useState, useEffect } from 'react';
import { Link, useLocation  } from "react-router-dom";
import { Menu, theme } from "antd";

import {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from '@ant-design/icons';

const MenuNav = () => {

    return(
       <div>
        <div style={{height: "32px", background: "rgba(255, 255, 255, 0.2)", margin: "16px"}}></div>
        <Menu
           theme='dark'
           mode="inline"
           defaultSelectedKeys={['/']} 
           >
               <Menu.Item key="/" title="Inicio">
                   <UserOutlined />
                   <span>Inicio</span>
                   <Link to="/"></Link>
               </Menu.Item>
               <Menu.Item key="/user" title="Inicio">
                    <VideoCameraOutlined/>
                    <span>User</span>
                    <Link to="/user"></Link>         
               </Menu.Item>
               <Menu.Item key="/Prueba" title="Inicio">
                    <VideoCameraOutlined/>
                    <span>Prueba</span>
                    <Link to="/Prueba"></Link>         
               </Menu.Item>
               <Menu.Item key="/Prueba2" title="Inicio">
                    <VideoCameraOutlined/>
                    <span>Prueba 2</span>
                    <Link to="/Prueba2"></Link>         
               </Menu.Item>
           </Menu>  
       </div>   
    ) 
}


export default MenuNav;