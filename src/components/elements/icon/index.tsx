import ChevronDown from "@/assets/svgs/Svg/ChevronDown";
import ChevronUp from "@/assets/svgs/Svg/ChevronUp";
import Discord from "@/assets/svgs/Svg/Discord";
import EarlyEngagements from "@/assets/svgs/Svg/EarlyEngagements";
import HamburgerClose from "@/assets/svgs/Svg/HamburgerClose";
import HamburgerOpen from "@/assets/svgs/Svg/HamburgerOpen";
import LimitlessCrypto from "@/assets/svgs/Svg/LimitlessCrypto";
import Logo from "@/assets/svgs/Svg/Logo";
import Niftables from "@/assets/svgs/Svg/Niftables";
import Profitability from "@/assets/svgs/Svg/Profitability";
import Telegram from "@/assets/svgs/Svg/Telegram";
import TransparentFair from "@/assets/svgs/Svg/TransparentFair";
import Twitter from "@/assets/svgs/Svg/Twitter";

export type TIconComponent = {
  name:
    | "hamburger"
    | "logo"
    | "discord"
    | "engagement"
    | "limitless"
    | "profitability"
    | "telegram"
    | "twitter"
    | "transparent"
    | "niftables"
    | "hamburgerClose"
    | "chevronUp"
    | "chevronDown";
  fill?: boolean;
};

const IconComponent = ({ name, fill, ...rest }: TIconComponent) => {
  if (process.env.NODE_ENV === "development") {
    if (!name.length) console.log("Insert an icon name");
  }
  const ICON = {
    hamburger: <HamburgerOpen />,
    hamburgerClose: <HamburgerClose />,
    logo: <Logo />,
    discord: <Discord />,
    engagement: <EarlyEngagements fill={fill} {...rest} />,
    limitless: <LimitlessCrypto fill={fill} {...rest} />,
    profitability: <Profitability fill={fill} {...rest} />,
    telegram: <Telegram />,
    twitter: <Twitter />,
    transparent: <TransparentFair fill={fill} {...rest} />,
    niftables: <Niftables />,
    chevronUp: <ChevronUp />,
    chevronDown: <ChevronDown />,
  };

  return ICON[name];
};

export default IconComponent;
