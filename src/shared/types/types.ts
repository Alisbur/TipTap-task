import icons from "../../assets/icons";

export type TIcon = keyof typeof icons;

export type TMenuItem = {
  icon: TIcon; 
  title?: string; 
  action?: () => void;
  isActive?: (() => boolean) | null;
}
