import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Box } from "../components/Box.tsx";
import { Footer } from "../components/Footer.tsx";
import { Header } from "../components/Header.tsx";
import { TextBox } from "../components/TextBox.tsx";

class Gallery {
  games: string[] = [];
  shows: string[] = [];
}

export const handler: Handlers<Gallery | null> = {
  async GET(_, ctx) {
    const gallery: Gallery = new Gallery();
    for await (const dirEntry of Deno.readDir("static/images/games")) {
      if (dirEntry.isFile) {
        gallery.games.push(dirEntry.name);
      }
    }

    for await (const dirEntry of Deno.readDir("static/images/shows")) {
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
        <title>Tocano Cave - Personal</title>
        <link rel="icon" href="/favicon.ico?v=2" />
      </Head>
      <Header />
      <Box>
        <h1 class="text-uppercase font-bold mb-2">Games</h1>
        <hr class="h-0.5 w-[6em] mb-3 bg-gray-300" />
        <TextBox class="mb-5">
          <p>
            In my free time, I like to play videogames. Nowadays, I mostly play
            roguelike games: One More Gate, Slay the Spire, and Tainted Grail. I
            also still play the MOBA Heroes of the Storm and the ARPG Path of
            Exile.
          </p>
          <p>
            Although I don't play as frequently, I have also played many hours
            of Divinity: Original Sin II. In my childhood, I used to play
            primarily MMO games like: Puzzle Pirates, Dofus, DragonFable,
            AdventureQuest Worlds, and MechQuest.
          </p>
        </TextBox>
        <div class="grid md:grid-cols-5 md:gap-2 grid-cols-3 gap-1">
          {data?.games?.map((s) => {
            return (
              <img
                src={"/images/games/" + s}
                class="rounded-lg shadow"
                alt={s}
              />
            );
          })}
        </div>
      </Box>
      <Box>
        <h1 class="text-uppercase font-bold mb-2">Shows</h1>
        <hr class="h-0.5 w-[6em] mb-3 bg-gray-300" />
        <TextBox class="mb-5">
          <p>
            When I am too tired to play games, I entertain myself with movies
            and series. Here are some favourites.
          </p>
        </TextBox>
        <div class="grid md:grid-cols-5 md:gap-2 grid-cols-3 gap-1">
          {data?.shows?.map((s) => {
            return (
              <img
                src={"/images/shows/" + s}
                class="rounded-lg shadow"
                alt={s}
              />
            );
          })}
        </div>
      </Box>
      <Box>
        <h1 class="text-uppercase font-bold mb-2">Books</h1>
        <hr class="h-0.5 w-[6em] mb-3 bg-gray-300" />
        <TextBox class="mb-5">
          <p>
            I also read. I am into crime mystery and space western stories.
          </p>
        </TextBox>
        <div class="grid md:grid-cols-5 md:gap-2 grid-cols-3 gap-1">
          {data?.shows?.map((s) => {
            return (
              <img
                src={"/images/shows/" + s}
                class="rounded-lg shadow"
                alt={s}
              />
            );
          })}
        </div>
      </Box>
      <Footer />
    </>
  );
}
