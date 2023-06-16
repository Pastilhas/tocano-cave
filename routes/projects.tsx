import { Head } from "$fresh/runtime.ts";
import { Header } from "../components/Header.tsx";
import { Footer } from "../components/Footer.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tocano - Projects</title>
      </Head>
      <Header />
      <div class="h-[1000em]"></div>
      <Footer />
    </>
  );
}
