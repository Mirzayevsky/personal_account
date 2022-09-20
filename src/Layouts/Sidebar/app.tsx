import React,{useState} from "react";
import { Link} from "react-router-dom";
import {Layout} from 'antd';
import {ListAltOutlined,HomeMaxOutlined } from "@mui/icons-material";
import {SidebarItems} from "../../Constants/sidebarItems";
import {Container,LinkName,LinkWrapper,Icon} from "./style";

const items = [
  {label:"Home",key:"/",icon:<HomeMaxOutlined />},
  {label:"Contacts",key:"/contacts",icon:<ListAltOutlined/>},
  {label:"Signout",key:"signout",icon:<ListAltOutlined/>,danger:true}
];

const Sidebar = () => {
const {Sider} = Layout;
const [collapsed, setCollapsed] = useState(false);

    return (
        <Sider collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
            <div className="logo"> Personal</div>
            <Container>
                {SidebarItems.map(({id,name,link,icon})=>(
                    <LinkWrapper key={id} to={link} collapsed={collapsed}>
                        <Icon>{icon}</Icon>
                        <LinkName collapsed={collapsed}>{name}</LinkName>
                    </LinkWrapper>
                ))}

            </Container>
        </Sider>
    )
}
export default Sidebar;