import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Box } from "../components/Box.tsx";
import { Footer } from "../components/Footer.tsx";
import { H1 } from "../components/H1.tsx";
import { Header } from "../components/Header.tsx";
import { TextBox } from "../components/TextBox.tsx";

class Gallery {
  games: string[] = [];
  shows: string[] = [];
  books: string[] = [];
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

    for await (const dirEntry of Deno.readDir("static/images/books")) {
      if (dirEntry.isFile) {
        gallery.books.push(dirEntry.name);
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
        <H1>Games</H1>
        <TextBox class="mb-5">
          <p>
            In my free time, I like to play videogames. Nowadays, I mostly play
            roguelike games: One More Gate, Slay the Spire, and Tainted Grail. I
            also still play the MOBA Heroes of the Storm and the ARPG Path of
            Exile.
          </p>
          <p>
            Although I don't play as frequently now, I have also played many
            hours (more than I'd like to share) of Minecraft and Divinity:
            Original Sin II. I also played Roblox since forever. However, it is
            a platform, not an individual game.
          </p>
          <p>
            In my childhood, I used to play primarily MMO games like: Puzzle
            Pirates, Dofus, DragonFable, AdventureQuest Worlds, and MechQuest.
          </p>
          <p>
            I also recommend some other games that I have played. Despite having
            consumed less hours, they marked me in their quality of
            implementation: Deadbolt, Slowdive, Long Gone Days, Stick RPG (1 and
            2), Little Inferno, Paladin Traducer, Monster Sanctuary, ...
          </p>
          <p>
            (list to extend as I remember them)
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
        <H1>Shows</H1>
        <TextBox class="mb-5">
          <p>
            Tired from the day,<br />Shows and movies bring
            relief,<br />Relaxation found.
          </p>
          <p>
            Here is a list of series and movies which I have watched more
            recently and/or impacted me most.
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
        <H1>Books</H1>
        <TextBox class="mb-5">
          <p>
            Crime mysteries and space westerns. Those are my favourite genres
            of literary works.
          </p>
          <p>
            Crime mysteries put you at the edge of your seat (or bed),
            theorycrafting and solving cases together with the characters. It
            engages you in a hunt for more information and, ultimately, closure.
            Although, some mysteries ought to remain unsolved...
          </p>
          <p>
            Similarly, space westerns sow in me the seeds of exploration. They
            ignite the human nature of exponential and unstoppable desire to
            explore the frozen unknown and control the deserted islands beyond.
            The solo hero, maybe accompanied by a small team, ventures into
            danger, looking for something they do not have, and, more often than
            not, will never obtain.
          </p>
        </TextBox>
        <div class="grid md:grid-cols-5 md:gap-2 grid-cols-3 gap-1">
          {data?.books?.map((s) => {
            return (
              <img
                src={"/images/books/" + s}
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
