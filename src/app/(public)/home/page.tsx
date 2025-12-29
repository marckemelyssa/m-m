import BackgroundVideo from "./bgVideo";

export default async function Home() {
  // When auth/location is available, pass it here to personalize the feed.

  return (
    <div className="relative text-white overflow-x-hidden">
      <BackgroundVideo />
      <div className="space-y-6 sm:space-y-10 px-4 sm:px-6 lg:px-8">
      </div>
    </div>
  );
}
