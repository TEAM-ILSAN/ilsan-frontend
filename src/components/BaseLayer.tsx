import styled from '@emotion/styled';

function BaseLayer() {
  return (
    <Container>
      <Title>지금 모일 수 있는 곳</Title>
      <ChatList>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((el, idx) => {
          return <ChatBox key={idx}></ChatBox>;
        })}
      </ChatList>
    </Container>
  );
}

export default BaseLayer;

const Container = styled.div`
  padding: 25px;
`;

const Title = styled.h2`
  font-size: 28px;
  line-height: 36px;
  font-weight: 400;
  margin-bottom: 25px;
`;

const ChatList = styled.div``;

const ChatBox = styled.div`
  padding: 15px;
  height: 6rem;
  background: #919191;
  margin-bottom: 20px;
`;
