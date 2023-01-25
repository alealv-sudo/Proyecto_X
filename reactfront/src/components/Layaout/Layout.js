import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//layout Component  
import { Layout, Menu, theme } from 'antd';
import MenuNav from '../MenuNav/MenuNav';
import './Layout.css'

//componentes
import CompShowBlog from '../blog/showBlog';
import Prueba from '../Pruebas/prueba';
import Prueba2 from '../Pruebas/prueba2';
import Usurio from '../Pruebas/user';
import Publicar from '../Pruebas/post';


import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;

const LayoutFront = () => {
    const [collapsed, setCollapsed] = useState(false);

    const {
      token: { colorBgContainer },
    } = theme.useToken();

    return (
    <Router>
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}  style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
        }}>
          <MenuNav></MenuNav>
        </Sider>
        <Layout className="site-layout" style={{
          marginLeft: 200,
        }}>
          <Header className='siteLayoutBackground'>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              style: {color: "#fff"},
              onClick: () => setCollapsed(!collapsed),
            })}
          </Header>
          <Content style={{
            margin: '24px 16px 0',
            overflow: 'initial',
            minHeight: '100vh',
          }}>
            <Routes>
                <Route path={'/'} exact  element={<CompShowBlog/>}/>
                <Route path={'/user'} exact  element={<Usurio/>}/>
                <Route path={'/post'} exact  element={<Publicar/>}/>
                <Route path={'/prueba'} exact  element={<Prueba/>}/>
                <Route path={'/prueba2'} exact  element={<Prueba2/>}/>
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </Router>
    );
  };
  export default LayoutFront;