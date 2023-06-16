import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Footer } from "../components/Footer.tsx";
import { Header } from "../components/Header.tsx";

class Gallery {
  games: string[] = [];
  shows: string[] = [];
}

export const handler: Handlers<Gallery | null> = {
  async GET(_, ctx) {
    const gallery: Gallery = new Gallery();
    for await (const dirEntry of Deno.readDir("static/games")) {
      if (dirEntry.isFile) {
        gallery.games.push(dirEntry.name);
      }
    }

    for await (const dirEntry of Deno.readDir("static/shows")) {
      if (dirEntry.isFile) {
        gallery.shows.push(dirEntry.name);
      }
    }

    return ctx.render(gallery);
  },
};

export default function Home({ data }: PageProps<Gallery | null>) {
  return (
    <>
      <Head>
        <title>Tocano - Personal</title>
      </Head>
      <Header />
      <div class="p-10 mx-auto my-5 max-w-screen-md rounded-lg shadow bg-gray-100">
      </div>
      <div class="p-10 mx-auto my-5 max-w-screen-md rounded-lg shadow bg-gray-100">
        <h1 class="text-uppercase font-bold mb-2">Games</h1>
        <hr class="h-0.5 w-[6em] mb-3 bg-gray-300" />
        <div class="grid lg:grid-cols-4 lg:gap-3 grid-cols-2 gap-1">
          {data?.games?.map((s) => {
            return (
              <img
                src={["/games/", s].join("")}
                class="rounded-lg shadow"
                alt={s}
              />
            );
          })}
        </div>
      </div>
      <div class="p-10 mx-auto my-5 max-w-screen-md rounded-lg shadow bg-gray-100">
        <h1 class="text-uppercase font-bold mb-2">Shows</h1>
        <hr class="h-0.5 w-[6em] mb-3 bg-gray-300" />
        <div class="grid lg:grid-cols-4 lg:gap-3 grid-cols-2 gap-1">
          {data?.shows?.map((s) => {
            return (
              <img
                src={["/shows/", s].join("")}
                class="rounded-lg shadow"
                alt={s}
              />
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}
