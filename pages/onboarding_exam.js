import Link from "next/link";
import Image from "next/image";

export default function Test() {
  return (
    <main className="flex flex-col items-center justify-center h-screen bg-[#FFF4E9]">
      <p className="mb-4 text-center">
        To decide which level you are at, <br />
        please take this quick test
      </p>
      <div className="flex flex-col items-center">
        <div className="mb-4">
          <Image
            src="/Frame 3.png"
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </div>
        <div>
          <button className="text-black px-4 py-2 rounded-br">Continue</button>
        </div>
      </div>
    </main>
  );
}
