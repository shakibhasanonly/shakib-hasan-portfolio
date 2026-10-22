import type { IconType as ReactIconType } from "react-icons";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiGit,
  SiGithub,
} from "react-icons/si";
import {
  Braces,
  Palette,
  PenTool,
  Share2,
  Printer,
  LayoutTemplate,
  Image as ImageIcon,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

export type SkillIcon = ReactIconType | LucideIcon;

export const skillIcons: Record<string, SkillIcon> = {
  html5: SiHtml5,
  css3: SiCss,
  javascript: SiJavascript,
  react: SiReact,
  nextjs: SiNextdotjs,
  typescript: SiTypescript,
  tailwind: SiTailwindcss,
  nodejs: SiNodedotjs,
  express: SiExpress,
  mongodb: SiMongodb,
  mysql: SiMysql,
  api: Braces,
  git: SiGit,
  github: SiGithub,
  ai: Sparkles,
  photoshop: ImageIcon,
  illustrator: PenTool,
  brand: Palette,
  logo: PenTool,
  social: Share2,
  print: Printer,
  ui: LayoutTemplate,
};
