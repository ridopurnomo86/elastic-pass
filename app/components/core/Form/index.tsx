import { Control, FieldValues } from "react-hook-form";
import { Form as FormCore } from "~/components/ui/Form";
import TextArea from "./components/TextArea";
import Input from "./components/Input";
import Password from "./components/Password";
import RadioGroup from "./components/RadioGroup";
import { FormPropstype } from "./types";

const getComponent = (type: string) => {
  switch (type) {
    case "textarea":
      return TextArea;
    case "password":
      return Password;
    case "radio":
      return RadioGroup;
    default:
      return Input;
  }
};

const Form = <T extends FieldValues>({
  form,
  onSubmit,
  forms = [],
  children,
  className,
}: FormPropstype<T>) => (
  <FormCore {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className={`space-y-4 ${className}`}>
      {forms.map((item) => {
        const Comp = getComponent(item.type);
        return (
          <Comp
            key={item.id}
            control={form.control as Control<FieldValues>}
            id={item.id}
            label={item.label}
            name={item.name}
            description={item.description}
            placeholder={item.placeholder}
            items={item.items}
          />
        );
      })}
      {children}
    </form>
  </FormCore>
);

export default Form;
