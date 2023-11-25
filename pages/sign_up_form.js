import Link from "next/link";

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
      <div className="container">
        <h1>Sign up to register your interest!</h1>
        <form
          target="_blank"
          action="https://formsubmit.co/syncthecitysignup@gmail.com"
          method="POST"
        >
          <div className="form-group">
            <div className="form-row">
              <div className="col">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Email Address"
                  required
                />
              </div>
            </div>
          </div>
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
