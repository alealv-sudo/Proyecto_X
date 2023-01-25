import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//ROUTES

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
import { HOME, LOGIN, LOGOUT, PRIVATE } from '../../config/routes/paths';
import Login from '../Login/Login';
import Logout from '../Login/Logout';
import Register from '../Login/Register';
import { AuthContextProvider } from '../contexts/authContext';
import PublicRoute from '../routes/publicRoute';

const { Header, Sider, Content } = Layout;

const LayoutFront = () => {
    const [collapsed, setCollapsed] = useState(false);

    const {
      token: { colorBgContainer },
    } = theme.useToken();

    return (
    <AuthContextProvider>
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
                    <Route  path={LOGIN} exact  element={<Login></Login>}/>
                    <Route path={HOME} exact  element={<CompShowBlog/>}/>
                    <Route path={LOGOUT} exact  element={<Logout></Logout>}/>
                    <Route path={PRIVATE} exact  element={<Register/>}/>
                </Routes>
              </Content>
            </Layout>
          </Layout>
      </Router>
    </AuthContextProvider>
    );
  };
  export default LayoutFront;