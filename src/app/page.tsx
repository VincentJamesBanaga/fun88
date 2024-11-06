// Data
import { GAME_LIST, PROVIDER_LIST } from "@/api/data";

// Components
import { Navbar, Carousel, Drawer, ImageWrapper } from "@/components";

export default function Home() {
  return (
    <>
      <Carousel />
      <Navbar />
      <section className="p-2">
        <div className="grid grid-cols-3 gap-2">
          {GAME_LIST.map(({ imagePath }) => (
            <div key={Math.random()} className="h-full w-full bg-gray-100">
              <ImageWrapper
                src={imagePath}
                alt={imagePath}
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-full rounded-lg"
              />
            </div>
          ))}
        </div>
      </section>
      <Drawer title="Game Provider" isOpen={false}>
        <div className="grid grid-cols-2 gap-3 p-3">
          {PROVIDER_LIST.map(({ imagePath }) => (
            <div
              key={Math.random()}
              className="flex justify-center items-center h-14 w-full bg-gray-100 rounded-lg"
            >
              <ImageWrapper
                src={imagePath}
                alt={imagePath}
                width={0}
                height={0}
                sizes="100vw"
                className="w-28 h-auto"
              />
            </div>
          ))}
        </div>
      </Drawer>
    </>
  );
}
