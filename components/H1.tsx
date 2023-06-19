import { JSX } from "preact";

export function H1(props: JSX.HTMLAttributes<HTMLButtonElement>) {
  return (
    <>
      <h1 class={"text-uppercase font-bold mb-5 " + props.class}>
        {props.children}
      </h1>
    </>
  );
}
