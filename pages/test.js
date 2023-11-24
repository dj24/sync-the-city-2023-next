import Link from "next/link";
import { useState } from "react";
import { My_Soul } from "next/dist/compiled/@next/font/dist/google";

const myQuestions = [
  {
    question: "Who invented JavaScript?",
    answers: ["Douglas Crockford", "Sheryl Sandberg", "Brendan Eich"],
    correctAnswer: 2,
  },
  {
    question: "Which one of these is a JavaScript package manager?",
    answers: ["Douglas Crockford", "Sheryl Sandberg", "Brendan Eich"],
    correctAnswer: 2,
  },
  {
    question: "Which tool can you use to ensure code quality?",
    answers: ["Douglas Crockford", "Sheryl Sandberg", "Brendan Eich"],
    correctAnswer: 2,
  },
];

export default function Test() {
  const [points, setpoints] = useState(0);
  const [getQuestion, setQuestion] = useState(0);
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [isQuestionAnswered, setIsQuestionAnswered] = useState(false);
  return (
    <main className="p-4 flex flex-col gap-4 h-screen">
      <Link href={"/"}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </Link>
      <div className="flex items-center">
        <div className="lesson-node">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fill-rule="evenodd"
              d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <div className="lesson-connector"></div>
        <div className="lesson-node">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fill-rule="evenodd"
              d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <div className="lesson-connector"></div>
        <div className="lesson-node active">
          <div className="rounded-full w-3 h-3 bg-primary"></div>
        </div>
        <div className="lesson-connector inactive"></div>
        <div className="lesson-node inactive"></div>
        <div className="lesson-connector inactive"></div>
        <div className="lesson-node inactive"></div>
      </div>
      <div className="bg-gray-500 rounded-lg w-48 h-64 grow self-center"></div>
      <p>{myQuestions[getQuestion].question}</p>
      <div className="flex flex-col gap-4">
        <div
          className={`radio-card ${selectedQuestion === 0 && "selected"}`}
          onClick={() => {
            setSelectedQuestion(0);
          }}
        >
          <div className="radio-dot"></div>
          {myQuestions[getQuestion].answers[0]}
        </div>
        <div
          className={`radio-card ${selectedQuestion === 1 && "selected"}`}
          onClick={() => {
            setSelectedQuestion(1);
          }}
        >
          <div className="radio-dot"></div>
          {myQuestions[getQuestion].answers[1]}
        </div>
        <div
          className={`radio-card ${selectedQuestion === 2 && "selected"}`}
          onClick={() => {
            setSelectedQuestion(2);
          }}
        >
          <div className="radio-dot"></div>
          {myQuestions[getQuestion].answers[2]}
        </div>
      </div>

      {getQuestion < myQuestions.length - 1 && (
        <button
          className="self-center"
          onClick={() => {
            if (getQuestion < myQuestions.length - 1) {
              setQuestion(getQuestion + 1);
            }
          }}
        >
          Next
        </button>
      )}

      {getQuestion >= myQuestions.length && (
        <button
          className="self-center"
          onClick={() => {
            if (getQuestion > myQuestions.length) {
              setQuestion(getQuestion - 1);
            }
          }}
        >
          Back
        </button>
      )}

      {getQuestion === myQuestions.length - 1 && (
        <button
          className="self-center"
          onClick={() => {
            if (getQuestion < myQuestions.length - 1) {
              setQuestion(getQuestion + 1);
            }
          }}
        >
          Submit
        </button>
      )}
    </main>
  );
}
