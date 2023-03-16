import Presentation from "@/components/Presentation";
import Layout from "../components/Layout";
import About from "@/components/About";
import Divider from "@/components/Divider";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <>
      <Toaster />
      <Layout />
      <Presentation />
      <Skills />
      <Divider />
      <Experience />
      <About />
      <Projects />
      <Footer />
    </>
  );
}
