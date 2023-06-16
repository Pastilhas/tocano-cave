import { JSX } from "preact";

export function TextBox(props: JSX.HTMLAttributes<HTMLButtonElement>) {
  return (
    <>
      <div class={"space-y-5 " + props.class}>
        {props.children}
      </div>
    </>
  );
}
