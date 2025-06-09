export interface PersonDescriptionProps {
  name: string;
  description: string;
  image?: string;
}

export interface ProjectCardProps {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  // video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}
