import { ScriptProps } from "next/script";
import Head from "next/head";
import Navbar from "../Navbar";

export default function Layout({ children }: ScriptProps) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Navbar />
    </>
  );
}
