import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import SocialLink from "./components/SocialLink";
function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Experience />
      <SocialLink />
      <Contact />
    </div>
  );
}

export default App;
