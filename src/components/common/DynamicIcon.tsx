import { lazy, Suspense } from 'react';
interface DynamicIconProps {
  iconName: string;
}

const DynamicIcon = ({ iconName }: DynamicIconProps) => {
  const Component = lazy(() => import(`@/assets/icons/${iconName}.svg`));

  return (
    <Suspense fallback={<div>icon</div>}>
      <Component />
    </Suspense>
  );
};

export default DynamicIcon;
