"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValue, useForm } from "react-hook-form";
import { Button } from "~/components/ui/Button";
import ProfileLayout from "./components/Layout";
import INPUT_DATA from "./input-data";
import Form from "~/components/core/Form";
import { ProfileValidationType, ProfileValidation } from "~/data/form-validation/ProfileValidation";
import { Icon } from "@iconify/react";

const Profile = () => {
  const form = useForm({
    resolver: zodResolver(ProfileValidation),
    defaultValues: {
      name: "",
      email: "",
      bio: "",
    },
  });

  const onSubmit = (values: FieldValue<ProfileValidationType>) => values;

  return (
    <ProfileLayout>
      <section>
        <div className="mb-4 border-b-[1px] pb-4">
          <p className="text-xl font-semibold tracking-tight text-neutral-900">Basic Info</p>
          <p className="text-sm font-medium text-neutral-500">
            Tell us about your basic info details.
          </p>
        </div>
        <Form form={form} onSubmit={onSubmit} forms={INPUT_DATA}>
          <Button type="submit" className="mt-6 flex items-center">
            <Icon
              icon="material-symbols:check-small-rounded"
              className="mr-1 text-2xl text-neutral-200"
            />
            <p className="text-sm font-medium text-neutral-200 antialiased">Save</p>
          </Button>
        </Form>
      </section>
    </ProfileLayout>
  );
};

export default Profile;
