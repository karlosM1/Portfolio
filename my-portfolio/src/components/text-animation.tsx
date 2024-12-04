import TextRevealByWord from "./ui/text-reveal";

export function TextScrollAnimation() {
  return (
    <div>
      <div className="z-10 flex min-h-64 items-center justify-center rounded-lg">
        <TextRevealByWord text="Magic UI will change the way you design." />
      </div>
    </div>
  );
}
