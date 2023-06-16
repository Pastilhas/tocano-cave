import { Head } from "$fresh/runtime.ts";
import BrandGithub from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/brand-github.tsx";
import BrandLinkedin from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/brand-linkedin.tsx";
import ArrowDown from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/chevron-down.tsx";
import { Header } from "../components/Header.tsx";
import { TextBox } from "../components/TextBox.tsx";
import { Footer } from "../components/Footer.tsx";
import { Box } from "../components/Box.tsx";
import { Tag, TagList } from "../components/Tag.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tocano Cave</title>
        <link rel="icon" href="/favicon.ico?v=2" />
      </Head>
      <Header />
      <Box class="flex">
        <div class="mr-10">
          <img
            src="/images/toucan.png"
            class="w-32 h-32 rounded-full"
            alt="tocano logo"
          />
          <h1 class="py-5 w-32 text-center text-uppercase font-bold">
            João Campos
          </h1>
          <div class="flex justify-between">
            <div></div>
            <a href="https://github.com/Pastilhas" target="_blank">
              <BrandGithub class="aspect-square" />
            </a>
            <a href="https://www.linkedin.com/in/joaopcampos0/" target="_blank">
              <BrandLinkedin class="aspect-square" />
            </a>
            <div></div>
          </div>
        </div>
        <div>
          <h1 class="text-uppercase font-bold mb-2">Software Developer</h1>
          <TextBox class="mt-2">
            <p>
              Hello, I am João Campos. I have studied Informatics Engineering
              and am currently working as a Software Developer. I have already
              had the opportunity to experience many different environments and
              develop skills I consider essential to a programmer.
            </p>
            <p>
              In the future, I aspire to be a Product Manager, designing my own
              products to satisfy people's needs. For now, I will keep working
              as a developer to enhance my knowledge in the area and widen my
              range of skills.
            </p>
          </TextBox>
        </div>
      </Box>
      <Box>
        <h1 class="text-uppercase font-bold mb-2">Experience</h1>
        <hr class="h-0.5 w-[6em] mb-3 bg-gray-300" />
        <details id="inegi">
          <summary class="flex items-center">
            <ArrowDown class="h-5 w-5 mr-5" />
            <div class="flex">
              <h2 class="font-bold w-[10em]">INEGI</h2>
              <h2 class="font-bold w-[20em]">Software Developer</h2>
              <h2 class="font-bold">09.2021 – Now</h2>
            </div>
          </summary>
          <TextBox class="mt-5">
            <p>
              I began my journey at INEGI during the development of my Master's
              thesis. The thesis involved the evaluation of the impact of the
              application of augmented reality in industrial processes,
              specifically used for monitoring.
            </p>
            <p>
              After finishing my thesis, I continued working at INEGI. Not only
              did I continue the development of the AR application, I also
              started many different projects, for example:
            </p>
            <p>
              - A chat bot platform which allows employees to ask questions
              related to the regulations of INEGI, making HR's work easier;
            </p>
            <p>
              - A resource reservation platform, which allows employees to
              schedule the creation of a virtual machine in our server. These
              VM's may be used to execute machine learning projects in a
              centralized machine.
            </p>
          </TextBox>
          <TagList>
            <Tag>Augmented Reality</Tag>
            <Tag>Machine Learning</Tag>
            <Tag>Web Dev</Tag>
            <Tag>Unity</Tag>
            <Tag>Python</Tag>
            <Tag>Flask</Tag>
          </TagList>
        </details>
        <hr class="h-0.5 my-3 bg-gray-300" />
        <details id="biztapp">
          <summary class="flex items-center">
            <ArrowDown class="h-5 w-5 mr-5" />
            <div class="flex">
              <h2 class="font-bold w-[10em]">BizTapp Gmbh.</h2>
              <h2 class="font-bold w-[20em]">Software Developer</h2>
              <h2 class="font-bold">03.2022 – 09.2022</h2>
            </div>
          </summary>
          <TextBox class="mt-5">
            <p>
              After my Erasmus experience, I was invited by a colleague to join
              a German startup, BizTapp, to help them develop an innovative web
              application.
            </p>
            <p>
              The product consisted on a platform which matches employee with
              suitable projects and teams, depending on their current skills and
              career aspirations. I helped develop the backend for the website,
              mainly the access security and ElasticSearch database.
            </p>
            <p>
              This project allowed me to develop my skills in web development
              using the microservice architecture and to learn how to build an
              ElasicSearch database. Furthermore, by working with foreign
              coworkers from different countries, I improved my ability to work
              in a team in a multicultural environment.
            </p>
          </TextBox>
          <TagList>
            <Tag>Web Dev</Tag>
            <Tag>React</Tag>
            <Tag>Node.js</Tag>
            <Tag>ElasticSearch</Tag>
          </TagList>
        </details>
        <hr class="h-0.5 my-3 bg-gray-300" />
        <details id="midnera">
          <summary class="flex items-center">
            <ArrowDown class="h-5 w-5 mr-5" />
            <div class="flex">
              <h2 class="font-bold w-[10em]">Mindera Gaming</h2>
              <h2 class="font-bold w-[20em]">Game Developer</h2>
              <h2 class="font-bold">07.2019 – 08.2019</h2>
            </div>
          </summary>
          <TextBox class="mt-5">
            <p>
              In my 2nd year of studies, I took part in an internship at Mindera
              Gaming, a Portuguese company which develops betting games. I
              always had a passion for games and wanted to try out the
              development of this kind of software in a comercial environment.
            </p>
            <p>
              My team and I were given the task to design a game from scratch,
              having as the only restriction that it had to be a western battle
              royale. After much brainstorm, we reached a final idea and
              developed it in Unity.
            </p>
          </TextBox>
          <TagList>
            <Tag>Game Dev</Tag>
            <Tag>Multiplayer</Tag>
            <Tag>Unity</Tag>
          </TagList>
        </details>
      </Box>
      <Box>
        <h1 class="text-uppercase font-bold mb-2">Education</h1>
        <hr class="h-0.5 w-[6em] mb-3 bg-gray-300" />
        <ul class="ml-5 list-disc">
          <li class="mb-3">
            Faculty of Engineering, University of Porto
            <p class="font-italic font-light">Master's degree</p>
          </li>
          <li class="">
            Faculty of Management Science and Informatics, University of Zilina
            <p class="font-italic font-light">Erasmus+ Programme</p>
          </li>
        </ul>
      </Box>
      <Box>
        <h1 class="text-uppercase font-bold mb-2">Skills</h1>
        <hr class="h-0.5 w-[6em] mb-3 bg-gray-300" />
        <h2 class="font-bold mb-1">Programming Languages</h2>
        <ul class="ml-5 list-square grid grid-cols-4">
          <li>C#</li>
          <li>Java</li>
          <li>Python</li>
          <li>JavaScript</li>
          <li>PHP</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Rust</li>
          <li>Bash</li>
          <li>SQL</li>
          <li>NoSQL</li>
        </ul>
        <h2 class="font-bold mb-1 mt-8">Libraries & Frameworks</h2>
        <ul class="ml-5 list-square grid grid-cols-4">
          <li>Unity</li>
          <li>Node.js</li>
          <li>React</li>
          <li>Pytorch</li>
          <li>MySQL</li>
          <li>PostgreSQL</li>
          <li>ElasticSearch</li>
          <li>MongoDB</li>
          <li>Redis</li>
          <li>Deno</li>
          <li>Laravel</li>
        </ul>
        <h2 class="font-bold mb-1 mt-8">Programming tools</h2>
        <ul class="ml-5 list-square grid grid-cols-4">
          <li>Docker</li>
          <li>Linux</li>
          <li>Git</li>
          <li>GitHub</li>
          <li>VS Code</li>
          <li>Visual Studio</li>
          <li>IntelliJ</li>
        </ul>
        <h2 class="font-bold mb-1 mt-8">Speaking languages</h2>
        <ul class="ml-5 list-square">
          <li>Portuguese (Native)</li>
          <li>English (Professional)</li>
          <li>Spanish (Basic)</li>
          <li>Slovak (Basic)</li>
        </ul>
      </Box>
      <Footer />
    </>
  );
}
