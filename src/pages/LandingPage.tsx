import landingSvg from "../assets/landing page.svg";

const LandingPage = () => {
  return (
    <div className="relative w-full">
      <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-4 bg-white">
        <div className="font-bold text-xl text-black">Cognix</div>

        <div className="flex gap-6 text-black text-sm">
          <a href="#">Product</a>
          <a href="#">AI Tutor</a>
          <a href="#">How it works</a>
          <a href="#">Community</a>
          <a href="#">Institutions</a>
        </div>

        <div className="flex items-center gap-4">
          <button className="text-black text-sm">Log in</button>
          <button className="bg-black text-white px-4 py-2 rounded-full text-sm">
            Get started
          </button>
        </div>
      </nav>

      <img
        src={landingSvg}
        alt="Cognix landing page"
        className="w-full block"
      />
    </div>
  );
};

export default LandingPage;