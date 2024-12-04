import { createFileRoute } from "@tanstack/react-router";
import { HomeDocker } from "@/page/home";
import { PersonDescription } from "@/components/person-description";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col min-h-[100dvh] space-y-10">
      <div className="mx-auto w-full max-w-2xl space-y-8">
        <div className="gap-2 flex justify-between">
          <PersonDescription
            name="Karlos"
            description="Full Stack Engineer who’s all about building cool stuff from front to back. I love tackling challenges and making things work. Catch me on Twitter for some tech talk!"
            image="../../src/assets/profile-picture.jpg"
          />
        </div>
      </div>

      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 flex justify-center">
        <HomeDocker />
      </div>
    </div>
  );
}
