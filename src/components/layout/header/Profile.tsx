'use client'

import { PagesConfig } from "@/config/pages.config"
import { signOut } from "@/lib/auth-client"
import Link from "next/link"

interface Props {
  setIsProfileMenuOpen: (isOpen: boolean) => void
}

export function ProfileMenu( { setIsProfileMenuOpen }: Props ) {
  const handleLogOut = () => {
    signOut()
    setIsProfileMenuOpen(false)
  }
  return (
    <div className="fadeIn flex flex-col gap-2 items-start absolute top-full right-0 mt-2 bg-white rounded-md shadow-2xl p-3 z-100">
      <Link href={PagesConfig.PROFILE} className="transition-colors hover:text-primary">Профиль</Link>
      <button onClick={handleLogOut} className="transition-colors hover:text-primary">Выйти</button>
    </div>
  ) 
}