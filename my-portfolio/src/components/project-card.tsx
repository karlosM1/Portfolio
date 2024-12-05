import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Cog } from "lucide-react";
import { SvgIcons } from "./Icons/icons";

export function ProjectCard() {
  return (
    <Card className="w-full">
      <img
        className="w-full rounded-xl"
        src="../../src/assets/dash.png"
        alt="project"
      />
      <CardContent className="flex flex-col my-4">
        <div className="mb-7">
          <h1 className="text-2xl font-bold mb-1">AI-nforcer</h1>
          <p className="text-gray-500">
            AI-nforcer is a full-stack app enabling the Machine Learing model to
            detect if the rider is wearing a helmet or not.
          </p>
        </div>
        <div>
          <h1 className="text-xl font-bold mb-1">Technologies Used:</h1>
          <div>
            <SvgIcons.typeScript />
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-row gap-2">
        <Button>
          <Mail /> Github
        </Button>
        <Button>
          <Cog /> Live demo
        </Button>
      </CardFooter>
    </Card>
  );
}
