import React, { useState } from "react";
import Dropdown from "../components/Dropdown";
import StartBtn from "../components/StartBtn";
import TypewriterText from "../components/Typewriter";
import Alert from "../components/Alert";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const MainPage = () => {
  const [difficulty, setDifficulty] = useState(null);
  const [showAlert, setShowAlert] = useState(false);

  const items = [
    { id: 1, label: "Easy", value: "easy" },
    { id: 2, label: "Medium", value: "medium" },
    { id: 3, label: "Hard", value: "hard" },
  ];

  const handleDifficultySelect = (item) => {
    setDifficulty(item);
    localStorage.setItem("difficulty", item.value);
  };

  const navigate = useNavigate();
  const handleStartQuiz = () => {
    if (!difficulty) {
      setShowAlert(true);
      return;
    }
    navigate("/quiz-page");
  };
  return (
    <>
    <div className="min-h-screen bg-slate-900 overflow-hidden text-white">
      {showAlert && (
        <Alert
          message="Please select a difficulty level!"
          type="warning"
          duration={3000}
          onClose={() => setShowAlert(false)}
        />
      )}
      <h1 className="web-title">
        <TypewriterText speed="50">Think-o-Time</TypewriterText>
      </h1>
      <div className="mt-[6.25rem] p-8 flex flex-col items-center justify-center">
        <h2 className="mb-4 text-xl font-semibold font-Quicksand">
          Select Difficulty
        </h2>
        <Dropdown
          label="Choose Difficulty"
          items={items}
          onChange={handleDifficultySelect}
        />
      </div>
      <StartBtn onclick={handleStartQuiz} disabled={!setDifficulty} />
      <Footer />
    </div>
    </>
  );
};

export default MainPage;
