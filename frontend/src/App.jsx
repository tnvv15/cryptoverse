function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <nav className="flex justify-between items-center px-8 py-5">
        <h1 className="text-2xl font-bold text-orange-500">
          CryptoVerse
        </h1>

        <button className="bg-orange-500 px-4 py-2 rounded-lg">
          Get Started
        </button>
      </nav>

      <section className="text-center mt-32">
        <h1 className="text-6xl font-bold">
          Learn Cryptocurrency the Easy Way
        </h1>

        <p className="text-gray-400 mt-6 text-xl">
          Master Bitcoin, Ethereum, Blockchain and Web3.
        </p>
      </section>
    </div>
  );
}

export default App;