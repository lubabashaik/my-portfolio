import { Navbar } from "./components/Navbar";
import { HeroSect } from "./components/HeroSect";
import { ProjectSection } from "./components/ProjectSection";
import { AboutMe } from "./components/AboutMe";
import { ContactUs } from "./components/contactUs";
import { Analytics } from "@vercel/analytics/react";
import Experience from "./components/Experience";
function App() {
  return (
    <>
      <div className="bg-deepBlue flex flex-col w-full h-full font-sora overflow-x-hidden relative">
        <Navbar />
        <HeroSect />
        <Experience />
        <ProjectSection />
        <AboutMe />
        <ContactUs />
      </div>
      <Analytics />
    </>
  );
}
export default App;
