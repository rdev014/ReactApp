import { ReactNode } from "react";

export default function Button(props:{onClick ?:()=>void; disabled ?:boolean; children: ReactNode}) {

  return (
  <button onClick={props.onClick} disabled={props.disabled}
   type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-100 text-blue-800 hover:bg-blue-200 focus:outline-none focus:bg-blue-200 disabled:opacity-50 disabled:pointer-events-none">
   {props.children}
  </button>
  )
}
export function DangerButton({onClick, disabled, children} :{onClick ?:()=>void; disabled ?:boolean; children: ReactNode}) {

  return (
  <button onClick={onClick} disabled={disabled}
   type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-red-100 text-blue-800 hover:bg-red-200 focus:outline-none focus:bg-red-200 disabled:opacity-50 disabled:pointer-events-none">
   {children}
  </button>
  )
}

export function SuccessButton({onClick, disabled, children} :{onClick ?:()=>void; disabled ?:boolean; children: ReactNode}) {

  return (
  <button onClick={onClick} disabled={disabled}
   type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-green-100 text-gray-800 hover:bg-green-200 focus:outline-none focus:bg-green-300 disabled:opacity-50 disabled:pointer-events-none">
   {children}
  </button>
  )
}

export function InfoButton({onClick, disabled, children} :{onClick ?:()=>void; disabled ?:boolean; children: ReactNode}) {

  return (
  <button onClick={onClick} disabled={disabled}
   type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-sky-100 text-gray-800 hover:bg-sky-200 focus:outline-none focus:bg-sky-300 disabled:opacity-50 disabled:pointer-events-none">
   {children}
  </button>
  )
}