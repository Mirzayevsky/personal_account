import styled from "styled-components"

export const Navigationbar = styled.div`
width: 98%;
height: 100%;
margin: auto;
display: flex;
align-items: center;
 .search-menu{
  width: 320px;
  padding: 10px;
 }
`;
export const Logo = styled.div`
color: #222;
font-size: 18px;
font-weight: 600;
`;
export const AdminWrap = styled.div`
height: 50px;
width: 50px;
border-radius: 50%;
margin-left: auto;
margin-bottom: 10px;
img{
height: 100%;
width: 100%;
}
`;


export const Button = styled.div`
width: 30px;
height: 30px;
cursor: pointer;
svg{
    height: 100%;
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

