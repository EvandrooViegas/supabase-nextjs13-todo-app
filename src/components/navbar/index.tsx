"use client"
import React from "react";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

export default function Navbar() {
  const path = usePathname()
  const params = useParams()
  return (
    <nav className="self-start">
      <ul className="flex gap-3 text-sm text-neutral-500">
        <li>
          <Link href="/" className="underline">Home</Link>
        </li>
        {path.includes("task") && !path.includes("edit") ? (
          <li>
            <Link href={`/task/edit/${params.id}`} className="underline">Edit</Link>
          </li>
        ) : null}
      </ul>
    </nav>
  );
}
