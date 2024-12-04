import BlurFade from "@/components/ui/blur-fade";
import { DATA } from "@/data/resume";
export function About() {
  return (
    <div>
      <BlurFade>
        <h2 className="text-xl font-bold">About</h2>
      </BlurFade>
      <BlurFade>
        <p className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
          {DATA.summary}
        </p>
      </BlurFade>
    </div>
  );
}
