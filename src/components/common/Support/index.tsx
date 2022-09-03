import Title from "./Title";
import SubTitle from "./SubTitle";
import Error from "./Error";
import Background from "./Background";

type SupportType = {
  Title: typeof Title;
  SubTitle: typeof SubTitle;
  Error: typeof Error;
  Background: typeof Background;
};

const Support: SupportType = {
  Title,
  SubTitle,
  Error,
  Background,
};

export default Support;
