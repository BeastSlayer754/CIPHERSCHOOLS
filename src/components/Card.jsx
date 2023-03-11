import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const Container = styled.div`
   width: ${(props) => props.type !== "sm" && "360px"};
   margin-bottom: ${(props) => (props.type === "sm" ? "10px" : "45px")};
   cursor: pointer;
   display: ${(props) => props.type === "sm" && "flex"};
   gap: 10px;
`;

const Image = styled.img`
  width: 100%;
  height: ${(props) => (props.type === "sm" ? "120px" : "202px")};
  background-color: #999;
  flex : 1;
`;

const Details = styled.div`
  display: flex;
  margin-top: ${(props) => props.type !== "sm" && "16px"};
  gap : 12px;
  flex : 1;
`;

const ChannelImage = styled.img`
   width: 36px;
   height: 36px;
   border-radius: 50%;
   background-color: #999;
   display: ${(props) => props.type === "sm" && "none"};
`;

const Texts = styled.div`
  

`;

const Title = styled.h1`
   font-size: 16px;
   font-weight: 500;
   color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.h2`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin: 9px 0px;

`;

const Info = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;

const Card = ({type}) => {
 
  return  (
    <Link to="/video/test" style={{"textDecoration" : "none"}}>
    <Container type = {type}>
        <Image type = {type} src="data:image/png;base64,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" />
        <Details type={type}>
           <ChannelImage type={type} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz3OEI9QY3lGgnXR7dOR2F8NoLCE2Rg8RodwKFt2Ed9A&s"/>
           <Texts>
            <Title>Test Video</Title>
            <ChannelName>Cipher Schools</ChannelName>
            <Info>660,908 views • 1 day ago</Info>
           </Texts>
        </Details>
    </Container>
    </Link>
  );
}

export default Card