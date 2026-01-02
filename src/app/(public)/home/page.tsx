import BackgroundVideo from "./bgVideo";
import AboutCode from "./sections/about";
import CodeInfo from "./sections/codeInfo";
import Intro from "./sections/intro";

export default async function Home() {

  return (
    <div className="relative w-full overflow-x-hidden">
      <BackgroundVideo />
      <Intro />
      <AboutCode/>
      <CodeInfo/>
    </div>
  );
}
