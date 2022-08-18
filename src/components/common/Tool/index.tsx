import Form from "./Form";
import Input from "./Input";
import Textarea from "./Textarea";
import Button from "./Button";
import Checkbox from "./Checkbox";
import Select from "./Select";
import SinglePhoto from "./SinglePhoto";

type ToolType = {
  Form: typeof Form;
  Input: typeof Input;
  Textarea: typeof Textarea;
  Button: typeof Button;
  Checkbox: typeof Checkbox;
  Select: typeof Select;
  SinglePhoto: typeof SinglePhoto;
};

const Tool: ToolType = {
  Form,
  Input,
  Textarea,
  Button,
  Checkbox,
  Select,
  SinglePhoto,
};

export default Tool;
