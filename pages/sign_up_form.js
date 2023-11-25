import Link from "next/link";
import Image from "next/image";

export default function Sign_up_form() {
  return (
    <main
      className="bg-[#FFF4E9]"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div className="container flex flex-col items-center gap-4">
        <Image
          width={400}
          height={400}
          src="/buddylogo.png"
          alt={"buddy"}
          className="-mb-16 -mt-16"
        />
        <h1>Sign up to register your interest!</h1>
        <form
          target="_blank"
          action="https://formsubmit.co/syncthecitysignup@gmail.com"
          method="POST"
          className="flex flex-col items-center gap-4"
        >
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Email Address"
            required
          />
          <div>
            <button className="flex-1 py-4">Submit Form</button>
            {/*<button type="Continue" className="btn btn-lg btn-dark btn-block bg-red-300">*/}
            {/*  Submit Form*/}
            {/*</button>*/}
          </div>
        </form>
      </div>
    </main>
  );
}
