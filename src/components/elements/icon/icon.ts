import DiscordSVG from "@/assets/svgs/Discord.svg";
import TwitterSVG from "@/assets/svgs/Twitter.svg";
import HamburgerCloseSVG from "@/assets/svgs/hamburger-menu-close.svg";
import HamburgerOpenSVG from "@/assets/svgs/hamburger-menu.svg";

export const SOCIAL_ICONS = {
  discord: DiscordSVG,
  twitter: TwitterSVG,
};

export const ICONS = {
  hamburgerOpen: HamburgerOpenSVG,
  hamburgerClose: HamburgerCloseSVG,
  ...SOCIAL_ICONS,
};
