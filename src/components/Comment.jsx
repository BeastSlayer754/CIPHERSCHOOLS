import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  gap: 10px;
  margin: 30px 0px;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${({ theme }) => theme.text}
`;

const Name = styled.span`
  font-size: 13px;
  font-weight: 500;
`;

const Date = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.textSoft};
  margin-left: 5px;
`;

const Text = styled.span`
  font-size: 14px;
`;

const Comment = () => {
  return (
    <Container>
        <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz3OEI9QY3lGgnXR7dOR2F8NoLCE2Rg8RodwKFt2Ed9A&s"/>
        <Details>
            <Name>John Doe <Date>1 day ago</Date></Name>
            <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt explicabo vel quasi, quas, quia nam rerum molestias assumenda magnam sed quis voluptate debitis amet rem earum impedit voluptatum doloribus voluptates?</Text>
        </Details>
    </Container>
  )
}

export default Comment