import styled from "styled-components"

export const Navigationbar = styled.div`
width: 90%;
height: 100%;
margin: auto;
display: flex;
align-items: center;
justify-content: space-between;
 .search-menu{
  width: 320px;
  padding: 10px;
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
height: 37px;
width: 320px;
border-radius: 5px;
border: 2px solid lightgray;
outline: none;
margin-left: 50px;

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
