"use client";

import TaskStatus from "@/components/task-status";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import React from "react";

export const revalidate = 0


type Props = {
  params: {
    id: string;
  };
};
export default async function Task(props: Props) {
  const router = useRouter()
  const { params } = props;
  const { id } = params;
  const { data: tasks } = await supabase.from("tasks").select().eq("id", id)
  const task = tasks?.[0]
  
  const removeTask = async () => {
    await supabase.from("tasks").delete().eq("id", id) 
    router.push("/") 
  }
  
  if(!task) new Error("Task not found")
  return <div className="flex flex-col gap-3 w-full">
    <h5 className="text-3xl font-semibold">{task?.text}</h5>
    <p className="text-sm text-neutral-500">{task?.description}</p>
    <button onClick={removeTask} className="self-start text-sm text-red-300">Delete</button>
    <TaskStatus status={task?.status} />
  </div>;
}
