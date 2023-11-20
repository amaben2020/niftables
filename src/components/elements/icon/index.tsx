import HamburgerOpen from "@/assets/svgs/Svg/HamburgerOpen";
import Logo from "@/assets/svgs/Svg/Logo";

type TIconComponent = {
  name: "hamburger" | "logo";
};

const IconComponent = ({ name }: TIconComponent) => {
  if (process.env.NODE_ENV === "development") {
    if (!name.length) console.log("Insert an icon name");
  }
  const ICON = {
    hamburger: <HamburgerOpen />,
    logo: <Logo />,
  };
  return ICON[name];
};

export default IconComponent;
