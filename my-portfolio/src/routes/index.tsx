import { createFileRoute } from "@tanstack/react-router";
import { HomeDocker } from "@/page/home";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="h-[2000px]">
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 flex justify-center">
        <HomeDocker />
      </div>
    </div>
  );
}
