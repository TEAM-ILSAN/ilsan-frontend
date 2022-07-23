import { useParams } from 'react-router-dom';

interface Props {
  props?: number;
}

const Step = ({ props }: Props) => {
  const { step } = useParams();
  console.log(step);
  return <span>step: {step || props}</span>;
};

export default Step;
