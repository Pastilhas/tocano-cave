import { Head } from "$fresh/runtime.ts";
import { Header } from "../components/Header.tsx";
import { Footer } from "../components/Footer.tsx";
import { Box } from "../components/Box.tsx";
import { TextBox } from "../components/TextBox.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tocano Cave - Projects</title>
        <link rel="icon" href="/favicon.ico?v=2" />
      </Head>
      <Header />
      <Box class="flex gap-5">
        <img
          src="/images/projects/ginger_soul.png"
          class="rounded-lg shadow"
          alt="Ginger Soul"
        />
        <div>
          <h1 class="text-uppercase font-bold">Ginger Soul</h1>
          <h1 class="text-uppercase font-thin mb-9">Game</h1>

          <TextBox>
            <p>
              After your death, your soul was shattered into eight shards and
              scattered throughout the realm. Seven of the shards where absorbed
              by common monsters, and the power within them empowered those
              monsters to rival your original strength. However, one shard fell
              in the property of a ginger boy, which inherits your soul and
              memories.
            </p>
            <p>
              You play as the ginger boy in a quest to regain your lost soul.
              Fight powerful monsters and dismantle the cults they created.
            </p>
          </TextBox>
        </div>
      </Box>
      <Box class="flex gap-5">
        <img
          src="/images/projects/tocano_cave.png"
          class="rounded-lg shadow"
          alt="Tocano Cave"
        />
        <div>
          <h1 class="text-uppercase font-bold">Tocano Cave</h1>
          <h1 class="text-uppercase font-thin mb-9">Website</h1>

          <TextBox>
            <p>
              My personal website, for sharing my professional career, personal
              advancements, and projects. "Tocano" comes from a nickname I used
              to use - which comes from the mispelling of toucan (tucano in
              pt-PT). "Cave" was inspired on the concept of "man cave", used by
              EthosLab for the name of his main base in his LP series.
            </p>
            <p>
              I started this project to develop my web skills, and also to
              showcase who I am as a professional and as a person.
            </p>
          </TextBox>
        </div>
      </Box>
      <Box class="flex gap-5">
        <img
          src="/images/projects/naval_sim.png"
          class="rounded-lg shadow"
          alt="Naval Sim"
        />
        <div>
          <h1 class="text-uppercase font-bold">Naval Sim</h1>
          <h1 class="text-uppercase font-thin mb-9">Game</h1>

          <TextBox>
            <p>
              Due to the lack of resources for control of aquatic vehicles in
              DnD 5e, I decided to create a simple simulator which allows groups
              to visualize in an interactive way their sea adventures.
            </p>
          </TextBox>
        </div>
      </Box>
      <Box class="flex gap-5">
        <img
          src="/images/projects/smithing.png"
          class="rounded-lg shadow"
          alt="Smithing"
        />
        <div>
          <h1 class="text-uppercase font-bold">Smithing</h1>
          <h1 class="text-uppercase font-thin mb-9">Game</h1>

          <TextBox>
            <p>
              Inspired on the Puzzle Pirates minigame Blacksmithing, I made my
              own version as a full game with multiple difficulty levels and a
              story.
            </p>
            <p>
              Unfortunately, the development version was lost in my old computer
              and only an early version remains, available at{" "}
              <a
                href="https://gamejolt.com/games/smithing/394594"
                target="_blank"
                class="underline text-[#4a8db7]"
              >
                GameJolt
              </a>
            </p>
          </TextBox>
        </div>
      </Box>
      <Footer />
    </>
  );
}
