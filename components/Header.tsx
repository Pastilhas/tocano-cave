export function Header() {
  return (
    <>
      <div class="p-3 mx-auto my-10 max-w-screen-md flex rounded-lg shadow bg-gray-100">
        <a
          href="/"
          class="p-3 mx-3 font-bold rounded-lg hover:bg-gray-600 hover:text-gray-100 bg-gray-100 text-gray-600"
        >
          <h2>
            Home
          </h2>
        </a>
        <a
          href="/personal"
          class="p-3 mx-3 font-bold rounded-lg hover:bg-gray-600 hover:text-gray-100 bg-gray-100 text-gray-600"
        >
          <h2>
            Personal
          </h2>
        </a>
        <a
          href="/projects"
          class="p-3 mx-3 font-bold rounded-lg hover:bg-gray-600 hover:text-gray-100 bg-gray-100 text-gray-600"
        >
          <h2>
            Projects
          </h2>
        </a>
      </div>
    </>
  );
}
