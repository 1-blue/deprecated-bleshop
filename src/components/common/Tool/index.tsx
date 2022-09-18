import Form from "./Form";
import Input from "./Input";
import Textarea from "./Textarea";
import Button from "./Button";
import Checkbox from "./Checkbox";
import Select from "./Select";
import SinglePhoto from "./SinglePhoto";
import MultiplePhoto from "./MultiplePhoto";
import DatePicker from "./DatePicker";

type ToolType = {
  Form: typeof Form;
  Input: typeof Input;
  Textarea: typeof Textarea;
  Button: typeof Button;
  Checkbox: typeof Checkbox;
  Select: typeof Select;
  SinglePhoto: typeof SinglePhoto;
  MultiplePhoto: typeof MultiplePhoto;
  DatePicker: typeof DatePicker;
};

const Tool: ToolType = {
  Form,
  Input,
  Textarea,
  Button,
  Checkbox,
  Select,
  SinglePhoto,
  MultiplePhoto,
  DatePicker,
};

export default Tool;
