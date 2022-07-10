import styled from '@emotion/styled';

const BottomSheetHeader = () => {
  return (
    <Wrapper>
      <Handle></Handle>
    </Wrapper>
  );
};

export default BottomSheetHeader;

const Wrapper = styled.div`
  height: 4.8rem;
  border-top-left-radius: 0.8rem;
  border-top-right-radius: 0.8rem;
  position: relative;
  padding-top: 1.6rem;
  padding-bottom: 0.4rem;
`;

const Handle = styled.div`
  width: 3.2rem;
  height: 0.4rem;
  border-radius: 0.2rem;
  background-color: #d0d0d0;
  margin: auto;
`;
