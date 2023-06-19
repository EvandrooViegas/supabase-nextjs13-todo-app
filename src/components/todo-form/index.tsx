"use client";

import React, { useState } from "react";
import Field from "../field";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "../button";
import { FieldContextProvider, FieldContextType } from "../field/field-context";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { iTask } from "@/types/iTask";

const taskFormData = z.object({
  text: z.string().nonempty("Task Name is required"),
  description: z
    .string(),
  status: z.string(),
});
export type FormData = z.infer<typeof taskFormData>;
type Props = {
  task: iTask | undefined;
};
export default function TodoForm(props: Props) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const { task } = props;
  const isEditing = task ? true : false;

  const form = useForm<FormData>({
    resolver: zodResolver(taskFormData),
    defaultValues: task
      ? {
          text: task.text!,
          description: task.description!,
          status: task.status!,
        }
      : undefined,
  });
  const { handleSubmit } = form;

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsLoading(true);
    if (isEditing) {
      const { error } = await supabase
        .from("tasks")
        .update(data)
        .eq("id", task?.id);
        console.log(error);
      if (error) setError(error.message);
      router.push(`/task/${task?.id}`);
    } else {
      const { error } = await supabase.from("tasks").insert(data);
      if (error) setError(error.message);
      router.push(`/`);
    }
    setIsLoading(false);
  };
  return (
    <FieldContextProvider value={form as unknown as FieldContextType}>
      {error ? <p className="text-red-400">*{error}</p> : null}
      <h1 className="text-2xl font-semibold mb-4">Create A new Task</h1>
      <form
        className="grid grid-cols-2 gap-3"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Field label="Task Name: " id="text" />

        <Field
          label="Status: "
          id="status"
          type="select"
          options={[
            { label: "Not Started", value: "not-started" },
            { label: "Started", value: "started" },
            { label: "Finished", value: "finished" },
          ]}
        />
        <Field
          label="Task Description: "
          className="h-44"
          containerClassName="col-span-2"
          type="textarea"
          id="description"
        />
        <div className="flex gap-3 col-span-2">
          <Button disabled={isLoading}>
            {isEditing ? "Update" : "Submit"}
          </Button>
          <Button disabled={isLoading} type="button" intent={"secondary"}>
            <Link href={isEditing ? `/task/${task?.id}` : "/"}>Cancel</Link>
          </Button>
        </div>
      </form>
    </FieldContextProvider>
  );
}
