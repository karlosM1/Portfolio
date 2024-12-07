import { createFileRoute } from "@tanstack/react-router";
import { HomeDocker } from "@/page/home";
import { PersonDescription } from "@/components/person-description";
import { ResumeCard } from "@/components/resume-card";

import { DATA } from "@/data/resume";
import { About } from "@/page/about";
import BlurFade from "@/components/ui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { Technologies } from "@/components/technologies";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col min-h-[100dvh] space-y-10">
      <div className="mx-auto w-full max-w-4xl space-y-8">
        <section>
          <PersonDescription
            name={DATA.name.split(" ")[0]}
            description={DATA.description}
            image="../../src/assets/serrano.jpg"
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
        <section>
          <div className="space-y-12 w-full py-12">
            <BlurFade delay={0.04 * 11}>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                    Technologies
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Technical Skills
                  </h2>
                  <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Here&apos;s some of the tricks I've picked up along the way
                  </p>
                </div>
              </div>
            </BlurFade>
          </div>
          <div>
            <Technologies />
          </div>
        </section>
        <section>
          <div className="space-y-12 w-full py-14">
            <BlurFade delay={0.04 * 11}>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                    My Projects
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Check out my latest work
                  </h2>
                  <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    I&apos;ve worked on a variety of projects, from simple
                    websites to complex web applications. Here are a few of my
                    favorites.
                  </p>
                </div>
              </div>
            </BlurFade>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {DATA.projects.map((project, id) => (
                <BlurFade key={project.title} delay={0.04 * 12 + id * 0.05}>
                  <ProjectCard
                    href={project.href}
                    key={project.title}
                    title={project.title}
                    description={project.description}
                    dates={project.dates}
                    tags={project.technologies}
                    image={project.image}
                    video={project.video}
                    links={project.links}
                  />
                </BlurFade>
              ))}
            </div>
          </div>
        </section>
      </div>
      <HomeDocker />
    </div>
  );
}
