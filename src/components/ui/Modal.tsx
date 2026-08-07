import { X } from "lucide-react"
import { PropsWithChildren, RefObject } from "react"

interface Props extends PropsWithChildren {
  ref: RefObject<HTMLDivElement | null >
  onClose?: () => void
}

export function Modal( { onClose, children, ref }: Props ) {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-black/15 fixed top-0 left-0 z-100 fadeIn">
      <div ref={ref} className="bg-white p-5 rounded-3xl shadow w-sm relative">
        <button onClick={onClose} className="size-7 bg-zinc-200 hover:rotate-45 transition-all rounded-full flex justify-center items-center absolute top-3 right-3">
          <X className="opacity-60"/>
        </button>
        {children}
      </div>
    </div>
  )
}