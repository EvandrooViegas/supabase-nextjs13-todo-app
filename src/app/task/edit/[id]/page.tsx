
import TodoForm from '@/components/todo-form'
import { supabase } from '@/lib/supabase'
import React from 'react'

export const revalidate = 0

type Props = {
    params: {
        id: string
    }
}       

export default async function Edit(props:Props) {
    const { params } = props
    const { id } = params
    const { data: tasks } = await supabase.from("tasks").select().eq("id", id)
  return (
    <div>
        <TodoForm task={tasks?.[0]} />
    </div>
  )
}
