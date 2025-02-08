import "./MenuItem.less";
import Icon from "../icon/Icon";
import { TMenuItem } from "../../types/types";

export default function MenuItem({
  icon,
  title,
  action,
  isActive = null,
}: TMenuItem) {
  return (
    <button
      className={`menu-item${isActive && isActive() ? " is-active" : ""}`}
      onClick={action}
      title={title}
    >
      <Icon glyph={icon} />
    </button>
  );
}
