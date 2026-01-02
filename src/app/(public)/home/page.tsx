import BackgroundVideo from "./bgVideo";
import AboutCode from "./sections/about";
import CodeInfo from "./sections/codeInfo";
import CodeIntro from "./sections/codeIntro";
import Intro from "./sections/intro";

export default async function Home() {

  return (
    <div className="relative w-full overflow-x-hidden">
      <BackgroundVideo />
      <div className="px-4 sm:px-6 md:px-12 lg:px-28 space-y-16">
        <Intro />
        <CodeIntro/>
        <CodeInfo/>
      </div>
    </div>
  );
}
