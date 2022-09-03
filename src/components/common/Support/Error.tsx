type Props = {
  text: string;
};

const Error = ({ text }: Props) => {
  return <h6 className="text-center font-bolder text-red-500">{text}</h6>;
};

export default Error;
