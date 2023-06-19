import React from 'react'

type Props = {
  status?: string | null
}
export default function TaskStatus(props:Props) {
  const { status } = props
  const color = (() => {
    switch(status) {
      case "not-started": 
         return "border-red-300"
      case "started":
        return "border-blue-300"
      default:
        return "border-green-300"
    }
  })()

  if(!status) return null 
  return (
    <span className={`px-2 py-1 text-xs text-neutral-300 border ${color} rounded-full w-fit`}>{status}</span>

  )
}
