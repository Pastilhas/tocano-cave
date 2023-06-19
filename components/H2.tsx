import { JSX } from "preact";

export function H2(props: JSX.HTMLAttributes<HTMLButtonElement>) {
  return (
    <>
      <h2 class={"font-bold " + props.class}>
        {props.children}
      </h2>
    </>
  );
}
