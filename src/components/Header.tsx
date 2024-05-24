'use client'

import { CommandDemo } from "./Command"

export default function Header() {
  return (
    <div className="grid grid-cols-2 gap-4 p-4 border-b mb-3">
      <CommandDemo/>
      <div className="">

      </div>
    </div>
  )
}

