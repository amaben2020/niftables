import { ICONS } from "./icon";

type IStyle = {
  [key: string]: string;
};

export interface IIconProps {
  icon: keyof typeof ICONS;
  className?: string;
  style?: IStyle;
  color?: string;
  size?: string;
}
