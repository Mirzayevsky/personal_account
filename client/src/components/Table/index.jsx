import React, {  useState,useEffect} from 'react';
import axios from "axios"
import {Modal} from 'antd';
import {Container, Table, TableWrapper, TBody, TD, TH, THead, TRow,Button,EditButton} from "./style";
// import { ReactComponent as DeleteSvg } from '../../Assets/main/delete.svg';
// import EditImg from "../../Assets/main/edit.png"

const MainTable = () => {
    const [edit, setEdit] = useState(null);
    const [popUp, setPopUp] = useState({cancel: false})
    const {confirm} = Modal;
    const[state,seState] = useState(null)
    console.log(state);
    const getData = () =>{
        axios.get('http://localhost:3005/contacts')
        .then((res)=> seState(res.data))
        .catch((err)=>{console.log(err);})
    }
    useEffect(()=>{
       getData()
    },[])

    const deleteUser = (id) => {
      
    }

    const EditFormData = (item) => {
    }

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
                        {state?.contacts?.map((item,Index) => (
                            <TRow key={item.id}>
                                <TD>{Index + 1}</TD>
                                <TD>{item.name}</TD>
                                <TD>{item.phoneNumber}</TD>
                                <TD>{item.address}</TD>
                                <TD>
                                    <EditButton onClick={() => {
                                        setPopUp({cancel: true});
                                        EditFormData(item)
                                    }}>
                                        {/* <img src={EditImg} alt={"edit"}/> */}
                                    </EditButton>
                                </TD>
                                <TD>
                                    <Button onClick={() => deleteUser(item.id)}>
                                        {/* <DeleteSvg/> */}
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


