import TodoList from "@/components/todo-list";
import { supabase } from "@/lib/supabase";
import Link from "next/link";

export const dynamic = 'force-dynamic'

export default async function Home() {
  const { data:tasks } = await supabase.from("tasks").select()

  return (
    <main className="">
      <section className="space-y-3">
        <p className="text-2xl">Hello 
        <span className="font-semibold">, Evandro</span></p>
        <div className="flex justify-between mb-1">
          <span>{tasks?.length} tasks</span>
          <Link href="/add">+</Link>
        </div>
      </section>
      <section>
        <TodoList tasks={tasks} />
      </section>
    </main>
  )
}
