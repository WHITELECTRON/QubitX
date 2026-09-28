import landingSvg from "../assets/landing page.svg";
import { Link } from "react-router-dom";

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
          <Link to="/login" className="text-black text-sm hover:opacity-70 transition-opacity">
            Log in
          </Link>
          <Link
            to="/signup"
            className="bg-black text-white px-4 py-2 rounded-full text-sm hover:bg-gray-800 transition-colors"
          >
            Get started
          </Link>
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