import React from 'react'
import MainTable from 'src/components/Table';
import {ContactWrapper, Title} from "./styles";
const Contacts = () => {
   
    return (
        <ContactWrapper>
            <Title>Contacts</Title>
            <MainTable/>
        </ContactWrapper>
    );
};

export default Contacts;