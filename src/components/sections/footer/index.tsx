import IconComponent from "@/components/elements/icon";
import SocialIcons from "@/components/elements/social-icons";
import { socialLinks } from "@/components/elements/social-icons/mocks/data";

const Footer = () => {
  return (
    <footer className="bg-black py-6 px-8 pb-11 w-full flex flex-col md:flex-row justify-between items-center gap-y-6">
      <div className="flex items-center gap-x-20 md:gap-x-24 flex-col md:flex-row gap-y-6">
        <div className="md:order-1 order-2">
          <p className="font-secondary text-sm">
            © Creon 2023. All rights reserved.
          </p>
        </div>

        <div className="md:order-2 order-1">
          <SocialIcons links={socialLinks} />
        </div>
      </div>

      <div>
        <span className="flex items-center gap-3">
          <p className="font-secondary text-sm">Powered by</p>
          <IconComponent name="niftables" />
        </span>
      </div>
    </footer>
  );
};

export default Footer;
