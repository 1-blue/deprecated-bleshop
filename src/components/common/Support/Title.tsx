type Props = {
  text: string;
};

const Title = ({ text }: Props) => {
  return (
    <h4 className="text-gray-800 font-bolder text-lg xs:text-xl md:text-2xl">
      {text}
    </h4>
  );
};

export default Title;
