import { iTask } from '@/types/iTask'
import Link from 'next/link'
import React from 'react'
import TaskStatus from '../task-status'

type Props = {
  tasks: iTask[] | null
}
export default async function TodoList(props:Props) {
  const { tasks } = props
  return (
    <div className='grid grid-cols-2 gap-4'>
      {tasks?.map(task => (
        <Link href={`task/${task?.id}`} key={task?.id} className='flex flex-col gap-1.5 border border-dashed p-4 rounded-md border-neutral-500'>
          <h1>{task?.text}</h1>
          <p className='text-xs text-neutral-500 truncate'>{task?.description}</p>
          <TaskStatus status={task?.status} />
        </Link>
      ))}
    </div>  
  )
}
