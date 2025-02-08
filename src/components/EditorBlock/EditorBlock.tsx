import { HTMLAttributes } from "react";
import "./EditorBlock.less";

export default function EditorBlock ({children}: HTMLAttributes<HTMLDivElement>) {
  return (
    <section className="editorBlock">
      {children}
    </section>
  )
}