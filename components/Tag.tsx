import { JSX } from "preact";

export function Tag(props: JSX.HTMLAttributes<HTMLButtonElement>) {
  return (
    <>
      <h2
        class={"px-2 py-1 font-bold mb-1 mr-3 bg-gray-600 rounded-lg text-gray-100 " +
          props.class}
      >
        {props.children}
      </h2>
    </>
  );
}

export function TagList(props: JSX.HTMLAttributes<HTMLButtonElement>) {
  return (
    <>
      <div class="flex my-3 text-xs">
        {props.children}
      </div>
    </>
  );
}
