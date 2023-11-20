import Discord from "@/assets/svgs/Svg/Discord";
import EarlyEngagements from "@/assets/svgs/Svg/EarlyEngagements";
import HamburgerOpen from "@/assets/svgs/Svg/HamburgerOpen";
import LimitlessCrypto from "@/assets/svgs/Svg/LimitlessCrypto";
import Logo from "@/assets/svgs/Svg/Logo";
import Profitability from "@/assets/svgs/Svg/Profitability";
import Telegram from "@/assets/svgs/Svg/Telegram";
import TransparentFair from "@/assets/svgs/Svg/TransparentFair";
import Twitter from "@/assets/svgs/Svg/Twitter";

type TIconComponent = {
  name:
    | "hamburger"
    | "logo"
    | "discord"
    | "engagement"
    | "limitless"
    | "profitability"
    | "telegram"
    | "twitter"
    | "transparent";
  fill: string;
};

const IconComponent = ({ name, fill }: TIconComponent) => {
  if (process.env.NODE_ENV === "development") {
    if (!name.length) console.log("Insert an icon name");
  }
  const ICON = {
    hamburger: <HamburgerOpen />,
    logo: <Logo />,
    discord: <Discord />,
    engagement: <EarlyEngagements fill={fill} />,
    limitless: <LimitlessCrypto fill={fill} />,
    profitability: <Profitability fill={fill} />,
    telegram: <Telegram />,
    twitter: <Twitter />,
    transparent: <TransparentFair fill={fill} />,
  };

  return ICON[name];
};

export default IconComponent;
