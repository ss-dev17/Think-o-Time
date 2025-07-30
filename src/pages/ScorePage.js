import React, { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import toast, { Toaster } from "react-hot-toast";

const ScorePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const toastShown = useRef(false);

  const { score, total } = location.state || { score: 0, total: 100 };
  const totalQuestions = total / 10;
  const correctAnswers = score / 10;
  const wrongAnswers = totalQuestions - correctAnswers;

  useEffect(() => {
    if (toastShown.current) return;
    const percentage = (score / total) * 100;
    setTimeout(() => {
      if (percentage >= 90) {
        toast.success("🔥 Excellent performance!", { id: "score-toast", position: "bottom-center", duration: 3000 });
      } else if (percentage >= 70) {
        toast("👍 Good job!", { id: "score-toast", position: "bottom-center", duration: 3000 });
      } else if (percentage >= 50) {
        toast("🙂 Not bad, keep practicing!", { id: "score-toast", position: "bottom-center", duration: 3000 });
      } else {
        toast.error("😢 Better luck next time!", { id: "score-toast", position: "bottom-center", duration: 3000 });
      }
      toastShown.current = true;
    }, 500);
  }, [score, total]);

  return (
    <>
      <Toaster toastOptions={{
        className:"",
        style: {
          color: "white",
          backgroundColor: "black"
        }
      }}/>
      <div className="min-h-screen bg-slate-900 overflow-hidden text-white">
        <h1 className="web-title">Think-o-Time</h1>
        <div className="flex flex-col justify-center items-center h-[28em] text-center">
          <h1 className="text-3xl mt-10 mb-6 font-normal font-Quicksand">
            🎉 Quiz Completed!
          </h1>
          <div className="text-xl mb-4 font-normal font-Quicksand">
            <p className="text-xl">
              You got {correctAnswers}✅ & {wrongAnswers}❌
            </p>
          </div>
          <button
            onClick={() => navigate("/")}
            className="group relative flex mt-40 px-4 py-2 h-11 w-11 cursor-pointer items-center justify-start overflow-hidden rounded-full bg-slate-700 shadow-lg transition-none md:transition-all duration-200 hover:w-32 hover:rounded-lg active:translate-x-1 active:translate-y-1"
          >
            <div className="flex w-full items-center justify-center transition-all duration-300 md:group-hover:justify-start md:group-hover:px-3">
              <svg className="h-4 w-4" viewBox="0 0 512 512" fill="white">
                <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
              </svg>
            </div>
            <div className="absolute right-5 translate-x-full transform text-lg font-normal font-Rubik text-white opacity-0 transition-none transition-all duration-300 md:group-hover:translate-x-0 md:group-hover:opacity-100">
              Home
            </div>
          </button>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ScorePage;
