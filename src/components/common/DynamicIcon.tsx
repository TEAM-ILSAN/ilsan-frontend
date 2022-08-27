interface DynamicIconProps {
  iconName: string;
}

const DynamicIcon = ({ iconName }: DynamicIconProps) => {
  try {
    const getFunc = async () => {
      const zz = await import(`@/assets/icons/${iconName}.svg`);
      console.log('zz', zz.default);
      return zz.default();
    };

    const Comp = getFunc();
    return <div>{Comp}</div>;
  } catch (err) {
    console.error(err);
  }
};

export default DynamicIcon;
