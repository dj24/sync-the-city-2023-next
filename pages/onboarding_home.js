import Link from "next/link";
import Image from "next/image";

export default function Test() {
  return (
    <main className="flex flex-col items-center justify-start h-screen bg-[#F1E5FF]">
      <div className="flex flex-col items-center mt-8">
        <Image
          src="/IMG_6451 1.png"
          width={500}
          height={500}
          alt="Picture of the author"
        />

        <div className={"flex flex-col items-center mt-20"}>
          <p className="mb-4 text-center">
            Finances are difficult, <br /> <br /> <br />
            so it's a good thing that <br />
            you're not on your own
          </p>
          <div>
            <button className="text-black px-4 py-2 rounded-br">
              Continue
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
