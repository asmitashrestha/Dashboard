import React from 'react'

export const UserItem= ()=> {
  return (
    <div className='flex items-center justify-between gap-2 border rounded-[9px] p-1'>
     <div className="avatar rounded-full h-8 w-8 min-h-10 min-w-10 bg-emerald-500 text-white font-[700] flex items-center justify-center">
      <p>AS</p>
      </div>
     <div className='grow pl-2'>
      <p className='font-bold text-[16px]'>Asmita Shrestha</p>
      <p className='text-neutral-600 text-[12px]'>asmitastha@gmail.com</p>
     </div>
    </div>
  )
}
