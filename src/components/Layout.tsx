import React from "react"
import { useAppSelector } from "../hooks/storeHooks"
import Menu from "./Menu"

const Layout: React.FC<{children:React.ReactNode}> = ({ children }) => {
  const loggedIn = useAppSelector((s) => !!s.authReducer.token)
  return (
    <div className="h-screen md:flex ">
      {loggedIn && <Menu />}
      <div className="flex-1 h-full bg-archiGrey">{children}</div>
    </div>
  )
}

export default Layout
