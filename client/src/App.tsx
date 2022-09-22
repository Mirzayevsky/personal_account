import React from "react";
import './App.css';
import {PageWrapper} from "./App.styles";
import {Layout} from "antd";
import 'antd/dist/antd.css';
import Sidebar from "./components/Sidebar/app";
import Navbar from "./components/Navigationbar";
import {Route, Routes} from "react-router-dom";
import Contacts from "./Pages/Contacts";
import Login from "./Pages/Login";

export default function App() {
    const { Content} = Layout;
    // Here I commenting sidebar if sidebar component should you can call this component
    return (
        <PageWrapper>
            <Layout style={{ minHeight: '100vh' }}>
                <Sidebar/>
                <Layout className="site-layout">
                    <Navbar/>
                    <Content className={'content'}>
                        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                            <Routes>
                                <Route path={'/'} element={<Contacts/>}/>
                                <Route path={'/login'}  element={<Login/>}/>
                            </Routes>
                        </div>
                    </Content>
                </Layout>
            </Layout>
        </PageWrapper>
    )
}


