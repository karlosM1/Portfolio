import { createFileRoute } from "@tanstack/react-router";
import { HomeDocker } from "@/page/home";
import { PersonDescription } from "@/components/person-description";

import { DATA } from "@/data/resume";
import { About } from "@/page/about";

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
      </div>
      <HomeDocker />
    </div>
  );
}
