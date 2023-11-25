export default function Test() {
  return (
    <main className="flex flex-col items-center justify-start h-screen bg-[#F1E5FF]">
      <div className="mb-4 text-center">
        <form action="" className="form">
          <h1 className="title">Sign up</h1>
          <p className="mb-4 text-center">
            Finances are difficult, <br /> <br />
            please enter your details below <br />
            to register your interest
          </p>
          <div className="inputContainer">
            <input type="text" className="input" placeholder="a" />

            <label for="" className="label">
              Email
            </label>
          </div>
          <div className="flex flex-col items-center mt-8">
            <button className="text-black px-4 py-2 rounded-br">
              Continue
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
