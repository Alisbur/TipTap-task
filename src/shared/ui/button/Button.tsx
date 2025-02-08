import "./Button.less";
import { HTMLAttributes } from "react";

export default function Button ({onClick, children }: HTMLAttributes<HTMLButtonElement>) {
  return (
    <button className="button" onClick={onClick} >
      {children}
    </button>
  )
}