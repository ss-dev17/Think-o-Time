import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../components/ProgressBar";
import quizData from "../data/quizData.json";

const QuizPage = () => {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [currQIndex, setCurrQIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [shuffledOptions, setShuffledOptions] = useState([]);
  const [timeLeft, setTimeLeft] = useState(null);
  const [quizEnded, setQuizEnded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Retrieve difficulty from localStorage
  const difficulty = localStorage.getItem("difficulty") || "easy";

  useEffect(() => {
    switch (difficulty) {
      case "easy":
        setTimeLeft(1.5 * 60);
        break;
      case "medium":
        setTimeLeft(2 * 60);
        break;
      case "hard":
        setTimeLeft(2.5 * 60);
        break;
      default:
        setTimeLeft(2 * 60);
    }
  }, [difficulty]);

  useEffect(() => {
    const loadQuestions = () => {
      setIsLoading(true);

      const filtered = quizData.questions.filter(
        (q) => q.difficulty.toLowerCase() === difficulty.toLowerCase()
      );

      const selected = shuffle(filtered).slice(0, 10);

      const mapped = selected.map((q) => ({
        question: q.question,
        correct: q.answer,
        options: shuffle([...q.options]),
      }));

      setQuestions(mapped);
      setIsLoading(false);
    };

    loadQuestions();
  }, [difficulty]);

  // Update options when question changes
  useEffect(() => {
    if (questions.length > 0 && currQIndex < questions.length) {
      setShuffledOptions(questions[currQIndex].options);
      setSelected(null);
    }
  }, [questions, currQIndex]);

  // Timer logic
  useEffect(() => {
    if (timeLeft === null) return;

    if (timeLeft <= 0 && !quizEnded) {
      setQuizEnded(true);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, quizEnded]);

  // Handle quiz end
  useEffect(() => {
    if (quizEnded) {
      const timeout = setTimeout(() => {
        navigate("/score-page", {
          state: {
            score,
            total: questions.length * 10,
          },
        });
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [quizEnded, score, questions.length, navigate]);

  // Utility functions
  const shuffle = (arr) => {
    return [...arr].sort(() => Math.random() - 0.5);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" + secs : secs}`;
  };

  const handleOptionClick = (option) => {
    if (selected || quizEnded) return;

    setSelected(option);
    const isCorrect = option === questions[currQIndex].correct;
    if (isCorrect) setScore((prev) => prev + 10);

    setTimeout(() => {
      if (currQIndex < questions.length - 1) {
        setCurrQIndex((prev) => prev + 1);
      } else {
        setQuizEnded(true);
      }
    }, 1200);
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="text-center mt-8 font-normal font-Quicksand">
        Quiz Incoming...
      </div>
    );
  }

  // Empty questions check
  if (questions.length === 0) {
    return (
      <div className="text-center mt-8 font-normal font-Quicksand">
        No questions available. Please try again.
      </div>
    );
  }

  const currentQ = questions[currQIndex];
  const progressValue = (currQIndex / questions.length) * 100;

  return (
    <>
    <div className="min-h-screen bg-slate-900 overflow-hidden">
      <h1 className="web-title">Think-o-Time</h1>

      <div className="w-full flex justify-center mt-[5rem] mb-2">
        <ProgressBar value={progressValue} className="w-[60%]" />
      </div>

      <div className="flex justify-between max-w-xl mx-auto px-4 text-white">
        <div className="text-[1rem] relative font-normal font-Quicksand max-w-[9rem] sm:max-w-[9rem] md:max-w-[9rem] lg:max-w-[9rem] xl:max-w-[9rem] w-auto px-2 break-words">
          Questions: {currQIndex + 1}/{questions.length}
        </div>
        <div className="text-[1rem] relative font-normal font-Quicksand max-w-[9rem] sm:max-w-[9rem] md:max-w-[9rem] lg:max-w-[9rem] xl:max-w-[9rem] w-auto px-2 break-words score">Score: {score}</div>
      </div>

      <div className="flex justify-center items-center flex-col mt-[5rem] px-4">
        <p className="text-2xl font-medium text-center mb-4 max-w-2xl font-Nunito text-white">
          {currentQ.question}
        </p>
        <div className="flex flex-col items-center mt-4 w-full max-w-2xl">
          {shuffledOptions.map((option, idx) => {
            const isCorrect = option === currentQ.correct;
            const isWrong = selected && option === selected && !isCorrect;

            return (
              <button
                key={idx}
                onClick={() => handleOptionClick(option)}
                disabled={!!selected}
                className={`m-2 p-2 w-full sm:w-[70%] rounded-full border transition-all font-Nunito text-white
                  ${
                    selected
                      ? isCorrect
                        ? "bg-green-500"
                        : isWrong
                        ? "bg-red-500"
                        : "bg-gray-400"
                      : "bg-slate-800 hover:bg-gray-400 border-slate-300"
                  }`}
              >
                {option}
              </button>
            );
          })}
        </div>
      </div>

      <div className="fixed bottom-4 left-4 bg-gray-100 text-black md:text-black px-3 py-1 rounded shadow-md text-sm font-Quicksand">
        ⏳ Time Left: {formatTime(timeLeft)}
      </div>
    </div>
    </>
  );
};

export default QuizPage;
