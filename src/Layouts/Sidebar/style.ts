import styled from "styled-components"
import {Link} from "react-router-dom";

export const Container = styled.div`
margin-top:30px;
`;
export const LinkWrapper = styled(Link)<{collapsed:boolean}>`
 display: flex;
 // justify-content: left;
 justify-content: ${({collapsed}) => collapsed ? "center" : "left"};
 align-items: center;
 width: 90%;
 margin:5px auto;
 padding: 10px 0;
 border-radius: 8px;
 background-color: bisque;
 &:hover{
   cursor:pointer;
 }
 text-decoration:none;
`;
export const Icon = styled.div`
height: 21px;
width: 21px;
svg{
    height: 100%;
    width: 100%;
}
`;
export const LinkName = styled.div<{collapsed:boolean}>`
 color: #fff;
 transition-duration: .5s;
 width: ${({collapsed}) => collapsed? "0" : "150px"};
 overflow: hidden;
 font-size: 16px;
 font-family: 'Poppins', sans-serif;
 margin-left: 15%;
`;

