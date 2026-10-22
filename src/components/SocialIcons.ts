import { SiGithub, SiFacebook, SiInstagram, SiBehance } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa6";
import type { IconType } from "react-icons";

export const socialIcons: Record<string, IconType> = {
  github: SiGithub,
  linkedin: FaLinkedinIn,
  facebook: SiFacebook,
  instagram: SiInstagram,
  behance: SiBehance,
};
