import Link from "next/link";

export default function Test() {
  return (
    <main className="p-4 flex flex-col gap-4 h-screen">
      <Link href={"/"}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </Link>
      <div className="flex items-center">
        <div className="lesson-node">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fill-rule="evenodd"
              d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <div className="lesson-connector"></div>
        <div className="lesson-node">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fill-rule="evenodd"
              d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <div className="lesson-connector"></div>
        <div className="lesson-node active">
          <div className="rounded-full w-3 h-3 bg-primary"></div>
        </div>
        <div className="lesson-connector inactive"></div>
        <div className="lesson-node inactive"></div>
        <div className="lesson-connector inactive"></div>
        <div className="lesson-node inactive"></div>
      </div>
      <div className="bg-gray-500 rounded-lg w-48 h-64 grow self-center"></div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua
      </p>
      <div className="flex flex-col gap-4">
        <div className="radio-card">
          <div className="radio-dot"></div>
          Lorem ipsum dolor
        </div>
        <div className="radio-card">
          <div className="radio-dot"></div>
          Lorem ipsum dolor
        </div>
        <div className="radio-card">
          <div className="radio-dot"></div>
          Lorem ipsum dolor
        </div>
        <div className="radio-card">
          <div className="radio-dot"></div>
          Lorem ipsum dolor
        </div>
      </div>
    </main>
  );
}
