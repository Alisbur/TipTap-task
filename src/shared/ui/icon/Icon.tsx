import icons from "../../../assets/icons/index";
import { TIcon } from "../../types/types";

type TIconProps = {
  glyph: TIcon;
}

export default function Icon ({glyph}: TIconProps) {
  const IconComponent = icons[glyph];
  
  return (
    <IconComponent className="icon" />
  )
}