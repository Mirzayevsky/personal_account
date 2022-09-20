import React, {useState} from "react";
import {Layout } from 'antd';
const { Header } = Layout;
import {AdminWrap, BellIcon, Navigationbar, NavWrap, Input, Button, SearchBtn} from "./style";
import AdminImg from "../../Assets/navbar/user.557587208eb9e232f2ca (1).png"
// import SearchTable from "../../Components/SearchTable";
import { ReactComponent as ExitSvg } from "../../Assets/main/exit.svg";

const Navbar:React.FC = () => {
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
                <Input className={"search-menu"} placeholder="search"/>
                {/*onChange={(e) => {setWord(e.target.value);setShow(word ? true : "")} }*/}
                {/*<SearchBtn onClick={() => {searchData(word);;}}>search</SearchBtn>*/}
             
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