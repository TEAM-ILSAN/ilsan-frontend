import styled from '@emotion/styled';
import { gutter, font, color } from '@/styles/theme';
import { PropsWithChildren } from 'react';

interface FormBlockProps {
  title: string;
}

const FormBlock = ({ title, children }: PropsWithChildren<FormBlockProps>) => {
  return (
    <FormBlockContainer>
      <BlockTitle>{title}</BlockTitle>
      {children}
    </FormBlockContainer>
  );
};

export default FormBlock;

const FormBlockContainer = styled.div`
  padding: ${gutter.size12};
  border: 0.1rem solid ${color.white};
  background-color: ${color.white};
  opacity: 0.7;
`;
const BlockTitle = styled.h2`
  font-size: ${font.size14};
  font-weight: normal;
  color: ${color.darkgrey};
`;
