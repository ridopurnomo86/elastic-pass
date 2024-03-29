import Logo from "~/assets/elastic-pass-logo.svg";
import { Button } from "~/components/ui/Button";
import { Input } from "~/components/ui/Input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/Form";
import { UseFormReturn } from "react-hook-form";
import { LoginValidationType } from "~/data/form-validation/LoginValidation";
import { Link } from "@remix-run/react";

type FormInputPropsType = {
  form: UseFormReturn<LoginValidationType>;
  onSubmit: (values: LoginValidationType) => void;
};

const FormInput = ({ onSubmit, form }: FormInputPropsType) => (
  <div className="flex min-h-screen w-[500px] flex-col justify-center px-8 lg:px-16">
    <div className="mb-4 w-full">
      <img src={Logo} alt="elastic-pass-logo" className="w-[200px]" />
    </div>
    <p className="mt-4 text-lg font-semibold text-neutral-900 antialiased lg:text-xl">
      Welcome Back
    </p>
    <p className="mt-2 text-sm font-medium text-neutral-600 antialiased">
      Join and feel experience the ease of transactions and managing events at the Elastic Pass.
    </p>
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="mt-4 space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="zed@email.com" type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="text-neutral-200">
          Login
        </Button>
        <p className="mt-8 text-sm font-medium text-neutral-600 antialiased">
          Need an account?&nbsp;
          <Link to="/create-account">
            <span className="text-black">Create an Account.</span>
          </Link>
        </p>
      </form>
    </Form>
  </div>
);

export default FormInput;
