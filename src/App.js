import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import QuizPage from "./pages/QuizPage";
import ScorePage from "./pages/ScorePage";

function App() {
  return (
    <>
        <Routes>
          <Route index element={<MainPage />} />
          <Route path="/quiz-page" element={<QuizPage />}/>
          <Route path="/score-page" element={<ScorePage />} />
        </Routes>
    </>
  );
}

export default App;
