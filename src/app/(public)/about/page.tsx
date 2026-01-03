import Intro from "./sections/intro";

export default async function AboutPage() {

  return (
    <div className="relative w-full overflow-x-hidden">
      <div className="px-4 sm:px-6 md:px-12 lg:px-28 space-y-16">
        <Intro />
      </div>
    </div>
  );
}
