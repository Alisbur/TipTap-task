import { HTMLAttributes } from "react";
import "./MainContent.less";

export default function MainContent ({children}: HTMLAttributes<HTMLDivElement>) {
  return (
    <section className="mainContent">
      {children}
    </section>
  )
}