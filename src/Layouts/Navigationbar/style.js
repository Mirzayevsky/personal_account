import styled from "styled-components"

export const Navigationbar = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: space-between;
 .search-menu{
  width: 260px;
 }

`;
export const BellIcon = styled.div`
height: 34px;
width:fit-content;
svg{
height: 100%;
width: 100%;
}
`;
export const AdminWrap = styled.div`
height: 38px;
width: 38px;
border-radius: 50%;
img{
height: 100%;
width: 100%;
}

`;
export const NavWrap = styled.div`
width: calc(100vw - 260px);
height: calc(100vh - 80px);
position: fixed;
right: 0;
bottom: 0;
z-index: 9;
background: #f0f2f5;
`;
export const Input = styled.input`
height: 34px;
width: 260px;
border-radius: 5px;
border: 2px solid lightgray;
outline: none;
`;
export const Button = styled.div`
width: 30px;
height: 30px;
cursor: pointer;
svg{
    height: 100%;
}
`;
export const SearchBtn = styled.div`
height: 33px;
width: 90px;
border-radius:  0 5px 5px 0;
background-color: black;
color: #fff;
font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace;
font-weight: 500;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
&:hover{
transition: 0.5s ease-in;
background-color: rgba(0,0,0,0.76);
}

`;
