type Props = {
  text: string;
};

const SubTitle = ({ text }: Props) => {
  return (
    <h5 className="pl-1 text-gray-800 font-bolder text-sm xs:text-base md:text-lg">
      {text}
    </h5>
  );
};

export default SubTitle;
