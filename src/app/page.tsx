import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Herosection from "../components/section/herosection/Herosection";
import Ourclients from "../components/section/ourclients/Ourclients";
import Helping from "../components/section/helping/Helping";
import Design from "../components/section/design/Design";
import Tesla from "../components/section/tesla/Tesla";
import Caring from "../components/section/caring/Caring";
import Pellantesque from "../components/section/pellantesque/Pellantesque";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex-shrink-0">
        <Header />
      </header>

      <main className="flex-grow">
        <Herosection />
        <Ourclients />
        <Helping />
        <Design />
        <Tesla />
        <Caring />
        <Pellantesque />
      </main>

      <footer className="flex-shrink-0">
        <Footer />
      </footer>
    </div>
  );
}
