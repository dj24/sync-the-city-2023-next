import Link from "next/link";

export default function Start() {
  return (
    <Link href={"/home"}>
      <button>Start</button>
    </Link>
  );
}
