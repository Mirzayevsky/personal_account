import React,{useState} from "react";
import {Layout} from 'antd';
import {SidebarItems} from "../../constants/sidebarItems";
import {Container,LinkName,LinkWrapper,IconWrapper,Logo} from "./style";

const Sidebar:React.FC = () => {
const {Sider} = Layout;
const [collapsed, setCollapsed] = useState<boolean>(false);

    return (
        <Sider width={'240px'} collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
            <Container>
                {SidebarItems.map(({id,name,link,Icon})=> (
                    <LinkWrapper key={id} to={link} collapsed={collapsed}>
                       <IconWrapper>
                         <Icon/>
                       </IconWrapper>
                        <LinkName collapsed={collapsed}>{name}</LinkName>
                    </LinkWrapper>
                ))}

            </Container>
        </Sider>
    )
}
export default Sidebar;