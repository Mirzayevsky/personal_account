import React, {useState} from "react";
import { ReactComponent as ExitSvg } from "../../Assets/main/exit.svg";
import {Layout, Space,Input } from 'antd';
import {AdminWrap,  Navigationbar,Logo} from "./style";
import AdminImg from "../../assets/navbar/user.png"
// import SearchTable from "../../Components/SearchTable";

const Navbar:React.FC = () => {
const { Header } = Layout;
    const { Search } = Input;
    const onSearch = (value: string) => console.log(value);
    // const [word,setWord] = useState("")
    // const [show,setShow] = useState(false)
    // const [found,setFound] = useState([])
    // const found = state.user.filter((data) => data.name.toLowerCase().trim().includes(word.toLowerCase().trim()))
    //
    // const searchData = (word) => {
    //     const filterData = state.user.filter((data) => data.name.toLowerCase().trim().includes(word.toLowerCase().trim()))
    //     setFound(filterData)
    //     // dispatch({
    //     //     type:"ON_SEARCH",
    //     //     payload:word
    //     // })
    // }
    return (
        <Header className="site-layout-background" style={{ padding: 0 }} >
            <Navigationbar>
                <Logo>Personal Account</Logo>
                <Space direction="horizontal">
                    <Search width={"340px"} placeholder="search" onSearch={onSearch} enterButton />
                </Space>
                {/*onChange={(e) => {setWord(e.target.value);setShow(word ? true : "")} }*/}
                <AdminWrap>
                    <img src={AdminImg} alt={"admin"}/>
                </AdminWrap>
                {/*{show?(*/}
                {/*      <NavWrap>*/}
                {/*      <Button onClick={() => setShow(false)}>*/}
                {/*        <ExitSvg/>*/}
                {/*      </Button>*/}
                {/*      <SearchTable found={found}/>*/}
                {/*      </NavWrap>*/}
                {/*):""}*/}
            </Navigationbar>
        </Header>
    )
}
export default Navbar