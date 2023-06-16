import { Head } from "$fresh/runtime.ts";
import BrandGithub from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/brand-github.tsx";
import BrandLinkedin from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/brand-linkedin.tsx";
import ArrowDown from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/chevron-down.tsx";
import { Header } from "../components/Header.tsx";
import { Footer } from "../components/Footer.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tocano</title>
      </Head>
      <Header />
      <div class="p-8 mx-auto my-5 max-w-screen-md flex rounded-lg shadow bg-gray-100">
        <div class="mr-10">
          <img
            src="/toucan.png"
            class="w-32 h-32 m-0 p-0 rounded-full"
            alt="tocano logo"
          />
          <h1 class="py-5 w-32 text-center text-uppercase font-bold">
            João Campos
          </h1>
          <div class="flex">
            <div class="h-5 w-5"></div>
            <div class="h-5 w-5"></div>
            <a href="https://github.com/Pastilhas" target="_blank">
              <BrandGithub class="h-5 w-5 mr-3" />
            </a>
            <a href="https://www.linkedin.com/in/joaopcampos0/" target="_blank">
              <BrandLinkedin class="h-5 w-5 mr-3" />
            </a>
          </div>
        </div>
        <div>
          <h1 class="text-uppercase font-bold mb-2">Software Developer</h1>
          <div class="mt-2">
            <p>
              Hello, I am João Campos. I have studied Informatics Engineering
              and am currently working as a Software Developer. I have already
              had the opportunity to experience many different environments and
              develop skills I consider essential to a programmer.
            </p>
            <p class="pt-3">
              In the future, I aspire to be a Product Manager, designing my own
              products to satisfy people's needs. For now, I will keep working
              as a developer to enhance my knowledge in the area and widen my
              range of skills.
            </p>
          </div>
        </div>
      </div>
      <div class="p-10 mx-auto my-5 max-w-screen-md rounded-lg shadow bg-gray-100">
        <h1 class="text-uppercase font-bold mb-2">Experience</h1>
        <hr class="h-0.5 w-[6em] mb-3 bg-gray-300" />
        <details id="inegi">
          <summary class="flex items-center">
            <ArrowDown class="h-5 w-5 mr-5" />
            <div class="grid grid-cols-3 gap-10">
              <h2 class="font-bold">INEGI</h2>
              <h2 class="font-bold">Software Developer</h2>
              <h2 class="font-bold">09.2021 – Now</h2>
            </div>
          </summary>
          <div class="mt-5">
            <p>
              I began my journey at INEGI during the development of my Master's
              thesis. The thesis involved the evaluation of the impact of the
              application of augmented reality in industrial processes,
              specifically used for monitoring.
            </p>
            <p class="pt-3">
              After finishing my thesis, I continued working at INEGI. Not only
              did I continue the development of the AR application, I also
              started many different projects, for example:
            </p>
            <p class="pt-3">
              - A chat bot platform which allows employees to ask questions
              related to the regulations of INEGI, making HR's work easier;
            </p>
            <p class="pt-3">
              - A resource reservation platform, which allows employees to
              schedule the creation of a virtual machine in our server. These
              VM's may be used to execute machine learning projects in a
              centralized machine.
            </p>
          </div>
          <div class="flex my-3 text-xs">
            <h2 class="p-1 font-bold mb-1 mr-3 bg-gray-600 rounded-lg text-gray-100">
              Augmented Reality
            </h2>
            <h2 class="p-1 font-bold mb-1 mr-3 bg-gray-600 rounded-lg text-gray-100">
              Machine Learning
            </h2>
            <h2 class="p-1 font-bold mb-1 mr-3 bg-gray-600 rounded-lg text-gray-100">
              Web Dev
            </h2>
            <h2 class="p-1 font-bold mb-1 mr-3 bg-gray-600 rounded-lg text-gray-100">
              Unity
            </h2>
            <h2 class="p-1 font-bold mb-1 mr-3 bg-gray-600 rounded-lg text-gray-100">
              Python
            </h2>
            <h2 class="p-1 font-bold mb-1 mr-3 bg-gray-600 rounded-lg text-gray-100">
              Flask
            </h2>
          </div>
        </details>
        <hr class="h-0.5 my-3 bg-gray-300" />
        <details id="biztapp">
          <summary class="flex items-center">
            <ArrowDown class="h-5 w-5 mr-5" />
            <div class="grid grid-cols-3 gap-10">
              <h2 class="font-bold">BizTapp Gmbh.</h2>
              <h2 class="font-bold">Software Developer</h2>
              <h2 class="font-bold">03.2022 – 09.2022</h2>
            </div>
          </summary>
          <div class="mt-5">
            <p>
              After my Erasmus experience, I was invited by a colleague to join
              a German startup, BizTapp, to help them develop an innovative web
              application.
            </p>
            <p class="pt-3">
              The product consisted on a platform which matches employee with
              suitable projects and teams, depending on their current skills and
              career aspirations. I helped develop the backend for the website,
              mainly the access security and ElasticSearch database.
            </p>
            <p class="pt-3">
              This project allowed me to develop my skills in web development
              using the microservice architecture and to learn how to build an
              ElasicSearch database. Furthermore, by working with foreign
              coworkers from different countries, I improved my ability to work
              in a team in a multicultural environment.
            </p>
          </div>
          <div class="flex my-3 text-xs">
            <h2 class="p-1 font-bold mb-1 mr-3 bg-gray-600 rounded-lg text-gray-100">
              Web Dev
            </h2>
            <h2 class="p-1 font-bold mb-1 mr-3 bg-gray-600 rounded-lg text-gray-100">
              React
            </h2>
            <h2 class="p-1 font-bold mb-1 mr-3 bg-gray-600 rounded-lg text-gray-100">
              Node.js
            </h2>
            <h2 class="p-1 font-bold mb-1 mr-3 bg-gray-600 rounded-lg text-gray-100">
              ElasticSearch
            </h2>
          </div>
        </details>
        <hr class="h-0.5 my-3 bg-gray-300" />
        <details id="midnera">
        <summary class="flex items-center">
            <ArrowDown class="h-5 w-5 mr-5" />
            <div class="grid grid-cols-3 gap-10">
              <h2 class="font-bold">Mindera Gaming</h2>
              <h2 class="font-bold ml-0.5">Game Developer</h2>
              <h2 class="font-bold ml-2">07.2019 – 08.2019</h2>
            </div>
          </summary>
          <div class="mt-5">
            <p>
              In my 2nd year of studies, I took part in an internship at Mindera
              Gaming, a Portuguese company which develops betting games. I
              always had a passion for games and wanted to try out the
              development of this kind of software in a comercial environment.
            </p>
            <p class="pt-3">
              My team and I were given the task to design a game from scratch,
              having as the only restriction that it had to be a western battle
              royale. After much brainstorm, we reached a final idea and
              developed it in Unity.
            </p>
          </div>
          <div class="flex my-3 text-xs">
            <h2 class="p-1 font-bold mb-1 mr-3 bg-gray-600 rounded-lg text-gray-100">
              Game Dev
            </h2>
            <h2 class="p-1 font-bold mb-1 mr-3 bg-gray-600 rounded-lg text-gray-100">
              Multiplayer
            </h2>
            <h2 class="p-1 font-bold mb-1 mr-3 bg-gray-600 rounded-lg text-gray-100">
              Unity
            </h2>
          </div>
        </details>
      </div>
      <div class="p-10 mx-auto my-5 max-w-screen-md rounded-lg shadow bg-gray-100">
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
      </div>
      <div class="p-10 mx-auto my-5 max-w-screen-md rounded-lg shadow bg-gray-100">
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
      </div>
      <Footer />
    </>
  );
}
