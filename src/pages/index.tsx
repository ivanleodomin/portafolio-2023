import Presentation from "@/components/Presentation";
import Layout from "../components/Layout";
import About from "@/components/About";
import Divider from "@/components/Divider";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
      <Layout />
      <Presentation />
      <Skills/>
      <Experience/>
      <About/>

    </>
  );
}
