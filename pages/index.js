import Head from "next/head";
import Link from "next/link";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="hover:bg-green-300">
          <ul className="flex items-center flex-col gap-20">
            <Link href={"/test"} className="border-solid module ml-20">
              1
            </Link>
            <li className="border-solid module ml-40 mt-5">2</li>
            <li className="border-solid module ml-10">3</li>
            <li className="border-solid module ml-40">4</li>
            <li className="border-solid module mr-30 mt-10">5</li>
            <button>Back to top!</button>
          </ul>
        </div>
      </main>
    </div>
  );
}
