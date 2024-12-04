import { createFileRoute } from "@tanstack/react-router";
import { HomeDocker } from "@/page/home";
import { PersonDescription } from "@/components/person-description";
import { ResumeCard } from "@/components/resume-card";

import { DATA } from "@/data/resume";
import { About } from "@/page/about";
import BlurFade from "@/components/ui/blur-fade";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col min-h-[100dvh] space-y-10">
      <div className="mx-auto w-full max-w-2xl space-y-8">
        <section>
          <PersonDescription
            name={DATA.name.split(" ")[0]}
            description={DATA.description}
            image="../../src/assets/profile-picture.jpg"
          />
        </section>
        <section>
          <About />
        </section>
        <section>
          <div>
            <BlurFade delay={0.04 * 5}>
              <h2 className="text-xl font-bold">Work Experience</h2>
            </BlurFade>
          </div>

          {DATA.work.map((work, id) => (
            <BlurFade key={work.company} delay={0.04 * 6 + id * 0.05}>
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badge}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
              />
            </BlurFade>
          ))}
        </section>
      </div>
      <HomeDocker />
    </div>
  );
}
