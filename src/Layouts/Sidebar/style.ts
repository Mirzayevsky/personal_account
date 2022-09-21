import styled from "styled-components"
import {Link} from "react-router-dom";

export const Container = styled.div`
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
 background-color: gray;
 &:hover{
   cursor:pointer;
 }
 text-decoration:none;
`;
export const IconWrapper = styled.div`
height: 21px;
width: 21px;
margin-left: 10px;
svg{
    height: 100%;
    width: 100%;
}
`;
export const LinkName = styled.div<{collapsed:boolean}>`
 color: #fff;
 transition-duration: .3s;
 width: ${({collapsed}) => collapsed? "0" : "150px"};
 overflow: hidden;
 font-size: 16px;
 font-family: 'Poppins', sans-serif;
 margin-left: 15%;
`;
export const Logo = styled.div<{collapsed:boolean}>`
width: fit-content;
.logo{
color: #fff;
font-size: 16px;
font-weight: 600;
font-family: sans-serif;
padding: 20px 0;
text-align: center;
display: ${({collapsed}) => collapsed? "none" : "block"};
}

.mini-logo{
color: #fff;
font-size: 16px;
font-weight: 600;
font-family: sans-serif;
text-align: center;
padding:10px;
display: ${({collapsed}) => collapsed? "block" : "none"};

}

`;

