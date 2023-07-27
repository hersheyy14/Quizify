import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import "./app.css";
import { createContext, useState } from "react";
import Header from "./components/header/Header";

export const DataContext = createContext();
function App() {
  const [url, setUrl] = useState("");
  const [score, setScore] = useState(0);
  const [questionsCount, setQuestionsCount] = useState(0);
  return (
    <main className="App">
      <Header />
      <section className="section-container">
        <DataContext.Provider
          value={{
            url,
            setUrl,
            score,
            setScore,
            setQuestionsCount,
            questionsCount,
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/result" element={<Result />} />
          </Routes>
        </DataContext.Provider>
      </section>
    </main>
  );
}

export default App;
