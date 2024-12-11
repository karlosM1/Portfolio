import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import BlurFade from "./ui/blur-fade";
import { PersonDescriptionProps } from "./types/types";

export function PersonDescription({
  name,
  description,
  image,
}: PersonDescriptionProps) {
  return (
    <div className="flex flex-row justify-center items-center gap-2 sm:gap-2 md:gap-4 lg:gap-6">
      <div className="flex-col flex flex-1">
        <BlurFade delay={0.02} inView>
          <h1 className="text-3xl mb-2 font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
            Hi, I'm {name} 👨‍💻
          </h1>
          <h2 className="max-w-[600px] md:text-xl">{description}</h2>
        </BlurFade>
      </div>
      <div>
        <BlurFade delay={0.04}>
          <Avatar className="size-28 border">
            <AvatarImage
              className="w-full h-full object-cover"
              src={image}
              alt="profile-picture"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </BlurFade>
      </div>
    </div>
  );
}
