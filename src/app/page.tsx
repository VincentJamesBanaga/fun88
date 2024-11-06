// Components
import { Header, Footer, Carousel } from "@/components";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-1 flex-col">
        <Header />
        <Carousel />
      </main>
      <Footer />
    </div>
  );
}
