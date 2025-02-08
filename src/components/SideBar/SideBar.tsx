import { HTMLAttributes } from "react";
import "./SideBar.less";

export default function SideBar ({children}: HTMLAttributes<HTMLDivElement>) {
  return (
    <aside className="sideBar">
      {children}
    </aside>
  )
}