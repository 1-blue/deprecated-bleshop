type Props = {
  kinds: "button";
};

const Spinner = ({ kinds }: Props) => {
  return (
    <>
      {kinds === "button" && (
        <div className="w-8 h-8 rounded-full mx-auto border-[6px] border-gray-200 border-t-gray-500 animate-spin" />
      )}
    </>
  );
};

export default Spinner;
