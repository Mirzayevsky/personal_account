import React, {  useState,useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {Modal,} from 'antd';
import {Container, Table, TableWrapper, TBody, TD, TH, THead, TRow,Button,EditButton} from "./style";
import Loader from "../Loader";
import { ReactComponent as DeleteSvg } from '../../assets/main/delete.svg';
import EditImg from "../../assets/main/edit.png"
import { defaultStateType } from 'src/redux/modules/GetProduct/getProduct.Reducer';
import { getProductAction } from 'src/redux/modules/GetProduct/getProdcuct.Action';
const MainTable = () => {
    const [edit, setEdit] = useState(null);
    const [popUp, setPopUp] = useState({cancel: false})
    const data = useSelector((state:defaultStateType) => state.contact);
    console.log(data);
    
    const {confirm} = Modal;
    const dispatch = useDispatch<any>()
    useEffect(()=>{
    dispatch(getProductAction())

    },[])
    // const deleteUser = (id) => {
    //
    // }
    //
    // const EditFormData = (item) => {
    // }

    return (
        <Container>
            {/* {popUp.cancel ? (
                <PopUp
                    firstTitle={'Name'}
                    secondTitle={'PhoneNumber'}
                    thirdTitle={'Address'}
                    setPopUp={setPopUp}
                    edit={edit}
                />
            ) : ""
            }
            <DrawerMain
                title={"Add a user"}
                firstTitle={'Username'}
                secondTitle={'Phone Number'}
                thirdTitle={'User address'}
            /> */}
            <Loader/>
            <TableWrapper>
                <Table>
                    <THead>
                        <TRow>
                            <TH>#</TH>
                            <TH>Name</TH>
                            <TH>PhoneNumber</TH>
                            <TH>Address</TH>
                            <TH>Edit</TH>
                            <TH>Delete</TH>
                        </TRow>
                    </THead>
                    <TBody>
                        {data.map((item: { id: React.Key | null | undefined; name: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; phoneNumber: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; address: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; },Index: number) => (
                            <TRow key={item.id}>
                                <TD>{Index + 1}</TD>
                                <TD>{item.name}</TD>
                                <TD>{item.phoneNumber}</TD>
                                <TD>{item.address}</TD>
                                <TD>
                                {/*    onClick={() => {*/}
                                {/*    setPopUp({cancel: true});*/}
                                {/*    EditFormData(item)*/}
                                {/*}}*/}
                                    <EditButton >
                                         <img src={EditImg} alt={"edit"}/>
                                    </EditButton>
                                </TD>
                                <TD>
                                    {/*onClick={() => deleteUser(item.id)}*/}
                                    <Button >
                                         <DeleteSvg/>
                                    </Button>
                                </TD>
                            </TRow>
                        ))}
                    </TBody>
                </Table>
            </TableWrapper>

        </Container>
    );
};

export default MainTable;


