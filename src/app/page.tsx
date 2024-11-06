"use client";

// Store
import { useAppSelector } from "@/lib/hook";

// Components
import { Navbar, Carousel, Drawer } from "@/components";
import GameList from "@/app/game/GameList";
import GameProvider from "@/app/game/GameProvider";

const Home = () => {
  const { showGameProvider } = useAppSelector((state) => state.globalSlice);

  return (
    <>
      <Carousel />
      <Navbar />
      <GameList />
      {showGameProvider && (
        <Drawer title="Game Provider" isOpen={showGameProvider}>
          <GameProvider />
        </Drawer>
      )}
    </>
  );
};

export default Home;
