import { JSX } from "preact";

export function Text(props: JSX.HTMLAttributes<HTMLButtonElement>) {
  return (
    <>
      <div class={"space-y-5 " + props.class}>
        {props.children}
      </div>
    </>
  );
}
