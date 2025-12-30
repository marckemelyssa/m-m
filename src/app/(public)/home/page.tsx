import BackgroundVideo from "./bgVideo";
import About from "./sections/about";
import Intro from "./sections/intro";

export default async function Home() {

  return (
    <div className="relative w-full overflow-x-hidden">
      <BackgroundVideo />
      <Intro />
      <About/>
    </div>
  );
}
