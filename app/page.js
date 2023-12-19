import { Button as RenamedButton, Navbar, About, Footer } from "../components"
import RenamedHero from "../components/Hero"

export default function Home() {
  return (
    <div>
      <Navbar />
      <RenamedHero />
      <About />
      <RenamedButton />
      <Footer />
    </div>
  );
}
