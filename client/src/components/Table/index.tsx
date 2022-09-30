import React, {  useState,useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {Modal,} from 'antd';
import {Container, Table, TableWrapper, TBody, TD, TH, THead, TRow,Button,EditButton} from "./style";
import Loader from "../Loader";
import { ReactComponent as DeleteSvg } from '../../assets/main/delete.svg';
import { getAllContact } from 'src/redux/features/contact/contactAction';
import ContactSlice from "../../redux/features/contact/contactSlice";
import { RootState } from 'src/redux/store/store';
import EditImg from "../../assets/main/edit.png"
import { IContactToolsState } from 'src/redux/features/contact/contactInterface';

const MainTable = () => {
    const [edit, setEdit] = useState(null);
    const [popUp, setPopUp] = useState({cancel: false})
    const data = useSelector((state:RootState) => state.RootReducer.ContactSlice);
    console.log(data);
    
    const {confirm} = Modal;
    const dispatch = useDispatch<any>()

    useEffect(()=>{
    dispatch(getAllContact())
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
                    

                    </TBody>
                </Table>
            </TableWrapper>

        </Container>
    );
};

export default MainTable;


