import Presentation from "@/components/Presentation";
import Layout from "../components/Layout";
import About from "@/components/About";
import Divider from "@/components/Divider";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <>
      <Layout />
      <Presentation />
      <Skills />
      <Divider/>
      <Experience />
      <About />
      <Projects/>
    </>
  );
}
