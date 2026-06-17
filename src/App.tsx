import { Header } from "./pages/Header";
import { Footer } from "./pages/Footer";
import { Hero } from "./pages/Hero";
import { Services } from "./pages/Services";
import { Testimonials } from "./pages/Testimonials";
import { FAQ } from "./pages/FAQs";
import { About } from "./pages/About";
function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
