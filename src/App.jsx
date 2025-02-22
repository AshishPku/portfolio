import "./App.css";
import Header from "./components/headers/header";
import About from "./components/about/about";
import MainBlock from "./components/MainBlock/mainblock";
import Skills from "./components/skills/skill";
import Work from "./components/work/work";
import Contact from "./components/contact/contact";
import CopyRight from "./components/copyright/copyright";
function App() {
  return (
    <>
      <Header />
      <MainBlock />
      <About />
      <Skills />
      <Work />
      <Contact />
      <CopyRight />
    </>
  );
}

export default App;
