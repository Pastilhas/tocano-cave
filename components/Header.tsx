import { JSX } from "preact";

export function HeaderLink(props: JSX.HTMLAttributes<HTMLButtonElement>) {
  return (
    <>
      <a
        href={props.href}
        class="p-3 rounded-lg hover:bg-gray-600 hover:text-gray-100 bg-gray-100 text-gray-600"
      >
        <h2>
          {props.children}
        </h2>
      </a>
    </>
  );
}

export function Header() {
  return (
    <>
      <div class="p-3 mx-auto my-10 max-w-screen-md rounded-lg shadow bg-gray-100">
        <div class="flex space-x-5 font-bold text-uppercase">
          <HeaderLink href="/">Home</HeaderLink>
          <HeaderLink href="/personal">Personal</HeaderLink>
          <HeaderLink href="/projects">Projects</HeaderLink>
        </div>
      </div>
    </>
  );
}
