import { JSX } from "preact";

export function Box(props: JSX.HTMLAttributes<HTMLButtonElement>) {
  return (
    <>
      <div class={"p-7 mx-auto my-5 max-w-screen-md rounded-lg shadow bg-gray-100 " + props.class}>
        {props.children}
      </div>
    </>
  );
}
