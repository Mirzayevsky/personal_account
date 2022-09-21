
import React from 'react';
import {Routes,Route} from "react-router-dom"
import {Layout} from 'antd';
import 'antd/dist/antd.css';
import Navbar from "../../Layouts/Navigationbar/index";
import Sidebar from 'src/Layouts/Sidebar/app';
import { MainPageWrapper } from './styles';
import Login from '../Login';
import Users from '../Users';

const MainPage:React.FC = () => {
const { Content} = Layout;

    return (
        <MainPageWrapper>
            <Layout style={{ minHeight: '100vh' }}>
                <Sidebar/>
                <Layout className="site-layout">
                <Navbar/>
                    <Content style={{ margin: '0 16px' }}>
                        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                        <Routes>
                            <Route path={'/Users'} element={<Users/>}/>
                            <Route path={'/Login'}  element={<Login/>}/>
                        </Routes>
                        </div>
                    </Content>
                </Layout>
            </Layout>
        </MainPageWrapper>
    )
}

export default MainPage;